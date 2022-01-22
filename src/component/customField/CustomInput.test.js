import { fireEvent, render, act } from "@testing-library/react";
import CustomInput from "./CustomInput";

describe("CustomInput component", () => {
  it("renders CustomInput ", async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <CustomInput name="firstName" onChange={onChange} value={"data"} />
    );
    const username = getByTestId("input");
    expect(username).toBeInTheDocument;
  });
});
