function TodoInput({
    todo,
    onChange,
    onAdd
}){
    return (
        <>
            <input
                type="text"
                placeholder="할 일을 입력하세요."
                value={todo}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        onAdd();
                    }
                }}
            />
            <button onClick={onAdd}>추가</button>
        </>
    )
}

export default TodoInput