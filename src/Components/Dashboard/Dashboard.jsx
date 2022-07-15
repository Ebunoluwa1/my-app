import React from 'react'
import { StyledDashboard } from './Dashboard.styled'
import { Link } from 'react-router-dom'
const Dashboard = () => {

  return (
    <StyledDashboard>
        <div className='dashboard__header'>
            <Link className='link' to='/'> <h1> Dashboard </h1>  </Link>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa ullam molestias veritatis. Laboriosam velit aliquid, optio voluptatibus magnam tempora?</p>    
        </div> 
            

     </StyledDashboard>
  )
}

export default Dashboard