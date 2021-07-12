import { render, screen } from "../../test-utils";
import { ExchangeRate } from "../ExchangeRate";
// import { Provider } from "react-redux";
// import { store } from "../../store/store";

test("renders title", () => {
  render(<ExchangeRate />);
  const linkElement = screen.getByText(/exchange rates/i);
  expect(linkElement).toBeInTheDocument();
});
