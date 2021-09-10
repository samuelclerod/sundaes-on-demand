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
- Mock Service Worker
  - configure mock service library `msw` into the project
    - create a `handler`
    - create a `server`
    - update `setupTests` to listen for requests
  - use await/async + `findAllByRole` instead `getAllByRole` to get components that fetch server data (Asynchronous DOM updates)
  - use `awaitFor` for await messages
