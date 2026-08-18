import { useState, useRef } from 'react';
import useTodos from "./useTodos"
import TodoItem from './TodoItem';

function App(){

	const [todo, setTodo] = useState("");

	const {
		todos,
		addTodo,
		deleteTodo,
		completeTodo,
		modifyTodo
	} = useTodos();

	const handleAddTodo = () => {
		if(!todo.trim()) return;

        inputRef.current.focus();
		addTodo(todo);
		setTodo("");
	}

    const inputRef = useRef(null);

	return (
		<>
			<h1>REACT TODO APP</h1>
			<input
				type="text"
				placeholder="할 일을 입력하세요."
                ref={inputRef}
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				onKeyDown={(e) => {
					if(e.key === "Enter"){
						handleAddTodo();
					}
				}}
			/>
			<button onClick={handleAddTodo}>추가</button>
			<ul className="todo-list">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onDelete={deleteTodo}
						onComplete={completeTodo}
						onModify={modifyTodo}
					/>
				))}
			</ul>
		</>
	)
}

export default App;