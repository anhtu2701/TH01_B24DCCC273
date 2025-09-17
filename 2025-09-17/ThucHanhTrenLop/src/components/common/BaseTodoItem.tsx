import { memo } from "react";
import { BaseButton } from "./BaseButton";

interface TodoItemProps {
    id: number;
    title: string;
    handleDelete: (id: number) => void;
}

const TodoItem = memo(({ id, title, handleDelete }: TodoItemProps) => {
    return (
        <li>
            <span style={{ marginBottom: "20px" }}>
                {id}. {title}{" "}
                <BaseButton danger onClick={() => handleDelete(id)}>
                    Xóa
                </BaseButton>
            </span>
        </li>
    );
});

export default TodoItem;
