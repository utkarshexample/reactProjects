import ButtonContainer from "./components/ButtonContainer"
import Display from "./components/Display"
import styles from "./App.module.css"


function App() {

  return (
    <>
      <div className={`row cotainer center `}>
        <div className={`calculator col-2 ${styles.cotainer}`}>
          <Display></Display>
          <ButtonContainer></ButtonContainer>
          
        </div>
      </div>
    </>
  )
}

export default App
