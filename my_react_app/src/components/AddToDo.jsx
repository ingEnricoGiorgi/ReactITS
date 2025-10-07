
function AddTodo(props) {
    function handleClick() {
        const newTodo = document.getElementById("input").value
        document.getElementById("input").value = ""
        props.addTodo(newTodo)
    }
    return(
        <div>
            <input id="input" type="text" placeholder="New todo..." />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddTodo;