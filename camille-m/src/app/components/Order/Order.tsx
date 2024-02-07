import styled from "styled-components"

export default function Order(){
    return(
        <StyledOrder>

            <p>1</p>
            <h1>1</h1>
        </StyledOrder>
        
    )
}

const StyledOrder = styled.div`
  background-color: paleturquoise;
  width: 600px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`