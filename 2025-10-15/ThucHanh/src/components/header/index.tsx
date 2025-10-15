import { Link } from "react-router-dom";
import * as S from "./index.styles";

const Header = () => (
    <S.Container>
        <Link to="/">Home</Link>
        <Link to="/bai1">Bài 1</Link>
        <Link to="/bai2">Bài 2</Link>
        <Link to="/bai3">Bài 3</Link>
    </S.Container>
);

export default Header;
