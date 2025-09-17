import { useState } from "react";
import BaseTitle from "../common/BaseTitle";
import BaseDescription from "../common/BaseDescription";
import BaseWrapped from "../common/BaseWrapped";
import { BaseButton } from "../common/BaseButton";
import * as S from './index.styles'
import { PRODUCTS_DATA } from "../../constants/data";

interface IProduct {
    id: number;
    name: string;
    price: number;
}

interface ICartItem extends IProduct {
    quantity: number;
}

const Bai_3 = () => {
    const [cart, setCart] = useState<ICartItem[]>([]);

    const products: IProduct[] = [ ...PRODUCTS_DATA ];

    const addToCart = (product: IProduct) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <BaseWrapped>
            <BaseTitle title="Bài 3: Giỏ hàng" />
            <BaseDescription content="Chọn sản phẩm & giỏ hàng: Có danh sách sản phẩm (VD: Tên, giá). Mỗi sản phẩm có nút Thêm vào giỏ. Khi bấm, giỏ hàng (hiển thị bên dưới) sẽ chứa danh sách các sản phẩm đã chọn. Hiển thị tổng giá tiền trong giỏ." />

            <S.Box color="#ffe78eff">
                <S.TitleBox>Sản phẩm</S.TitleBox>
                <S.ProductList>
                    {products.map(product => (
                        <S.ProductItem key={product.id}>
                            <S.ProductInfo>
                                <span>{product.name} - {product.price.toLocaleString()}đ</span>
                            </S.ProductInfo>
                            <BaseButton onClick={() => addToCart(product)}>
                                Thêm vào giỏ
                            </BaseButton>
                        </S.ProductItem>
                    ))}
                </S.ProductList>
            </S.Box>

            <S.Box color="#7efb69ff">
                <S.TitleBox>Giỏ hàng</S.TitleBox>
                <S.CartInfo>
                    <p>Tổng tiền: {getTotalPrice().toLocaleString()}đ</p>
                    <p>Số lượng: {getTotalItems()} sản phẩm</p>
                </S.CartInfo>
                {cart.length === 0 ? (
                    <p>Giỏ hàng trống</p>
                ) : (
                    <S.CartList>
                        {cart.map(item => (
                            <S.CartItem key={item.id}>
                                <span>{item.name} x{item.quantity} - {(item.price * item.quantity).toLocaleString()}đ</span>
                            </S.CartItem>
                        ))}
                    </S.CartList>
                )}
            </S.Box>
        </BaseWrapped>
    )
}

export default Bai_3