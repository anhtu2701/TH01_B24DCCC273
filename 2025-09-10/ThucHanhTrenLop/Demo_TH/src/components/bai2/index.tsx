import BaseTitle from "../common/BaseTitle";
import BaseWrapped from "../common/BaseWrapped";
import TodoItem from "../common/BaseTodoItem";
import { useState, useRef } from "react";
import type { FormEvent } from "react";
import * as S from "./index.styles";

interface Todo {
    id: number;
    title: string;
}

const Bai_2 = () => {
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
            <BaseTitle title="Bài 2" />
            <S.TodoCard>
                <S.TitleCard>Danh sách công việc</S.TitleCard>
                <S.TodoList>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                        />
                    ))}
                </S.TodoList>
            </S.TodoCard>
            <form onSubmit={handleAdd}>
                <S.Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Nhập công việc..."
                />
                <S.Button disabled={isDisableInput}>Thêm</S.Button>
            </form>
        </BaseWrapped>
    );
};

export default Bai_2;
