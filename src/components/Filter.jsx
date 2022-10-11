import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label } from './styles.styled'

export const Filter = ({ onChange, value }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onChange} value={value} name="filter" />
    </Label>
  )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}
