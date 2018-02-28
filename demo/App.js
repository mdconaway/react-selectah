import React, { Component } from 'react'
import starWarsNames from 'starwars-names'
import Select from '../src'

import Option from './Option'
import TextInput from './TextInput'

class App extends Component {
  state = {
    clearable: true,
    multiple: false,
    name: 'starwars-name',
    options: starWarsNames.all,
    placeholder: undefined,
    searchable: false,
    taggable: false,
    value: undefined,
  }

  handleChange = value => {
    this.setState({ value })
  }

  handleInput = e => {
    const key = e.target.name
    const value = e.target.value
    this.setState({ [key]: value })
  }

  handleToggleOption = e => {
    const key = e.target.name
    this.setState({ [key]: !this.state[key] })
  }

  render() {
    const {
      clearable,
      multiple,
      placeholder,
      searchable,
      taggable,
      value,
    } = this.state

    return (
      <div className="container grid-md">
        <div className="columns">
          <div className="column col-12">
            <h1>React Selectah</h1>
          </div>
          <div className="column col-6">
            <Select
              {...this.state}
              onChange={this.handleChange}
            />
          </div>
          <div className="column col-6">
            <ul className="menu" style={{ transform: 'none' }}>
              <li className="divider" data-content="OPTIONS" />
              <li className="menu-item">
                <Option
                  checked={clearable}
                  label="Clearable"
                  name="clearable"
                  onChange={this.handleToggleOption}
                />
                <Option
                  checked={multiple}
                  label="Multiple"
                  name="multiple"
                  onChange={this.handleToggleOption}
                />
                <Option
                  checked={searchable}
                  label="Searchable"
                  name="searchable"
                  onChange={this.handleToggleOption}
                />
                <Option
                  checked={taggable}
                  label="Taggable"
                  name="taggable"
                  onChange={this.handleToggleOption}
                />
              </li>
              <li className="menu-item">
                <TextInput
                  label="Placeholder"
                  name="placeholder"
                  onChange={this.handleInput}
                  placeholder="Placeholder"
                  value={placeholder}
                />
              </li>
              <li className="divider" data-content="OUTPUT" />
              <li className="menu-item">
                <div className="form-group">
                  <label className="form-label">
                    Selected Value
                  </label>
                  <pre className="code m-0">{value || 'Nothing selected'}</pre>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
