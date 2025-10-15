import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    padding: 20px;

    .title {
        font-size: 24px;
        font-weight: bold;
    }

    .box-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px 0;

        .desc {
            font-size: 18px;
        }
    }

    .error {
        color: red;
        margin-bottom: 20px;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;
