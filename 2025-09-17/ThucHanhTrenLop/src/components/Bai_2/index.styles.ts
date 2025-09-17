import styled from "styled-components";

export const BoxColor = styled.div`
    width: 300px;
    height: 100px;
    background-color: ${(props) => props.color || "lightgray"};
    margin-bottom: 1rem;
    border: 1px solid #ccc;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 2rem;
`;
