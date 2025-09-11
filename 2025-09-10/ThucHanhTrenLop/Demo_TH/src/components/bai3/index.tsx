import * as S from "./index.styles";
import BaseTitle from "../common/BaseTitle";
import BaseWrapped from "../common/BaseWrapped";
import { useState } from "react";

const Bai_3 = () => {
    const [color, setColor] = useState<string>("");

    return (
        <BaseWrapped>
            <BaseTitle title="Bài 3" />
            <S.BoxColor color={color}></S.BoxColor>
            <S.ButtonGroup>
                <S.Button onClick={() => setColor("red")}>Red</S.Button>
                <S.Button onClick={() => setColor("green")}>Green</S.Button>
                <S.Button onClick={() => setColor("blue")}>Blue</S.Button>
                <S.Button onClick={() => setColor("yellow")}>Yellow</S.Button>
            </S.ButtonGroup>
        </BaseWrapped>
    );
};

export default Bai_3;