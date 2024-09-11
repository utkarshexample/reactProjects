import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };
  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleSubstract = () => {
    dispatch(counterActions.substract(inputElement.current.value));
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 mb-5 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid  d-sm-flex justify-content-sm-center">
        <input placeholder="Enter Number" ref={inputElement}></input>
        <button
          type="button"
          className="btn btn-danger m-1"
          onClick={handleSubstract}
        >
          Substract
        </button>
        <button type="button" className="btn btn-info m-1" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
};

export default Controls;
