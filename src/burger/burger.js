import React from "react";
import { stack as Menu } from 'react-burger-menu';

import './burger.scss';

import logo from '../navbar/logo.svg';

export default class Burger extends React.Component {

  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu width={'100%'}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <a
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/about"
          href="#"
        >
          <img src={logo} alt="" />
        </a>
        <a onClick={() => this.closeMenu()} className="menu-item" to="/home" href="#main">
          О нас
        </a>
        <a
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/about"
          href="#work"
        >
          Как мы работаем
        </a>
        <a
          onClick={() => this.closeMenu()}
          className="menu-item menu-item-services"
          to="/about"
          href="#services"
        >
          Услуги
        </a>
        <a
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/about"
          href="#steps"
        >
          Порядок работы
        </a>
        <a
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/about"
          href="#steps"
        >
          Вам подарок
        </a>
        <a
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/about"
          href="#steps"
        >
          Отзывы
        </a>
        <a
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/about"
          href="#steps"
        >
          Рассчитать стоимость
        </a>
      </Menu>
    );
  }
}