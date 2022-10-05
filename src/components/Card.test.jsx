import {render, screen} from "@testing-library/react";
import Card from "./Card";

describe("Card Tests", () => {
  it("should render child", () => {
    render(
      <Card>
        <div>Kahit Ano</div>
      </Card>
    );

    const mockChild = screen.getByText("Kahit Ano");

    expect(mockChild).toBeInTheDocument();
  });
});
