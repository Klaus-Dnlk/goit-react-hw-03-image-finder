import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hanldeKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hanldeKeyDown);
  }

  hanldeKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Backdrop} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={this.props.bigImage} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
