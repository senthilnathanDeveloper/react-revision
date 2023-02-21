import React, { useEffect, useState } from 'react'
import './select.css'


const Select = ({ value, onChange, options, multiple }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [highlighted, setHighLighted] = useState(0)


    const clearOptions = () => {
        multiple ? onChange([]) : onChange(undefined)
    }

    const selectOptions = (option) => {
        if (multiple) {
            if (value.includes(option)) {
                onChange(value.filter(o => o !== option))
            } else {
                onChange([...value, option])
            }
        } else {
            if (option !== value) onChange(option)
        }
        console.log("option", option)
    }

    const isOpenSelected = (option) => {
        return multiple ? value.includes(option) : option === value
    }


    useEffect(() => {
        if (isOpen) setHighLighted(0)
    }, [isOpen])

    return (
        <>
            <div onClick={() => setIsOpen(prev => !prev)} tabIndex={0} className='container'>
                <span className='value'>{multiple
                    ? value.map(v => (
                        <button
                            key={v.value}
                            onClick={e => {
                                e.stopPropagation()
                                selectOptions(v)
                            }}
                            className="option-badge"
                        >
                            {v.label}
                            <span className="remove-btn">&times;</span>
                        </button>
                    ))
                    : value?.label}</span>
                <button className='clear-btn' onClick={e => {
                    e.stopPropagation()
                    clearOptions()
                }}>&times;</button>
                <div className='divider'></div>
                <div className='caret'></div>
                <ul className="options" style={{ display: isOpen ? 'block' : "" }}>
                    {options.map((option, index) => (
                        <li className='option' style={{ backgroundColor: isOpenSelected(option) ? "lightgrey" : "", backgroundColor: index === highlighted ? "lightblue" : "" }} onClick={e => {
                            e.stopPropagation()
                            selectOptions(option)
                            setIsOpen(false)
                        }} key={option.label}>{option.label}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Select