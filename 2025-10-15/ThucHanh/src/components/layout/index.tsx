import React from "react";
import * as S from "./index.styles";

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <S.Container>
            <S.Content>{children}</S.Content>
        </S.Container>
    );
};

export default Layout;
