import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
import { useState } from "react";

function IceCream() {
  const iceCreamCount = useSelector((state) => state.iceCream.iceCreamCount);
  const dispatch = useDispatch();

  const [restockAmt, setRestockAmt] = useState(1);

  return (
    <section className="ice-cream">
      <h2 className="title">Ice cream count: {iceCreamCount}</h2>

      <button
        type="button"
        onClick={() => dispatch(ordered(1))}
        className="btn"
      >
        Order ice cream
      </button>

      <input
        type="number"
        min={1}
        step={1}
        max={15}
        value={restockAmt}
        onChange={(event) => setRestockAmt(parseInt(event.target.value))}
        placeholder="1"
        className="ice-cream-restock-input"
      />

      <button
        type="button"
        onClick={() => dispatch(restocked(restockAmt))}
        className="btn"
      >
        Restock ice cream
      </button>
    </section>
  );
}

export default IceCream;
