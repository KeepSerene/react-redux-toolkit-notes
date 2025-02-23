import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

function Cake() {
  const cakeCount = useSelector((state) => state.cake.cakeCount);
  const dispatch = useDispatch();

  return (
    <section className="cake">
      <h2 className="title">Cake count: {cakeCount}</h2>

      <button
        type="button"
        onClick={() => dispatch(ordered(1))}
        className="btn"
      >
        Order cake
      </button>

      <button
        type="button"
        onClick={() => dispatch(restocked(5))}
        className="btn"
      >
        Restock cake
      </button>
    </section>
  );
}

export default Cake;
