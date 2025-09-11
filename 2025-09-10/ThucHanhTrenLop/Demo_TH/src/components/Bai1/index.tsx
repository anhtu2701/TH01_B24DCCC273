import { useState } from 'react';
import * as S from './index.styles';
import BaseTitle from '../common/BaseTitle';
import BaseWrapped from '../common/BaseWrapped';

const Bai_1 = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <BaseWrapped>
            <BaseTitle title="Bài 1" />
            <strong style={{marginBottom: '2rem', fontSize: '2rem'}}>{count}</strong>
            <S.ButtonGroup>
                <S.Button onClick={() => setCount(prev => prev + 1)}>Tăng lên 1</S.Button>
                <S.Button onClick={() => setCount(prev => prev - 1)}>Giảm đi 1</S.Button>
                <S.Button onClick={() => setCount(0)}>Reset về 0</S.Button>
            </S.ButtonGroup>
        </BaseWrapped>
    )
}

export default Bai_1;