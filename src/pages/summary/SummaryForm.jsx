import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const checkboxLabel = (
  <span>
    I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
  </span>
);

const SummaryForm = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <>
      <Form>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={agreeTerms}
            name="terms-and-conditions"
            onChange={(e) => setAgreeTerms(e.target.checked)}
            label={checkboxLabel}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!agreeTerms}>
          Confirm order
        </Button>
      </Form>
    </>
  );
};

export default SummaryForm;
