import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const Main = () => {
  return (
    <div className="w-[81vw] m-auto flex gap-10 text-primary">
      <MainLeft />
      <MainRight />
    </div>
  );
};

export default Main;
