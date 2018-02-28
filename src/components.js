/**
 * Styled Components
 */
import styled from 'styled-components'

import { CLASSES, COLORS } from './constants'

export const Clear = styled.div`
  right: 1.25rem !important;
  height: 10px !important;
  width: 10px !important;
  opacity: 0.6;
`

export const BaseMenu = styled.div`
  background: #fff;
  border-radius: 0.1rem;
  box-shadow: 0 0.05rem 0.2rem rgba(69, 77, 93, 0.3);
  list-style: none;
  margin: 0;
  min-width: 180px;
  padding: 0.4rem;
  transform: translateY(0.2rem);
  z-index: 300;
`

export const Menu = BaseMenu.extend`
  left: 0;
  max-height: 300px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
`

export const MenuItem = styled.a`
  display: block;
  margin-top: 0;
  padding: 0 0.4rem;
  text-decoration: none;
  user-select: none;
  ${props => props.isActive && ''} ${props =>
      props.isSelected &&
      `
    color: #fff;
    background: ${COLORS.PRIMARY};
  `};
`

export const BaseInput = styled.div`
  appearance: none;
  background: #fff;
  background-image: none;
  border: 0.05rem solid #caced7;
  border-radius: 0.1rem;
  color: #50596c;
  display: block;
  font-size: 0.8rem;
  height: 1.8rem;
  line-height: 1rem;
  max-width: 100%;
  outline: none;
  padding: 0.35rem 0.4rem;
  position: relative;
  transition: all 0.2s ease;
  width: 100%;
`

const InputElement = BaseInput.withComponent('input')

export const Input = InputElement.extend`
  border-color: transparent;
  box-shadow: none;
  display: inline-block;
  flex: 1 0 auto;
  height: 1.2rem;
  line-height: 0.8rem;
  margin: 0.1rem;
  width: auto;

  &[readonly] {
    cursor: default;
  }
`

export const InputContainer = BaseInput.extend`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  min-height: 1.6rem;
  padding: 0.1rem;

  ${props =>
    props.isOpen &&
    `
    box-shadow: 0 0 0 .1rem rgba(87, 85, 217, .2);
    border-color: ${COLORS.PRIMARY};
  `};
`

export const RootContainer = styled.div`
  position: relative;

  &.autocomplete-oneline {
    .form-autocomplete-input {
      flex-wrap: nowrap;
      overflow-x: auto;
    }

    .chip {
      flex: 1 0 auto;
    }
  }
`

const BaseIcon = styled.span`
  box-sizing: border-box;
  display: inline-block;
  font-size: inherit;
  font-style: normal;
  height: 1em;
  position: relative;
  text-indent: -9999px;
  vertical-align: middle;
  width: 1em;
`

export const Icon = BaseIcon.extend`
  height: 0.8rem;
  margin: 0 0.35rem;
  position: absolute;
  right: 0.05rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0.8rem;
  z-index: 2;
`
