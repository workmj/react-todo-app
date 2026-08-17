import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function App(){

	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	// 로컬스토리지 불러오기
	useEffect(() => {
		const savedTodos = localStorage.getItem("todos");
		if(savedTodos){
			setTodos(JSON.parse(savedTodos));
		}

		setIsLoaded(true);
	}, []);

	// 로컬스토리지 저장
	useEffect(() => {
		if(!isLoaded) return;
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos, isLoaded]);

	// 할일추가
	const handleAddTodo = () => {
		setTodos([
			...todos, {
				id: Date.now(),
				text: todo,
				completed: false
			}]);
		setTodo("");
	}

	// 할일삭제
	const handleDeleteTodo = (id) => {
		setTodos(
			todos.filter((item) => item.id !== id)
		);
	}

	// 할일완료
	const handleCompleteTodo = (id) => {
		setTodos(
			todos.map((item) => {
				if(item.id === id){
					return {
						...item,
						completed: !item.completed
					}
				}
				return item;
			})
		)
	}

	// 할일수정
	const handleModifyTodo = (id, text) => {
		setTodos(
			todos.map((item) => {
				if(item.id === id){
					return {
						...item,
						text: text
					}
				}
				return item
			})
		)
	}


	return (
		<>
			<h1>REACT TODO APP</h1>
			<TodoInput
				todo={todo}
				onChange={setTodo}
				onAdd={handleAddTodo}
			/>
			<ul className="todo-list">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onDelete={handleDeleteTodo}
						onComplete={handleCompleteTodo}
						onModify={handleModifyTodo}
					/>
				))}
			</ul>
		</>
	)
}

export default App;