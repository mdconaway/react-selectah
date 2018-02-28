/**
 * Property Types
 */
import PropTypes from 'prop-types'

export default {
  clearable: PropTypes.bool,
  closeOnSelect: PropTypes.bool,
  hideSelected: PropTypes.bool,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  searchable: PropTypes.bool,
  taggable: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number
  ]),
  valueKey: PropTypes.string
  //Arrow
  //Item
  //EmptyItem
}
