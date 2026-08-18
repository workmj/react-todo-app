import { useState, useEffect } from 'react';

function useTodos(){
	
	const [todos, setTodos] = useState(() => {
		// 처음 LocalStorage에서 불러오기
		const savedTodos = localStorage.getItem("todos");

		return savedTodos ? JSON.parse(savedTodos) : [];
	});

	// todos가 변경되면 저장
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	// todo 추가
	const addTodo = (text) => {
		setTodos(prev => [
			...prev,
			{
				id: Date.now(),
				text,
				completed: false
			}
		]);
	};

	// todo 삭제
	const deleteTodo = (id) => {
		setTodos(prev =>
			prev.filter(item => item.id !== id)
		);
	};

	// todo 완료 체크
	const completeTodo = (id) => {
		setTodos(prev =>
			prev.map(item => {
				if(item.id === id){
					return {
						...item,
						completed: !item.completed
					}
				}
				return item;
			})
		);
	}

	// todo 내용 수정
	const modifyTodo = (id, text) => {
		setTodos(prev =>
			prev.map(item => {
				if(item.id === id){
					return {
						...item,
						text
					};
				}
				return item;
			})
		)
	}

	return {
		todos,
		addTodo,
		deleteTodo,
		completeTodo,
		modifyTodo
	}


}

export default useTodos;