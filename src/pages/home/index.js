import React from "react";
import Footer from "../../components/Footer";
import MovieSeriesCard from "../../components/MovieSeriesCard";
import placeHolderImage from "../../assets/placeholder.png";

function Home() {
  return (
    <div className=" bg-[#0D1116] overflow-x-hidden ">
      <HomeContents />
      <Footer />
    </div>
  );
}

export default Home;

function BigTitle(props) {
  return <p className=" font-bold text-[50px] ">{props.title}</p>;
}

function HomeContents() {
  return (
    <section className=" w-[80vw] h-[50vh] mx-[auto] mt-10 mb-[200px] ">
      <BigTitle title="Popular titles" />
      <div className="flex items-center">
      <MovieSeriesCard image={placeHolderImage} overlayText="SERIES" label="Popular Series" />
      <MovieSeriesCard image={placeHolderImage} overlayText="MOVIES" label="Popular Movies" />
      </div>
    </section>
  );
}
