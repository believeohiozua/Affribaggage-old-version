import React, {useState} from 'react'
import {connect} from 'react-redux'
import {disabledButton} from 'utils'
import {Input, Button} from 'components/UI'

import {Form, SubmitButtonWrapper} from './style'

const FindLoadsForm = (props) => {
  const [controls, setControls] = useState({
    origin: {
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Fill in the field',
    },
    destination: {
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Fill in the field',
    }
  })

  const changeHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target
    const fieldValueLength = event.target.value.trim().length

    fields[name].value = event.target.value
    fields[name].isValid = fieldValueLength >= 2

    if (fieldValueLength > 0 && fieldValueLength < 2) {
      fields[name].errorMessage = 'This address is too short'
    }

    if (fieldValueLength === 0) {
      fields[name].errorMessage = 'Fill in the field'
    }

    setControls(fields)
  }

  const blurHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target
    const fieldValueLength = event.target.value.trim().length

    fields[name].isValid = fieldValueLength >= 2
    fields[name].isTouched = true

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

    console.log('formData: ', formData)
    setControls(fields)
  }

  return (
    <Form>
      <Input
        name="origin"
        type="text"
        label="Origin"
        width="35.3%"
        height="38px"
        hasLeftIcon
        value={controls.origin.value}
        isValid={controls.origin.isValid}
        isTouched={controls.origin.isTouched}
        placeholder="London, Port"
        errorMessage={controls.origin.errorMessage}
        onChange={changeHandler}
        onBlur={blurHandler}/>
      <Input
        name="destination"
        type="text"
        label="Destination"
        width="35.3%"
        height="38px"
        hasLeftIcon
        value={controls.destination.value}
        isValid={controls.destination.isValid}
        isTouched={controls.destination.isTouched}
        placeholder="Berlin, Port"
        errorMessage={controls.destination.errorMessage}
        onChange={changeHandler}
        onBlur={blurHandler}/>
      <SubmitButtonWrapper>
        <Button
          btnType="primary"
          disabled={disabledButton(controls)}
          onClick={submitHandler}>{props.areLoadsSelected ? 'FIND LOADS' : 'FIND TRAVELLERS'}</Button>
      </SubmitButtonWrapper>
    </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    areLoadsSelected: state.filters.areLoadsSelected
  }
}

export default connect(mapStateToProps)(FindLoadsForm)