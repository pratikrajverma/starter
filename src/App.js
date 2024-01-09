import React from "react";
import Testinomial from "./components/Testinomial";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-neutral-300 overflow-hidden">
      <div>
        <h1 className="text-4xl text-center font-bold ">Our Testimonials</h1>

        <div className=" bg-violet-400 h-[5px] w-[100px] mt-1 m-auto"></div>

        <Testinomial reviews={reviews}></Testinomial>
      </div>
    </div>
  );
};

export default App;
