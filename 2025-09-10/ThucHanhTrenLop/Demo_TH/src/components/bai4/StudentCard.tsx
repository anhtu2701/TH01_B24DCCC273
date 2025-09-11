import { useState } from "react";
import { Button } from "./index.styles"

interface StudentCardProps {
    name: string;
    age: number;
    studentClass: string;
}

const StudentCard = ({ name, age, studentClass }: StudentCardProps) => {
    const [detail, setDetail] = useState<boolean>(false);

    return (
        <div>
            <h2>{name}</h2>
            {detail && (
                <>
                    <p>Tuổi: {age}</p>
                    <p>Lớp: {studentClass}</p>
                </>
            )}
            <Button onClick={() => setDetail((prev) => !prev)}>
                {detail ? "Ẩn chi tiết" : "Xem chi tiết"}
            </Button>
        </div>
    );
};

export default StudentCard;
