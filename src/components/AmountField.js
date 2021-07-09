import { useDispatch } from "react-redux";
import { changeAmount } from "../store/rates";

export function AmountField({ amount }) {
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch(changeAmount);
  }

  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
}
