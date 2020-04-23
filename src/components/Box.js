import React from 'react'
import PropTypes from 'prop-types'

const Box = ({
  children,
  color,
  height = '100%',
  width = '100%',
}) => {
  return (
    <div
      style={{ backgroundColor: color, width: width, height: height, }}
    >
      {children}
    </div>
  )
}

export default Box
