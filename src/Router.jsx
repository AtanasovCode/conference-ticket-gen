
import { BrowserRouter, Routes, Route } from "react-router";

// routes
import Home from "./routes/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;