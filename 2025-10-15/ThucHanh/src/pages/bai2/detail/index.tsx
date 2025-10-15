import * as S from "./index.styles";
import { useParams, useNavigate } from "react-router-dom";
import { useStudentDetail } from "../../../hooks/use-student";
import { useEffect } from "react";


const DetailStudent = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    useEffect(() => {
        if (!id) {
            navigate('/bai2');
        }
    }, [id, navigate]);
    const { data: studentData, error, isLoading } = useStudentDetail(Number(id));
    return (
        <S.Container>
            <div className="title">Chi tiết sinh viên</div>

            {isLoading && <div>Loading...</div>}
            {error && (
                <div className="error">
                    Không tìm thấy thông tin sinh viên
                </div>
            )}
            {studentData && (
                <div className="box-content">
                    <div className="desc">Tên: {studentData.name}</div>
                    <div className="desc">Email: {studentData.email}</div>
                    <div className="desc">Phone: {studentData.phone}</div>
                    <div className="desc">Website: {studentData.website}</div>
                </div>
            )}

            <S.Button onClick={() => navigate('/bai2')}>Quay lại</S.Button>
        </S.Container>
    );
};

export default DetailStudent;