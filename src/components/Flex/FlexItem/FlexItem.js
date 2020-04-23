import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import isNil from 'lodash/isNil'
import './FlexItem.scss'

const FlexItem = ({
  children,
  order,
  grow,
  shrink,
  alignSelf,
  className,
  style,
}) => {
  return (
    <div
      style={style}
      className={classnames(
        { [`order-${order}`]: !isNil(order) },
        { [`flex-grow-${grow}`]: !isNil(grow) },
        { [`flex-shrink-${shrink}`]: !isNil(shrink) },
        { [`align-self-${alignSelf}`]: !isNil(alignSelf) },
        className)}
    >
      {children}
    </div>
  )
}

FlexItem.propTypes = {
  children: PropTypes.node,
  order: PropTypes.number,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  alignSelf: PropTypes.string,
  classnames: PropTypes.string
}

export default FlexItem
