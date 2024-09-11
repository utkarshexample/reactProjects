const ButtonContainer = () => {
   const buttons = ["1","2","3","4","5","7","8","9","0","+","-","X","%","C"]
 return (
    <>
    <div className='button-container row'>
          {buttons.map((items)=>(<button className="btn btn-secondary col-4"> {items}</button>))}
      </div>
    </>
 )
}

export default ButtonContainer;