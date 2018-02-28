import React from 'react'
import cc from 'classcat'

import { MenuItem } from './components'
import { CLASSES } from './constants'
import Arrow from './Arrow'
import Item from './Item'

const noop = () => {}

export default {
  clearable: true,
  closeOnSelect: false,
  /**
   * Hide already selected options
   * @default false
   * @type {Boolean}
   */
  hideSelected: false,
  labelKey: 'label',
  multiple: false,
  name: undefined,
  noResults: 'No results found',
  onChange: noop,
  options: [],
  placeholder: 'Select',
  searchable: true,
  taggable: true,
  value: undefined,
  valueKey: 'value',

  Arrow,
  Item,
  EmptyItem: ({ text }) => (
    <MenuItem className={cc([CLASSES.MENU_ITEM, CLASSES.MENU_ITEM_EMPTY])}>
      {text}
    </MenuItem>
  )
}
