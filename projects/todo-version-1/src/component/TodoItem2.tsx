function TodoItem2() {
    let todoItem = " Go to College";
    let todoDate = "24/4/2024";
    return <>
        <div className="row">
            <div className="col-4">
                {todoItem}
            </div>
            <div className="col-4">{todoDate}</div>
            <div className="col-4"><button className="btn btn-danger">Delete</button></div>
        </div>
    </>
}

export default TodoItem2;