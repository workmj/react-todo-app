function TodoItem({
    todo,
    onDelete,
    onComplete,
    onModify
}){
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onComplete(todo.id)}
            />
            <input
                type="text"
                value={todo.text}
                disabled={todo.completed}
                onChange={(e) => onModify(todo.id, e.target.value)}
            />
            <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
    )
}

export default TodoItem;