const fs = require('fs-extra');
const read = require('fs-readdir-recursive');
const ejs = require('ejs');
const marked = require('marked');
const yaml = require('js-yaml');
const path = require('path');
const sass = require('node-sass');

const version = (new Date()).toISOString();
const isDevelopment = process.env.NODE_ENV === 'development';

const rootDir = path.join(__dirname, '..');
const resourceDir = path.join(rootDir, 'resource');
const outputDir = path.join(rootDir, isDevelopment ? '.temp' : '..');

const renderer = new marked.Renderer();
renderer.heading = (text, level, raw) => (`<h${level} id="${raw}">${text}</h${level}>\n`);

const root = (relativePath) => path.join(rootDir, relativePath);
const resource = (relativePath) => path.join(resourceDir, relativePath);
const output = (relativePath) => path.join(outputDir, relativePath);

// ----- Embedded Files -----

const css = sass.renderSync({
  file: resource('assets/styles/index/index.scss'),
  outputStyle: 'compressed',
}).css.toString().trim();

const highlight = fs.readFileSync(resource('assets/scripts/highlight.pack.js'), 'utf-8');

const imageFileBase64 = (relativePath) => {
  const filePath = resource(`assets/images/${relativePath}`);
  const rawExtension = path.extname(filePath);
  const ext = rawExtension === 'jpg' ? 'jpeg' : rawExtension;
  const base64Data = fs.readFileSync(filePath, 'base64');
  return `data:image/${ext};base64,${base64Data}`;
};

// ----- Data -----

const DefaultData = {
  file: {
    css,
    highlight,
  },
  imageFileBase64,
  version,
  template: 'default',
  title: 'No Title',
  description: 'Web系フルスタックエンジニア hyiromori のポートフォリオサイトです。',
  keywords: 'portfolio, hyiromori',
};
const getData = (customData) => {
  const data = Object.assign({}, DefaultData, customData);
  data.metaTitle = `${data.title} | Portfolio by hyiromori`;
  return data;
};

// ----- Converter -----

const yamlExtracter = new RegExp('<!--\n[\\s\\S]+\n-->', 'm');
const convertMarkdown = (
  markdownFilePath,
  templateHtmlPath,
  customData = {},
) => new Promise((resolve, reject) => {
  const html = fs.readFileSync(markdownFilePath, 'utf-8');
  const headerComment = html.match(yamlExtracter)[0] || '';
  const yamlText = headerComment.substring(5, headerComment.length - 4);

  const variables = yaml.safeLoad(yamlText);
  const pageData = getData(Object.assign({}, variables, customData));
  const content = marked(ejs.render(html, pageData), { renderer });

  ejs.renderFile(templateHtmlPath, Object.assign({ content }, pageData), {}, (error, html) => {
    if (error) {
      reject(error);
    }
    resolve({ html, variables });
  });
});

// ----- HOME -----

const convertHome = () => {
  convertMarkdown(resource('home.md'), resource('home.html')).then((result) => {
    fs.writeFileSync(output('index.html'), result.html);
  });

  const EXCLUDE = new RegExp('.*assets/styles/index/.*');
  ejs.renderFile(resource('service_worker.js'), { version }, (error, html) => {
    if (error) {
      throw new Error(error);
    }
    fs.writeFileSync(output('service_worker.js'), html);
  });
};

// ----- 404 -----

const convert404 = () => {
  convertMarkdown(resource('404.md'), resource('404.html')).then((result) => {
    fs.writeFileSync(output('404.html'), result.html);
  });
};

// ----- Blog -----

const convertBlog = () => {
  const BlogFileRegexp = /^20\d\d-\d\d-\d\d_[A-Za-z0-9-]+\.md$/;
  Promise.all(fs
    .readdirSync(root('blog/publish'))
    .filter(file => file.match(BlogFileRegexp))
    .sort().reverse()
    .map((blog) => {
      const splited = blog.split('_');
      const absolutePath = `/blog/${splited[0]}/${splited[1].split('.')[0]}.html`;
      return convertMarkdown(root(`blog/publish/${blog}`), resource('blog/article.html'))
        .then((result) => {
          fs.mkdirsSync(path.dirname(output(absolutePath)));
          fs.writeFileSync(output(absolutePath), result.html);
          return Object.assign({ absolutePath, date: splited[0] }, result.variables);
        });
    }),
  ).then((blogs) => {
    return convertMarkdown(resource('blog/blog.md'), resource('blog/blog.html'), { blogs });
  }).then((result) => {
    fs.writeFileSync(output('blog/index.html'), result.html);
  });
};

// ----- Laboratory -----

const convertLaboratory = () => {
  convertMarkdown(resource('laboratory/laboratory.md'), resource('laboratory/laboratory.html'))
    .then((result) => fs.writeFileSync(output('laboratory/index.html'), result.html));

  ejs.renderFile(resource('laboratory/service_worker.js'), { version }, (error, html) => {
    if (error) {
      throw new Error(error);
    }
    const outputPath = output('laboratory/service_worker.js');
    fs.mkdirsSync(path.dirname(outputPath));
    fs.writeFileSync(outputPath, html);
  });
};

// ----- Assets -----

const copyAssets = () => {
  // const EXCLUDE = new RegExp('.*assets/styles/index/.*');
  // const filter = (src/*, dist*/) => !src.match(EXCLUDE);
  fs.copySync(resource('assets/fonts'), output('assets/fonts'));
  fs.copySync(resource('assets/images'), output('assets/images'));
};

// ----- Execute -----
copyAssets();
convertHome();
convert404();
convertBlog();
convertLaboratory();
