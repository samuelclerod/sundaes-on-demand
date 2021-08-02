import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("Checkbox enables bnutton", () => {
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
    fireEvent.click(checkbox);
    const confirmButton = screen.getByRole("button", { name: "Confirm order" });
    expect(confirmButton).toBeEnabled();
  });

  test("Unchecking checkbox again disables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to terms and conditions/i,
    });
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    const confirmButton = screen.getByRole("button", { name: "Confirm order" });
    expect(confirmButton).toBeDisabled();
  });
});
