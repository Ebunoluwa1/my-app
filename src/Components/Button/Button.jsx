import React from 'react'
import { StyledButton } from './Button.styled'
import { Link } from 'react-router-dom'

const Button = () => {

function handleClick() {
   alert(' I am a button')
}

  return (
    <StyledButton>
     <div>

      <Link className='link' to='/'>  <h2>Button</h2> </Link></div>
        <div>
          <h3>Buttons</h3>
          <br></br>
        <button onClick={handleClick}> Primary</button>
        <button inputColor='green'secondary onClick={handleClick}>Secondary</button>
        <button  inputColor='blue'tertiary onClick={handleClick}> Tertiary</button>
        </div>
        
        <div>
          <h3>Buttons</h3>
          <br />
        <button inputColor='yellow' onClick={handleClick}> Normal</button>
        <button  inputColor='purple'onClick={handleClick}> BTN</button>
      </div>
    </StyledButton>
  )
}

export default Button