import { memo } from "react"

interface TodoItemProps {
    id: number,
    title: string,
}

const TodoItem = memo(({id, title} : TodoItemProps) => {
    return (
        <li>
            <span>
                {id}. {title}
            </span>
        </li>
    )
})

export default TodoItem