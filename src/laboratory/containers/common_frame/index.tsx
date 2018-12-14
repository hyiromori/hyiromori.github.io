import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import IconClose from '../../icon/close.png';
import IconMenu from '../../icon/menu.png';

interface Menu {
  path: string,
  titleJp: string,
  titleEn: string,
  level: number
}

interface Props {
  children: Array<React.ReactNode>,
  menuList: Array<Menu>
}

interface State {
  showMenu: boolean,
}

class CommonFrame extends React.Component<Props, State> {
  state: State = { showMenu: false };

  closeMenu = (): void => {
    this.setState({ showMenu: false });
  };

  renderMenuItem(menu: Menu, selected: boolean) {
    const {
      level,
      path,
      titleJp,
      titleEn,
    } = menu;

    const content = (
      <div>
        <div className="title-jp">
          {titleJp}
        </div>
        <div className="title-en">
          {titleEn}
        </div>
      </div>
    );

    if (selected) {
      return (
        <div className={`menu-button level${level} marked`}>
          {content}
        </div>
      );
    }

    return (
      <Link
        to={path}
        className={`menu-button level${level}`}
        onClick={this.closeMenu}
      >
        {content}
      </Link>
    );
  }

  render() {
    const { children, menuList } = this.props;
    const { showMenu } = this.state;
    const currentPath: string = `/${window.location.hash.substr(1)}`;

    return (
      <div>
        <div id="content-header">
          <img
            id="content-header-image"
            alt="Page symbol image"
            src="/assets/images/header_images/laboratory.jpg"
          />
          <div id="content-header-title">
            <div id="home-title-upper">Laboratory</div>
            <div id="home-title-lower">by hyiromori</div>
          </div>
          <div id="content-header-description">
            個人的に作成しているプロダクト集です。
          </div>
        </div>
        <div id="main-content">
          {children}
          {/*
          <div
            id="common-frame-content"
            className={showMenu ? 'show-menu' : ''}
          >
            <div id="common-frame-content-inner">
              {children}
            </div>
          </div>
          {showMenu ? (
            <div id="common-frame-menu">
              <button
                className="common-frame-header-menu-button"
                onClick={() => this.setState({ showMenu: false })}
              >
                <img src={IconClose} />
                <span>Close</span>
              </button>
              {menuList.map((menu: Menu) => (
                <div
                  key={menu.path}
                  className="menu-item"
                >
                  {this.renderMenuItem(menu, currentPath === menu.path)}
                </div>
              ))}
            </div>
          ) : (
             <button
               className="common-frame-header-menu-button"
               onClick={() => this.setState({ showMenu: true })}
             >
               <img src={IconMenu} />
               <span>Menu</span>
             </button>
           )
          }
        */}
        </div>
      </div>
    );
  };
}

export {
  CommonFrame,
};
