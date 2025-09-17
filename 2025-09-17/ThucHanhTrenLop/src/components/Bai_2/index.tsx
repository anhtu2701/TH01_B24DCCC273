import * as S from "./index.styles";
import BaseTitle from "../common/BaseTitle";
import BaseDescription from "../common/BaseDescription";
import BaseWrapped from "../common/BaseWrapped";
import { BaseButton } from "../common/BaseButton";
import { useState } from "react";

const Bai_2 = () => {
    const [color, setColor] = useState<string>("");

    return (
        <BaseWrapped>
            <BaseTitle title="Bài 2: Color Picker" />
            <BaseDescription content='Có 3 nút: Đỏ, Xanh, Vàng. Khi nhấn vào nút nào thì hiển thị một ô vuông với màu tương ứng. Tạo component ColorBox nhận props color để hiển thị ô màu.' />
            <S.BoxColor color={color}></S.BoxColor>
            <S.ButtonGroup>
                <BaseButton color='danger' variant="filled" onClick={() => setColor("red")}>Red</BaseButton>
                <BaseButton color="cyan" variant="filled" onClick={() => setColor("green")}>Green</BaseButton>
                <BaseButton color="yellow" variant="filled" onClick={() => setColor("yellow")}>Yellow</BaseButton>
            </S.ButtonGroup>
        </BaseWrapped>
    );
};

export default Bai_2;