
import { BrowserRouter, Routes, Route } from "react-router";
import { useConfStore } from "../useConfStore";
import squigglyLineTop from './assets/images/pattern-squiggly-line-top.svg';
import squigglyLineBottom from './assets/images/pattern-squiggly-line-bottom.svg';

// routes
import Home from "./routes/Home";
import TicketResult from "./routes/TicketResult";

import Loading from "./components/Loading";

const Router = () => {

  const { loading } = useConfStore();

  return (
    <div className="
      font-inconsolata relative text-neutral-0 min-h-dvh bg-dark-900
      px-4 py-10
      flex items-center justify-center overflow-x-hidden
      bg-background-mobile bg-no-repeat bg-right-bottom bg-contain
      md:bg-background-tablet lg:bg-background-desktop
    ">
      { loading && <Loading /> }
      <div className="w-full sm:w-[90%] lg:w-[60%]">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/ticket" element={<TicketResult />} />
          </Routes>
        </BrowserRouter>
        {/* Decorative Patterns */}
        <div className="absolute top-[5%] right-0 w-32 md:w-[32%] md:top-[10%] z-[0]">
          <img src={squigglyLineTop} alt="" className="w-full" />
        </div>
        <div className="w-[90%] absolute bottom-0 left-0 sm:w-[70%] md:w-[45%] z-[0]">
          <img src={squigglyLineBottom} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Router;