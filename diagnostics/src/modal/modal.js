import React from "react";
import { useEffect, useRef } from "react";

import './modal.scss';

const Modal = (props) => {

  const modalRef = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) {
        props.setShowModal(false)
      }
    }
    window.addEventListener('click', clickOutsideContent);
    return () => {
      window.removeEventListener('click', clickOutsideContent);
    }
  }, [props])

  return(
    <div ref={modalRef} className={`modal ${props.show ? 'active' : ''}`}>
      <p>Вы кликнули на кнопку и открыли модальное окно</p>
      <div>
        {props.children}
      </div>
    </div>
  )

}

export const ModalClose = props => {
  return(
    <div className="modalClose">
      {props.children}
    </div>
  )
}

export default Modal;