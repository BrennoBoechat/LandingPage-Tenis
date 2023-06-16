import styled from "styled-components"  

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .discount {
        display: flex;
        justify-content: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 196.19%;
        display: flex;
        align-items: center;
        color: #F9F9F9;
        background-color:  #181818;
        width: 100%;
        height: 60px;
        
    }

    .name {
        h1 {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 2.4rem;
            line-height: 196.19%;
            display: flex;
            align-items: center;
            color: #181818;
        }
    }
`