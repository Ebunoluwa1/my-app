import React from 'react'
import { Link } from 'react-router-dom';
import { StyledSidebar } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <StyledSidebar>  
           <h1>Soar</h1>
        <div className='app__sidebar-header'>
        
                <Link className='link' to='/Dashboard'> 
                <h3>Dashboard</h3> </Link>
               
            </div>
              
              <div className='app__sidebar-components'>
                 <div>
                 <Link className='link' to='Button'><h4>Buttons</h4></Link>
                 </div>
                
                  <div>
                  <Link className='link' to='InputField'><h4>Input</h4></Link> 
                  </div>

              </div>
         </StyledSidebar>
  )
}

export default Sidebar