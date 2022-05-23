import { useEventCallback } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'

const Form = () => {

  const { register, 
    handleSubmit, 
    formState: {errors},
    reset,
    watch,
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
    reset()
  }

  const watchName  = watch('name');

  console.log('values', getValues('name'));
  console.log('field state', getFieldState('name'));

  return (
    <div>
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
        <div>
          <button>Отправить данные</button>
        </div>
      </form> 
    </div>
  )
}

export default Form;