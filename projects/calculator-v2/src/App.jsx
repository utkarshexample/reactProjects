import ButtonContainer from "./components/ButtonContainer"
import Display from "./components/Display"
import styles from "./App.module.css"
import { useState } from "react"


function App() {
let [calVal, setcalVal]= useState("");
const handleButtonClick = (buttonName) => {
 if(buttonName === "C") {
  setcalVal("")
 } else if (buttonName === "=") {
  const result = eval(calVal);
  setcalVal(result);
 } else {
    const newCalVal = calVal + buttonName;
    setcalVal(newCalVal);
 }
}

  return (
    <>
      <div className={`row cotainer center `}>
        <div className={`calculator col-2 ${styles.cotainer}`}>
          <Display display={calVal}></Display>
          <ButtonContainer onButtonClick={handleButtonClick}></ButtonContainer>
          
        </div>
      </div>
    </>
  )
}

export default App
