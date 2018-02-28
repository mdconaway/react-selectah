import React from 'react'
import cc from 'classcat'

const Arrow = ({ isOpen, onClick }) => (
  <div
    className={cc([
      'form-icon icon',
      {
        'icon-arrow-up': isOpen,
        'icon-arrow-down': !isOpen
      }
    ])}
    onClick={onClick}
  />
)

export default Arrow
