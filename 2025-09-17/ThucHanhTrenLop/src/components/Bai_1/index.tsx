import BaseWrapped from "../common/BaseWrapped";
import BaseTitle from "../common/BaseTitle";
import BaseDescription from "../common/BaseDescription";
import { BaseButton } from "../common/BaseButton";
import TodoItem from "../common/BaseTodoItem";
import * as S from "./index.styles";
import { useRef, useState } from "react";
import type { FormEvent } from "react";

interface Todo {
    id: number;
    title: string;
}

const Bai_1 = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState<string>("");
    const nextID = useRef(1);
    const isDisableInput = input.trim().length === 0;

    const handleAdd = (e: FormEvent) => {
        e.preventDefault();

        const title = input.trim();
        if (!title) return;

        const newTodo: Todo = {
            id: nextID.current,
            title,
        };

        setTodos((prev) => [...prev, newTodo]);
        setInput("");
        nextID.current++;
    };
    return (
        <BaseWrapped>
            <BaseTitle title="Bài 1: To-do List" />
            <BaseDescription content="Có một input và nút “Thêm”. Khi nhập nội dung và nhấn Thêm, item mới sẽ được hiển thị trong danh sách. Mỗi item có nút Xóa để xóa khỏi danh sách." />
            <S.TodoCard>
                <S.TitleCard>Danh sách công việc</S.TitleCard>
                <S.TodoList>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            handleDelete={() => {
                                setTodos((prev) =>
                                    prev.filter((item) => item.id !== todo.id)
                                );
                            }}
                        />
                    ))}
                </S.TodoList>
            </S.TodoCard>
            <form style={{ display: 'flex', gap: '10px', alignItems: 'start', flexDirection: 'column' }}>
                <S.Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Nhập công việc..."
                />
                <BaseButton onClick={handleAdd} disabled={isDisableInput}>Thêm</BaseButton>
            </form>
        </BaseWrapped>
    );
};

export default Bai_1;
