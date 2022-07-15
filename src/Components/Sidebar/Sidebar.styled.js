import styled from "styled-components";

export const StyledSidebar = styled.div`
 flex-direction:column;
 display: flex;
 width: 20vw;
 flex: 0.35;
 background: darkgray;
 height: 100vh;
 margin: 0 auto;
 padding: 40px;

 h1{
    margin-top: -20px;
    color: white;
    font-weight: bolder;
 }

 cursor: pointer;
 .app__sidebar-header{
    margin-top: 20px;
    padding: 20px 0;

}
.link{
        text-decoration: none;
        
    }
.app__sidebar-components{
    div{padding: 10px }
    
}
`