import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/store";

export const Layout = () => {
  const value = useSelector((state) => state.myValue);
  const dispatch = useDispatch();

  return (
    <div>
      {value.value}
      <button type="button" onClick={() => dispatch(increment(25))}>
        Add
      </button>
      <button type="button" onClick={() => dispatch(decrement(25))}>
        Delete
      </button>
    </div>
  );
};
