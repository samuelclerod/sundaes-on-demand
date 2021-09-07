import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image fgor each scoop option from server", async () => {
  render(<Options optionType="scoops" />);
  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const allText = scoopImages.map((element) => element.alt);
  expect(allText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
