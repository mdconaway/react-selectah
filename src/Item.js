import React from 'react'
import cc from 'classcat'

import { MenuItem } from './components'
import { CLASSES } from './constants'

const Item = ({ children, id, isActive, isSelected, labelKey, onClick }) => (
  <MenuItem
    className={cc([
      CLASSES.MENU_ITEM,
      {
        [CLASSES.MENU_ITEM_ACTIVE]: isActive,
        [CLASSES.MENU_ITEM_SELECTED]: isSelected
      }
    ])}
    href="#!"
    isActive={isActive}
    isSelected={isSelected}
    onClick={onClick}
  >
    {children[labelKey]}
  </MenuItem>
)

export default Item
