import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("Checkbox enables button", () => {
  test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
    const confirmButton = screen.getByRole("button", { name: "Confirm order" });
    expect(confirmButton).toBeDisabled();
  });

  test("Checking checkbox enables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to terms and conditions/i,
    });
    userEvent.click(checkbox);
    const confirmButton = screen.getByRole("button", { name: "Confirm order" });
    expect(confirmButton).toBeEnabled();
  });

  test("Uncheck checkbox again disables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to terms and conditions/i,
    });
    userEvent.click(checkbox);
    userEvent.click(checkbox);
    const confirmButton = screen.getByRole("button", { name: "Confirm order" });
    expect(confirmButton).toBeDisabled();
  });

  test("popover respondes to hover", async () => {
    render(<SummaryForm />);
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});
