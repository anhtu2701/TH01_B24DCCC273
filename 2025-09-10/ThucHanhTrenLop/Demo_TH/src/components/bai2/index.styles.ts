import styled from "styled-components";

export const TodoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffe78eff;
    margin-bottom: 2rem;
    min-width: 300px;
`;

export const TitleCard = styled.h2`
    margin-bottom: 1rem;
    color: #333;
`;

export const TodoList = styled.ul`
    list-style: none;
    width: 100%;
    color: #333;
    font-size: 1.2rem;
`;

export const Input = styled.input`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 1.5rem;
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
