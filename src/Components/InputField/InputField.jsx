import React, { useState } from 'react'
import { StyledInputField } from './InputField.styled'
import { Link } from 'react-router-dom'

const InputField= () => {


    function handleChange(e){
      e.preventDefault()
        alert('Type in your input here')
       
    }
  return (
    <StyledInputField>

      <Link to='/' className='link'> <h2> The InputField</h2> </Link>
        <input 
        type='text'
        placeholder='Enter text here...'
        onClick={handleChange}
        />

         <div className='input__group'>
          <div> 
            <input 
            type='checkbox'
            placeholder='Enter text here...'
            aria-label=' checkbox for text input '
           onClick={handleChange} 
             />
          </div>
          <input 
            type='text'
            placeholder='Enter text here...'
           onClick={handleChange}
            />
         </div>
          

         <div className='input__group'>
          <div>
             <input 
              type='radio'
              placeholder='Enter text here...'
              aria-label=' radio for text input '
             onClick={handleChange} 
              />
              </div>
          <input 
        type='text'
        placeholder='Enter text here...'
       onClick={handleChange}
        />
         </div>
       

       
        </StyledInputField>
  )
}

export default InputField