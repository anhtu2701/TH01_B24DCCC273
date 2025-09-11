import BaseTitle from "../common/BaseTitle";
import BaseWrapped from "../common/BaseWrapped";
import { STUDENT_DATA } from "../../constant/data";
import StudentCard from "./StudentCard";

const Bai_4 = () => {
    return (
        <BaseWrapped>
            <BaseTitle title="Bài 4" />
            <div>
                {STUDENT_DATA.map((student, index) => (
                    <StudentCard
                        key={index}
                        name={student.name}
                        age={student.age}
                        studentClass={student.class}
                    />
                ))}
            </div>
        </BaseWrapped>
    );
};

export default Bai_4;
