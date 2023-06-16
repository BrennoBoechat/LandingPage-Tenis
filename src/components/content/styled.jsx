import styled from "styled-components"  

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    .content-text {
        display: flex;
        margin-top: 70px;
        width: 100%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
    }

    .sneaker-area {
        display: grid;
        justify-content: center;
        align-content: center;
        grid-template-columns: repeat(4, 300px);
        margin: 50px 0px;
        gap: 30px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            place-items: center;
            grid-template-rows: 1fr;
        }
}

        .sneaker-background {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 300px;
            height: 302px;
            background: #EBE9EA;

            img {

            }
        }

`