import { useEventCallback } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import ReactSelect from 'react-select';
import reactSelect from 'react-select';

const options = [
  {
  value: 'by',
  label: 'Belarus'
  },
  {
    value: 'usa',
    label: 'USA'
  },
  {
    value: 'lt',
    label: 'Lithuania'
  }
]

const getValue = (value) => value ? options.find((option) => option.value === value) : '';

const Form = () => {

  const { register, 
    handleSubmit, 
    formState: {errors},
    reset,
    setValue,
    control,
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

  // так слушаю изменение в инпуте name
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

        <Controller 
          control={control}
          name='adress.country'
          rules={{
            required: 'Это обязательное поле',
          }}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <div>
              <ReactSelect 
                placeholder='Выберите страну'
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

        <div>
          <button>Отправить данные</button>
        </div>
      </form> 
      <div>
          <button onClick={() => {
            setValue('name', 'Max')
            setValue('email', 'test@newtest.com')
          }}>Fill Data</button>
        </div>
    </div>
  )
}

export default Form;