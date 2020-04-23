import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Flex.scss'
import FlexItem from './FlexItem/FlexItem'
import isNil from 'lodash/isNil'

const Flex = ({
  children,
  direction,
  wrap,
  justifyContent,
  alignItems,
  alignContent,
  className,
  style
}) => {
  return (
    <div
      style={style}
      className={classnames('flex',
        { [`flex-direction-${direction}`]: !isNil(direction) },
        { [`flex-wrap-${wrap}`]: !isNil(wrap) },
        { [`justify-content-${justifyContent}`]: !isNil(justifyContent) },
        { [`align-items-${alignItems}`]: !isNil(alignItems) },
        { [`align-content-${alignContent}`]: !isNil(alignContent) },
        className)}
    >
      {children}
    </div>
  )
}

Flex.Item = FlexItem

Flex.propTypes = {
  children: PropTypes.node,
  classnames: PropTypes.string
}

export default Flex
