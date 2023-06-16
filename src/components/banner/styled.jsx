import styled from "styled-components"  

export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    .image {
        width: 100%;
        display: flex;
        background: #181818;

            img {
                width: 100%;
                opacity: 0.6;
            }

    .image-text {
        position: absolute;

        h1 {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 3.2rem;
            line-height: 39px;
            color: #F9F9F9;

            position: absolute;
            width: 400px;
            height: 39px;
            left: 140px;
            top: 180px;
        }

        p {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 196.19%;
            display: flex;
            align-items: center;
            color: #F9F9F9;

            position: absolute;
            width: 460px;
            height: 70px;
            left: 140px;
            top: 240px;
        }
    }
    }
`
    