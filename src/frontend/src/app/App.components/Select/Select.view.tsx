import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useState, useEffect } from 'react'

import { SelectBorder, SelectInner, SelectStyled } from './Select.style'

type SelectViewProps = {
  options: string[]
  defaultOption: string
  selectCallback: (e: string) => void
}

export const SelectView = ({ options, defaultOption, selectCallback }: SelectViewProps) => {
  const [classes, setClasses] = useState(['select-menu'])
  const [selectedIndex, setSelectedIndex] = useState(options.indexOf(defaultOption) || 0)

  useEffect(() => {
    setSelectedIndex(options.indexOf(defaultOption) || 0)
  }, [defaultOption, options])

  const handleClick = () => {
    if (!classes.includes('open')) setClasses([...classes, 'open'])
  }

  const handleSelect = (i: number) => {
    selectCallback(options[i])
    setSelectedIndex(i)
    if (i > selectedIndex) setClasses([...classes, 'tilt-down'])
    else if (i < selectedIndex) setClasses([...classes, 'tilt-up'])
    else setClasses(['select-menu'])
    setTimeout(() => {
      setClasses(['select-menu'])
    }, 500)
  }

  return (
    <SelectStyled className={classes.join(' ')} onClick={() => handleClick()}>
      <SelectBorder />
      <SelectInner>
        <select data-menu defaultValue={selectedIndex}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </SelectInner>
      <div className="selector">
        <em />
        <ul style={{ transform: `translateY(-${selectedIndex * 36}px)` }}>
          {options.map((option, i) => (
            <li
              key={option}
              onClick={() => {
                if (selectedIndex === i && classes.includes('open')) handleSelect(i)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <ul style={{ transform: `translateY(-${selectedIndex * 36}px)` }}>
        {options.map((option, i) => (
          <li key={option} onClick={() => handleSelect(i)}>
            {option}
          </li>
        ))}
      </ul>
    </SelectStyled>
  )
}

SelectView.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.string,
  selectCallback: PropTypes.func.isRequired,
}

SelectView.defaultProps = {}
