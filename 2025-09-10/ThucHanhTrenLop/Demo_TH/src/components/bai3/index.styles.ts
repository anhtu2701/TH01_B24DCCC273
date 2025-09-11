import styled from "styled-components";

export const BoxColor = styled.div`
    width: 300px;
    height: 100px;
    background-color: ${(props) => props.color || "lightgray"};
    margin-bottom: 1rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 2rem;
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;

    &:hover {
        background-color: #0056b3;
    }
`;