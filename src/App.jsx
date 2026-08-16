import { useState } from 'react';

function App(){

	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const handleAddTodo = () => {
		setTodos([
			...todos, {
				id: Date.now(),
				text: todo,
				completed: false
			}]);
		setTodo("");
	}


	return (
		<>
			<h1>REACT TODO APP</h1>
			<input
				type="text"
				placeholder="할 일을 입력하세요"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleAddTodo();
					}
				}}
			/>
			<button onClick={handleAddTodo}>추가</button>
			<ul className="todo-list">
				{todos.map((todo) => (
					<li key={todo.id} className={todo.completed ? "completed" : ""}>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => {
								setTodos(
									todos.map((item) => {
										if( item.id === todo.id ){
											return {
												...item,
												completed: !item.completed
											}
										}
										return item;
									})
								);
							}}
						/>
						<span>{todo.text}</span>
						<button onClick={() => {
							setTodos(
								todos.filter((item) => item.id !== todo.id)
							)
						}}>삭제</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default App;