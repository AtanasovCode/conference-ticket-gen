
import { BrowserRouter, Routes, Route } from "react-router";

// routes
import Home from "./routes/Home";

const Router = () => {
  return (
    <div className="font-serif min-h-dvh">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;