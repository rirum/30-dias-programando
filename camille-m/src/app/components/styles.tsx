import styled from "styled-components";
import Link from "next/link";


export const StyledHeader = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
        }
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    
`

export const ProfileAndCart = styled.div`
display: flex;
width: 200px;
justify-content: space-between;
    
`
export const Profile = styled.div`
display: flex;
align-items: center;
p{
    margin-right: 10px ;
}
    
`

export const Cart = styled.div`
    display: flex;
    align-items: center;
    p{
    margin-right: 10px ;
}
`
