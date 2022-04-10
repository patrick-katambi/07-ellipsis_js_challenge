import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { create } from "../pages/movie_or_series_view/movie_or_series_slice";

function MovieSeriesCard(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  return (
    <div className=" w-[180px] h-[300px] laptopLarge:w-[250px] laptopLarge:h-[400px] mr-5 flex flex-col items-center cursor-pointer ">
      <motion.div
        whileHover={{ borderColor: "white", borderWidth: "2px" }}
        className=" bg-[#161C23] border-[#238436] border-[1px] border-solid relative w-full h-full mt-5 rounded-2xl overflow-clip "
      >
        <img
          onClick={() => {
            dispatch(
              create({
                image: props.image,
                overlayText: props.overlayText,
                label: props.label,
              })
            );
            navigate(props.route);
          }}
          src={props.image}
          className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
        />
        <TitlesSmall title={props.overlayText} />
      </motion.div>
      <p className="mt-3">{props.label}</p>
    </div>
  );
}

export default MovieSeriesCard;

function TitlesSmall(props) {
  return (
    <p className=" font-bold text-2xl tracking-widest absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      {props.title}
    </p>
  );
}
