/* eslint-disable react/jsx-key */
import React, { useState, useEffect, useRef } from 'react'
import { styled } from '@linaria/react'
interface IAutoComplete {
  options: string[]
  onChange: unknown
  label?: string
  name?: string
  value: string
  required?: boolean
  type?: string
}

const AutoCompleteContainer = styled.div`
  position: relative;
`

const AutoCompleteInput = styled.input`
  position: relative;
  display: block;
  width: 100%;
  border: 1px solid #fff;
  padding: 10px 0;
  padding-left: 10px;
  border-radius: 5px;
  transition: border-color 0.3s ease-out;

  &::placeholder {
    color: #000;
    opacity: 70%;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 10px;
    letter-spacing: 0.42px;
  }
`
const AutoCompleteList = styled.ul`
  position:absolute;
  width:100%
  max-height:100px;
  overflow-y:scroll;
  top:89%;
  left:0px;
  z-index:5;
`
const AutoCompleteListComponent = styled.li`
  color: rgba(0, 0, 0, 0.7);
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 10px;
  letter-spacing: 0.42px;
  padding: 10px 5px;
  background: #fff;
  curson: pointer;

  &:hover {
    background: #f3f3f3;
  }
`

const AutoComplete: React.FC<IAutoComplete> = ({
  options,
  label = 'Input',
  name,
  required,
  type,
  value,
  onChange,
}) => {
  const autoCompleteRef = useRef<HTMLElement | undefined>()
  const [input, setInput] = useState(value)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestions = options.filter((option: string) =>
    option.toLowerCase().includes(input.toLowerCase()),
  )
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowSuggestions(true)
    setInput(e.target.value)
    onChange(e)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setShowSuggestions(false)
    setInput(suggestion)
    const e = {
      target: {
        name: name,
        value: suggestion,
      },
    }
    onChange(e)
  }

  useEffect(() => {
    const handleClick = (e: unknown) => {
      if (autoCompleteRef.current && !autoCompleteRef.current.contains(e.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [value])

  return (
    <AutoCompleteContainer ref={autoCompleteRef}>
      <AutoCompleteInput
        value={value}
        onChange={handleChange}
        placeholder={label}
        name={name}
        type={type}
        onFocus={() => setShowSuggestions(true)}
        required={required}
      />
      {showSuggestions && options.length > 0 && (
        <AutoCompleteList>
          {suggestions.map((suggestion: string) => (
            <AutoCompleteListComponent
              onClick={() => {
                handleSuggestionClick(suggestion)
              }}
              value={suggestion}
            >
              {suggestion}
            </AutoCompleteListComponent>
          ))}
        </AutoCompleteList>
      )}
    </AutoCompleteContainer>
  )
}

export default AutoComplete
