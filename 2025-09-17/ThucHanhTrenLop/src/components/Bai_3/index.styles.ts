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
    min-width: 300px;
`;

export const TitleBox = styled.h2`
    margin-bottom: 1rem;
    color: #333;
`;

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

export const ProductItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductInfo = styled.div`
    font-weight: 500;
    color: #333;
`;

export const CartList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin-top: 1rem;
`;

export const CartItem = styled.div`
    padding: 0.5rem;
    background: white;
    border-radius: 5px;
    text-align: center;
    font-weight: 500;
`;

export const CartInfo = styled.div`
    text-align: center;
    font-weight: bold;
    color: #333;
    
    p {
        margin: 0.5rem 0;
    }
`;