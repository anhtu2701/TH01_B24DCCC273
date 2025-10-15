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

    .post-group {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 20px;
        .post-item {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px 0;

            img {
                width: 200px;
            }

            .title-item {
                font-size: 20px;
                font-weight: bold;
            }

            .desc-item {
                font-size: 16px;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            .date {
                font-size: 14px;
                color: #666;
            }
        }
    }
`;
