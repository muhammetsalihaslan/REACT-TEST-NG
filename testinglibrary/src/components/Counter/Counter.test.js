import { computeHeadingLevel, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Test", () => {
  let increaseBtn, decreaseBtn, count;
  beforeEach(() => {
    // bu işlem her test işlemi için ayrı ayrı çalışır
    render(<Counter />);
    increaseBtn = screen.getByText("increase");
    decreaseBtn = screen.getByText("decrease");
    count = screen.getByText("0");
  });

  beforeAll(() => {
    console.log("bu işlem tüm testlerden önce bir kere çalişmasi için");
  });

  afterEach(() => {
    console.log("bu işlem her test sont-rasi çalişmasi için ");
  });

  afterAll(() => {
    console.log("bu işlem tüm testlerden sonra bir kere çalişmasi için");
  });

  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});

///**************************************** alttaki yapı uzun şekli */

test("increase btn", () => {
  render(<Counter />);

  const count = screen.getByText("0");

  const increaseBtn = screen.getByText("increase");

  userEvent.click(increaseBtn);
  expect(count).toHaveTextContent("1");
});

test("decrease btn", () => {
  render(<Counter />);

  const count = screen.getByText("0");

  const decreaseBtn = screen.getByText("decrease");

  userEvent.click(decreaseBtn);
  expect(count).toHaveTextContent("-1");
});
