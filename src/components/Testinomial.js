import React, { useState } from "react";
import Card from "./Card";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Testinomial = ({ reviews }) => {
  const [index,setindex] = useState(0);

  function lefthandler()
  {
    if(index-1 < 0)
    {
      setindex(reviews.length-1);
    }
    else{
      setindex(index-1);
    }
  }


  function righthandler()
  {
    if(index+1 >= reviews.length)
    {
      setindex(0);
    }
    else{
      setindex(index+1);
    }
  }

  function surpriseHandler()
  {
    setindex(Math.floor(Math.random() * reviews.length));  
  }

  return (
    <div className="  md:relative  w-[40vw] h-[70vh] relative  bg-white flex   flex-col justify-center items-center 
                      mt-10 pb-7 px-3 transition-all duration-700  hover:shadow-xl"> 
      <Card review={reviews[index]}></Card>

      <div className=" flex flex-col items-center">
          <div className="flex gap-6 text-3xl mt-7  text-violet-400 font-bold">
            <button className="active:text-violet-600" onClick={lefthandler}>
              <IoIosArrowDropleft />
            </button>

            <button className="active:text-violet-600" onClick={righthandler}>
              <IoIosArrowDropright />
            </button>
          </div>


          <div className="mt-7">
            <button
              className="  bg-violet-500 active:scale-95 hover:bg-violet-600 transition-all duration-200
                          px-10 py-2 rounded-md font-bold text-white text-lg border-transparent"
                          onClick={surpriseHandler}>
              Surprise Me
            </button>
          </div>
      </div>
    </div>
  );
};

export default Testinomial;
