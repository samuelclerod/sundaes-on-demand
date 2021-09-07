# Sundaes on demand

This is a project for study `react-testing-library`.

What a learn in this project:

- review testing flows
- Interact with mouse over events
  - `userEvent.hover` and `useEvent.unhover` methods
  - `queryByText` to and `expect().not.toBeInTheDocument()` for element starting out not on page
  - `async waitForElementToBeRemoved` for element that was there and then disappeared
- `test not wrapped in act(...)` warning
  - determine how component is getting updated async and account for in tests
- Mocking services
  - configure mock service library `msw` into the project
  - using await + findBy to fetch component that depend to server
