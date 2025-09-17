import styled from "styled-components";
import { BaseInput } from "../common/BaseInput";

export const Input = styled(BaseInput)`
    width: 300px;
    margin-bottom: 10px;
`;

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


