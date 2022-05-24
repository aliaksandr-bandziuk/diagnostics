import React from "react";
import { useEffect, useRef } from "react";
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import ReactSelect from 'react-select';
import reactSelect from 'react-select';

import './modal.scss';

const options = [
  {
  value: 'minsk',
  label: 'Минск'
  },
  {
    value: 'dusseldorf',
    label: 'Dusseldorf'
  },
  {
    value: 'vilnius',
    label: 'Vilnius'
  }
]

const getValue = (value) => value ? options.find((option) => option.value === value) : '';

const Modal = (props) => {

  const { register, 
    handleSubmit, 
    formState: {errors},
    reset,
    // setValue,
    control,
    // watch,
    getValues,
    getFieldState,
  } = useForm({
    mode: 'onChange',
    // defaultValues: {
    //   // email: 'test@test.com',
    //   mode: 'onChange',
    // }
  });

  const onSubmit = (data) => {
    alert(`Your name is ${data.name}`)
    console.log(`Your name is ${data.name}`);
    console.log(`Your email is ${data.email}`);
    console.log(`Your option is ${data.adress.country}`);
    reset()
  }

  console.log('values', getValues('name'));
  console.log('field state', getFieldState('name'));

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
      <div className="modal__overlay"></div>
      <div className="modal__dialog">
        <div className="modal__close modal__close-button">
          {props.children}
        </div>
        <h2>Введите ваши данные</h2>
        {/* {props.children} */}
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...(register('name', 
          {
            required: 'Имя - это обязательное поле',
          }
          ))}
          type="text"
          placeholder='Введите имя'
        />
        {errors.name && (
          <div style={{color: 'red'}}>{errors.name.message}</div>
        )}
        <input {...(register('email',
          {
            required: 'Email - тоже обязательное поле',
            pattern: {
              value: 
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Пожалуйста, введите валидный email',
            },
          }
          ))}
          type="email"
          placeholder='Введите email'
        />
        {errors.email && (
          <div style={{color: 'red'}}>{errors.email.message}</div>
        )}

        <Controller 
          control={control}
          name='adress.country'
          rules={{
            required: 'Это обязательное поле',
          }}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <div>
              <ReactSelect 
                placeholder='Выберите город'
                options={options}
                value={getValue(value)}
                onChange={((newValue) => onChange(newValue.value))}
              />
              {error && (
                <div style={{color: 'red'}}>{error.message}</div>
              )}
            </div>
          )}
        />

        <div className="button__container">
          <button>Отправить данные</button>
        </div>
      </form> 
      </div>
    </div>
  )

}

export const ModalHeader = props => {
  return(
    <div className="modal__header">
      {props.children}
    </div>
  )
}

export const ModalBody = props => {
  return(
    <div className="modal__body">
      {props.children}
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