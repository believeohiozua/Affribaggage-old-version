import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Input, Button} from 'components/UI'
import {checkValidity, disabledButton} from 'utils'

import {
  RegisterLoginFormWrapper,
  FormHeader,
  Title,
  GoogleConnect,
  Nav,
  Form,
  InputWrapper,
  ButtonWrapper
} from './style'

const RegisterLoginForm = (props) => {
  const [controls, setControls] = useState({
    email: {
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Fill in the field',
      rules: {
        required: true,
        isEmail: true
      }
    },
    password: {
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Fill in the field',
      rules: {
        required: true,
        minLength: 6,
        maxLength: 60
      }
    }
  })

  const changeHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target

    fields[name].value = event.target.value
    fields[name].isValid = checkValidity(event.target.value, fields[name].rules)

    if (fields[name].value.trim() === '') {
      fields[name].errorMessage = 'Fill in the field'
    }

    if (fields.email.value.trim().length) {
      fields.email.errorMessage = 'Wrong email address'
    }

    if (fields.password.value.trim().length < 6 && fields.password.value.trim().length > 0) {
      fields.password.errorMessage = 'Password is too short'
    }

    if (fields.password.value.trim().length > 60) {
      fields.password.errorMessage = 'Password is too long'
    }

    setControls(fields)
  }

  const blurHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target

    fields[name].isValid = checkValidity(event.target.value, fields[name].rules)
    fields[name].isTouched = true

    if (fields[name].value.trim() === '') {
      fields[name].errorMessage = 'Fill in the field'
    }

    if (fields.email.value.trim().length) {
      fields.email.errorMessage = 'Wrong email address'
    }

    if (fields.password.value.trim().length < 6 && fields.password.value.trim().length > 0) {
      fields.password.errorMessage = 'Password is too short'
    }

    if (fields.password.value.trim().length > 60) {
      fields.password.errorMessage = 'Password is too long'
    }

    setControls(fields)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const fields = {...controls}
    const formData = {}

    Object.entries(fields).forEach(item => {
      formData[item[0]] = item[1].value
      item[1].value = ''
      item[1].isValid = false
      item[1].isTouched = false
      item[1].errorMessage = 'Fill in the field'
    })

    console.log(formData)
    setControls(fields)
  }

  return (
    <RegisterLoginFormWrapper>
      <FormHeader>
        <Title>Sign {!props.isLoginFormActive ? 'up' : 'in'} for Afribaggage</Title>
        <GoogleConnect>
          {!props.isLoginFormActive ? 'Connect' : 'Login'} with <Nav to="#!">Google</Nav>
        </GoogleConnect>
      </FormHeader>
      <Form>
        <InputWrapper>
          <Input
            name="email"
            type="text"
            label="Email address"
            height="45px"
            value={controls.email.value}
            isValid={controls.email.isValid}
            isTouched={controls.email.isTouched}
            errorMessage={controls.email.errorMessage}
            placeholder="your@email.com"
            onChange={changeHandler}
            onBlur={blurHandler}/>
          </InputWrapper>
        <InputWrapper>
          <Input
            name="password"
            type="password"
            label="Password"
            height="45px"
            value={controls.password.value}
            isValid={controls.password.isValid}
            isTouched={controls.password.isTouched}
            errorMessage={controls.password.errorMessage}
            placeholder="••••••••"
            onChange={changeHandler}
            onBlur={blurHandler}/>
          </InputWrapper>
        <ButtonWrapper>
          <Button
            btnType="primary"
            disabled={disabledButton(controls)}
            onClick={submitHandler}>
            SIGN {!props.isLoginFormActive ? 'UP' : 'IN'}
          </Button>
        </ButtonWrapper>
      </Form>
    </RegisterLoginFormWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoginFormActive: state.registerLogin.isLoginFormActive
  }
}

export default connect(mapStateToProps)(RegisterLoginForm)