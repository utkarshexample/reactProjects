const ButtonContainer = ({onButtonClick}) => {
   const buttons = ["1","2","3","4","5","7","8","9","0","+","-","*","/","C","="]
 return (
    <>
    <div className='button-container row'>
          {buttons.map((items)=>(<button onClick={() => onButtonClick(items)} className="btn btn-secondary col-4"> {items}</button>))}
      </div>
    </>
 )
}

export default ButtonContainer;