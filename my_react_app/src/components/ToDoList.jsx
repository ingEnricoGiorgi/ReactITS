import TodoItem from "./todoItem";

function TodoList(props) {
    return(
        <ul>
            {props.todos.map((value, index) => <TodoItem key={index} item={value} index={index} deleteTodo={props.deleteTodo}/>)}
        </ul>
    )
}

export default TodoList;