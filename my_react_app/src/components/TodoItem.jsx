function TodoItem(props) {
    function deleteCurrent() {
        props.deleteTodo(props.index)
    }
    return(
        <li>
            <div>
                {props.item + props.index + "  "}
                <button  onClick={deleteCurrent}>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem;