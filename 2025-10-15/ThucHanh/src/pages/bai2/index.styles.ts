import styled from "styled-components";

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

    .error {
        color: red;
        margin-bottom: 20px;
    }

    ul {
        .student-item {
            margin-bottom: 10px;
            a {
                color: #000;
            }
        }
    }
`;
