import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import routes from "../routes";
import Home from "./home";

describe("home.tsx tests", () => {
  beforeEach(() => {
    console.log(routes);
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
  });

  it("renders 'React Router Docs' text", () => {
    expect(screen.getByText("React Router Docs")).toBeInTheDocument();
  });

  it("renders 'What's next?' text", () => {
    expect(screen.getByText("What's next?")).toBeInTheDocument();
  });
});
