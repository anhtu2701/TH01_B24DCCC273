import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    padding: 20px;

    .heading {
        font-size: 24px;
        margin-bottom: 20px;
        font-weight: bold;
    }

    .title {
        font-size: 18px;
        font-weight: bold;
    }

    .desc {
        font-size: 18px;
    }
`;
