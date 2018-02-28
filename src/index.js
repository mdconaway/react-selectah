import React, { Component } from 'react'
import cc from 'classcat'
import Downshift from 'downshift'

import Lifecycle from './lifecycle'
import Methods from './methods'
import defaultProps from './defaultProps'
import propTypes from './propTypes'
import { Clear, Input, InputContainer, Menu, RootContainer } from './components'
import { CLASSES } from './constants'

class Select extends Methods(Lifecycle(Component)) {
  static propTypes = propTypes
  static defaultProps = defaultProps

  constructor(props) {
    super()

    this.state = {
      allItems: this.initItems(props.options),
      selectedItems: []
    }
  }

  render() {
    const {
      clearable,
      multiple,
      name,
      placeholder,
      searchable,
      Arrow,
      Item
    } = this.props

    return (
      <Downshift
        onChange={this.handleChange}
        onStateChange={this.handleStateChange}
        itemToString={this.itemToString}
        render={({
          clearSelection,
          getInputProps,
          getItemProps,
          getRootProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
          toggleMenu
        }) => (
          <RootContainer
            {...getRootProps({
              className: CLASSES.ROOT,
              refKey: 'innerRef'
            })}
          >
            <InputContainer
              className={cc([
                CLASSES.INPUT_CONTAINER,
                'has-icon-right',
                { 'is-focused': isOpen }
              ])}
              isOpen={isOpen}
              onClick={toggleMenu}
            >
              {multiple && (
                <div className="chip">
                  {selectedItem}
                  <button type="button" className="btn btn-clear" />
                </div>
              )}
              <Input
                {...getInputProps({
                  className: CLASSES.INPUT,
                  name,
                  placeholder,
                  readOnly: !searchable,
                  type: 'text'
                })}
              />
              {clearable &&
                selectedItem && (
                  <Clear
                    className="form-icon icon icon-cross"
                    onClick={clearSelection}
                  />
                )}
              <Arrow isOpen={isOpen} />
            </InputContainer>
            {isOpen && (
              <Menu className={CLASSES.MENU}>
                {this.renderItems({
                  getItemProps,
                  highlightedIndex,
                  inputValue,
                  selectedItem
                })}
              </Menu>
            )}
          </RootContainer>
        )}
      />
    )
  }
}

export default Select
