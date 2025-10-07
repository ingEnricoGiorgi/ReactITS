function FilterTodo(props) {
    function handleChange() {
        const filterText = document.getElementById("filter").value
        props.filterTodo(filterText)
    }
    return(
        <div>
            <input id="filter" type="text" placeholder="Filter todos..." onChange={handleChange} />
        </div>
    )
}

export default FilterTodo;
