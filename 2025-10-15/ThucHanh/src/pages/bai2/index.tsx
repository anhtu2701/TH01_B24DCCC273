import * as S from "./index.styles";
import { useListStudent } from "../../hooks/use-student";
import { Link } from "react-router-dom";

const Bai2 = () => {
    const { data: listData, error, isLoading  } = useListStudent();
    return (
        <S.Container>
            <div className="title">Danh sách sinh viên</div>
            {isLoading && <div>Loading...</div>}
            {error && (
                <div className="error">
                    Không tìm thấy thông tin sinh viên
                </div>
            )}

            {listData && listData.length > 0 && (
                <ul>
                    {listData.map((student) => (
                        <li className="student-item" key={student.id}>
                            <Link to={`/bai2/${student.id}`}>{`${student.name} - ${student.email}`}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </S.Container>
    );
};

export default Bai2;
