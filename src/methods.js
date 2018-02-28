/**
 * Component Methods
 */
import cc from 'classcat'
import matchSorter from 'match-sorter'

import { MenuItem } from './components'
import { CLASSES } from './constants'

export default Base =>
  class extends Base {
    getItems = value => {
      const { allItems } = this.state
      const items = value ? matchSorter(allItems, value) : allItems
      // allItems.filter(item => !value || item.includes(value))
      return items.length > 0 ? items : []
    }

    handleChange = (value, props) => {
      console.log('handleChange', value, props)
      //this.setState({ })
      this.handleAddItem(value)
      this.props.onChange(value)
    }

    handleStateChange = (changes, state) => {
      console.log('handleStateChange', changes, state)
    }

    handleAddItem = item => {
      const selectedItems = [...this.state.selectedItems, item]
      this.setState({ selectedItems })
    }

    handleRemoveItem = item => {
      const selectedItems = [...this.state.selectedItems]
      selectedItems.splice(item.index, 1)
      this.setState({ selectedItems })
    }

    initItems = items =>
      items.map((item, index) => ({
        id: item,
        index,
        label: item
      }))

    itemToString = item => {
      //console.log('itemToString', item)
      return item ? item.toString() : ''
    }

    renderItems = ({
      getItemProps,
      highlightedIndex,
      inputValue,
      selectedItem
    }) => {
      const {
        EmptyItem,
        Item,
        labelKey,
        multiple,
        noResults,
        searchable
      } = this.props
      const items = this.getItems(searchable ? inputValue : null)

      if (items.length > 0) {
        return items.map((item, index) => (
          <Item
            {...getItemProps({
              index: item.index,
              item: item.id,
              isActive: highlightedIndex === item.index,
              isSelected: selectedItem === item.id,
              key: item.id,
              labelKey
              //onClick: this.handleChange,
            })}
          >
            {item}
          </Item>
        ))
      }

      return <EmptyItem text={noResults} />
    }
  }
