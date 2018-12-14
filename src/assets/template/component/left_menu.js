function scrollToElement(id) {
  var position = document.getElementById(id).offsetTop - 16;
  window.scroll(0, position);
}

var leftContent = document.getElementById('left-content');
if (leftContent != null) {
  var headers = [];
  document.querySelectorAll('h2').forEach(function(header) {
    headers.push(
      '<div>' +
      '<button onclick="scrollToElement(\'' + header.id + '\')">' +
      header.textContent +
      '</button>' +
      '</div>',
    );
  });
  leftContent.innerHTML = headers.join('');
}
