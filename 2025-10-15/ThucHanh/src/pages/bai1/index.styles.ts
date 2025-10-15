import styled from "styled-components";

export const Input = styled.input`
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    max-width: 400px;

    &:focus {
        border-color: #007bff;
        outline: none;
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

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    padding: 20px;

    .title {
        font-size: 24px;
        margin-bottom: 20px;
        font-weight: bold;
    }

    .group {
        display: flex;
        width: 100%;
        gap: 10px;
        margin-bottom: 20px;
    }

    .error {
        color: red;
        margin-bottom: 20px;
    }

    .weather-info {
        border: 1px solid #ddd;
        padding: 20px;
        border-radius: 8px;
        background-color: #f9f9f9;
        width: 100%;
        max-width: 400px;

        .info-item {
            font-size: 18px;
            margin-top: 15px;

            strong {
                margin-right: 10px;
            }
        }
    }
`;

