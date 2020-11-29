import { useDispatch, useSelector } from "react-redux";
import {CountState} from "../redux/my_button/count_reducer";
import { countIncrement } from "../redux/my_button/actions";

const MyButton = () =>{
  const mycounter = useSelector<CountState, CountState["counter"]>((state)=>state.counter);
  const dispatch = useDispatch();

  const handleCountUpBtn = (value:number) => {
    dispatch(countIncrement(value));
  }

  return(
    <div>
      <button onClick={()=>handleCountUpBtn(1)}> [+] ＜MyButton /＞  </button>
      ※debug counter:{mycounter}
    </div>
  );
}

export default MyButton
