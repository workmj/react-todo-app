import { useRef } from 'react';

function TodoInput({
    todo,
    onChange,
    onAdd
}){

    const inputRef = useRef(null);

    const handleAdd = () => {
        onAdd();
        inputRef.current.focus();
    }

    return (
        <>
            <input
                type="text"
                placeholder="할 일을 입력하세요."
                ref={inputRef}
                value={todo}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        handleAdd();
                    }
                }}
            />
            <button onClick={handleAdd}>추가</button>
        </>
    )
}

export default TodoInput