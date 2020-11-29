import { useDispatch, useSelector } from "react-redux";

import {CountState} from "../../redux/my_button/count_reducer";
import MyButton from "../../components/my_button";
import { countIncrement } from "../../redux/my_button/actions";

const CountApp = () =>{

  const counter = useSelector<CountState, CountState["counter"]>((state) => state.counter);
  const dispatch = useDispatch();

  const handleCountUpBtn = (value:number) => {
    dispatch(countIncrement(value));
  }

  return(
    <div>
      counter:{counter}
      <div>
        <button onClick={()=>handleCountUpBtn(1)}> [+] (home.tsx)  </button>
        <hr/>
        <MyButton />
      </div>
    </div>
  );
}

export default CountApp
