
import { BrowserRouter, Routes, Route } from "react-router";
import squigglyLineTop from './assets/images/pattern-squiggly-line-top.svg';
import squigglyLineBottom from './assets/images/pattern-squiggly-line-bottom.svg';
import circle from './assets/images/pattern-circle.svg';

// routes
import Home from "./routes/Home";
import TicketResult from "./routes/TicketResult";

const Router = () => {
  return (
    <div className="font-inconsolata relative text-neutral-0 min-h-dvh bg-neutral-900 flex items-center justify-center overflow-x-hidden">
      <div className="w-full h-full p-4 pt-16 pb-24 sm:w-[90%] lg:w-[60%]">
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
        <div className="w-[90%] absolute bottom-0 left-0 sm:w-[70%] md:w-[60%]">
          <img src={squigglyLineBottom} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Router;