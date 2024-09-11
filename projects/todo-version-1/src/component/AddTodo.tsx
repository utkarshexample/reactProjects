function AddTodo() {
    return <>
        <div className="row">
            <div className="col-4">
                <input type="text" placeholder="Enter Todo Item"></input>
            </div>
            <div className="col-4"> <input type="date"></input></div>
            <div className="col-4"><button className="btn btn-success">ADD</button></div>
        </div>
    </>
}

export default AddTodo