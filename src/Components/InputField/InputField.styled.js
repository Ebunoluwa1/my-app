import styled from "styled-components";

export const StyledInputField = styled.div`
      padding: 10px;
      h2{
        padding-bottom: 20px;
      }
      .link{
        text-decoration:none;
      cursor: pointer;
      }
     input{
                        padding: 8px;
                      border: 1px solid #616475;
                        outline-width: 0;
                        background-color:transparent;
                        font-size: 16px;
                    }
                    input::placeholder{
                        font-size: 16px;
                        color: #616475;
                    }

                    .input__group{
                      display: flex;
                      margin: 10px;
                      div{
                        background: lightgrey;
                        padding: 15px;
                        border: 10px;
                      }
                    }
`