function AppClock() {

    let currentdate = new Date();
    return (
        <>
            <div>
                The Current time is : {currentdate.toLocaleDateString()} - {currentdate.toLocaleTimeString()}
            </div>
        </>
    )
}

export default AppClock;