
import { BrowserRouter, Routes, Route } from "react-router";

// routes
import Home from "./routes/Home";

const Router = () => {
  return (
    <div className="font-inconsolata min-h-dvh bg-neutral-900 flex items-center justify-center">
      <div className="w-full h-full p-4 sm:w-[80%] md:w-[70%] lg:w-[55%]">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Router;