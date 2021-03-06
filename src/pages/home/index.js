import React from "react";
import Footer from "../../components/Footer";
import MovieSeriesCard from "../../components/MovieSeriesCard";
import placeHolderImage from "../../assets/placeholder.png";
import {BigTitle} from '../../components/BigTitle'

function Home() {
  return (
    <div className=" bg-[#0D1116] overflow-x-hidden ">
      <HomeContents />
      <Footer />
    </div>
  );
}

export default Home;



function HomeContents() {
  return (
    <section className=" w-[80vw] h-[50vh] mx-[auto] mt-10 mb-[200px] ">
      <BigTitle title="Popular titles" />
      <div className="flex items-center">
      <MovieSeriesCard image={placeHolderImage} overlayText="SERIES" label="Popular Series" route="series" />
      <MovieSeriesCard image={placeHolderImage} overlayText="MOVIES" label="Popular Movies" route="movies" />
      </div>
    </section>
  );
}
