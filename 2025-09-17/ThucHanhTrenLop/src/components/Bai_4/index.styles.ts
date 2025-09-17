import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    // background-color: #ffe78eff;
    background-color: ${props => props.color};
    margin-bottom: 2rem;
    width: 500px;
`;

export const TitleBox = styled.h3`
    margin-bottom: 1rem;
    color: #333;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;
