import styled from "styled-components";
import { BaseButton } from "../common/BaseButton";

export const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
`;

export const QuestionTitle = styled.h2`
    margin-bottom: 2rem;
    color: #333;
    text-align: center;
    font-size: 1.5rem;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    width: 100%;
`;

interface OptionButtonProps {
    isSelected?: boolean;
    isCorrect?: boolean;
    isWrong?: boolean;
    disabled?: boolean;
}

export const OptionButton = styled(BaseButton)<OptionButtonProps>`
    padding: 1rem 1.5rem !important;
    border: 2px solid #ddd !important;
    border-radius: 8px !important;
    background-color: ${(props) => {
        if (props.isCorrect) return "#d4edda !important";
        if (props.isWrong) return "#f8d7da !important";
        if (props.isSelected) return "#e3f2fd !important";
        return "white !important";
    }};
    border-color: ${(props) => {
        if (props.isCorrect) return "#28a745 !important";
        if (props.isWrong) return "#dc3545 !important";
        if (props.isSelected) return "#2196f3 !important";
        return "#ddd !important";
    }};
    color: ${(props) => {
        if (props.isCorrect) return "#155724 !important";
        if (props.isWrong) return "#721c24 !important";
        return "#333 !important";
    }};
    cursor: ${(props) =>
        props.disabled ? "not-allowed" : "pointer"} !important;
    font-size: 1rem !important;
    font-weight: 500 !important;
    transition: all 0.3s ease !important;
    min-width: 200px !important;
    height: auto !important;

    &:hover {
        ${(props) =>
            !props.disabled &&
            `
            background-color: #e3f2fd !important;
            border-color: #2196f3 !important;
        `}
    }

    &:disabled {
        opacity: 0.7 !important;
    }

    &:focus {
        ${(props) => {
            if (props.isCorrect)
                return `
                background-color: #d4edda !important;
                border-color: #4de771ff !important;
            `;
            if (props.isWrong)
                return `
                background-color: #f8d7da !important;
                border-color: #dc3545 !important;
            `;
            return `
                background-color: #e3f2fd !important;
                border-color: #2196f3 !important;
            `;
        }}
    }
`;

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background-color: #f0f8ff;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
`;

export const ResultTitle = styled.h2`
    margin-bottom: 2rem;
    color: #2c3e50;
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
`;

export const RestartButton = styled(BaseButton)`
    padding: 1.5rem 2rem !important;
    font-size: 1.1rem !important;
    font-weight: 600 !important;
    border-radius: 10px !important;
`;
