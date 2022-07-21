import { customRender } from "@felipemarinhodev/test-commons/react-testing-library";
import { HomeScreen } from "./HomeScreen";

/**
 * If is necessary to use some provider wrapping the component,
 * it should use this custom wrapper.
 */
// function CustomWrapper({ children }) {
//   console.log("CustomWrapper Wrapper");
//   return <section>{children}</section>;
// }
// const render = customRender(CustomWrapper);

const render = customRender();

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);
    expect(container).toMatchSnapshot();
  });
});
