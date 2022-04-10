import React from "react";
import { useSelector } from "react-redux";
import { getObjectDetails } from "./movie_or_series_slice";

function MoviesOrSeriesView(props) {
    const obj = useSelector(getObjectDetails)
    console.log({obj})
  return (
    <div className=" bg-[#0D1116] overflow-x-hidden ">
      <section className=" w-[80vw] h-[auto] mx-[auto] mt-10 mb-[200px]">
        Details
        <div className="flex items-center">
          <div className="w-[40%] h-[60vh] rounded-xl mt-5 bg-[red] ">
            <img
              src={props.image}
              className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoviesOrSeriesView;
