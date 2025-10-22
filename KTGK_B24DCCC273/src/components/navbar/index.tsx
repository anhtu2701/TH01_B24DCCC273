import { useNavigate } from 'react-router-dom';
import * as S from './index.styles';
import BaseButton from '../common/base-button';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <S.Nav>
      <S.NavContainer>
        <S.Logo>Blog Management</S.Logo>
        <S.NavLinks>
          <S.NavLink to="/" end>
            Trang chủ
          </S.NavLink>
          <BaseButton onClick={() => navigate('/create')} size="small">
            Viết bài mới
          </BaseButton>
        </S.NavLinks>
      </S.NavContainer>
    </S.Nav>
  );
};

export default Navbar;