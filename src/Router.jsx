
import { BrowserRouter, Routes, Route } from "react-router";
import squigglyLineTop from './assets/images/pattern-squiggly-line-top.svg';

// routes
import Home from "./routes/Home";
import TicketResult from "./routes/TicketResult";

const Router = () => {
  return (
    <div className="font-inconsolata min-h-dvh bg-neutral-900 flex items-center justify-center overflow-x-hidden">
      <div className="w-full h-full sm:w-[90%] lg:w-[60%]">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/ticket" element={<TicketResult />} />
          </Routes>
        </BrowserRouter>
        {/* Decorative Patterns */}
        <div className="absolute top-[5%] right-0 w-32 md:w-[32%] md:top-[10%]">
          <img src={squigglyLineTop} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Router;