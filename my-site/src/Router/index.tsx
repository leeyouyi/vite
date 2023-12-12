import { Route, Routes } from "react-router-dom";
import About from "../page/About";
import Home from "../page/Home";

const Root = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Root;
