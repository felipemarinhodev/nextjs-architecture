import { Text } from ".";
import { customRender } from "@felipemarinhodev/test-commons/react-testing-library";

const render = customRender();

describe("<Text />", () => {
  it("render h1 tag", () => {
    const { container } = render(<Text tag="h1">Simple text</Text>);
    expect(container).toMatchSnapshot();
  });
});
