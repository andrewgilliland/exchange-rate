import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import {
  getAmount,
  getCurrencyCode,
  supportedCurrencies,
  changeCurrencyCode,
  getCurrencyData,
} from "../store/rates";

// const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export function ExchangeRate() {
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);

  // const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  // fetch the exchange rates the first time...
  useEffect(() => {
    dispatch(changeCurrencyCode(currencyCode));
  }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
