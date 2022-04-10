import axios from "axios";
import React, { useEffect, useState } from "react";
import { BigTitle } from "../../components/BigTitle";
import Footer from "../../components/Footer";
import MovieSeriesCard from "../../components/MovieSeriesCard";
import { MovieSeriesContents } from "../../components/MovieSeriesContents";
import { jsonDataUrl } from "../../core/urls";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    try {
      console.log("enterd ryt");
      axios
        .get(jsonDataUrl, { headers: { Accept: "application/json" } })
        .then((response) => {
          const movieData = response.data.entries.filter(
            (dataEntry) => dataEntry.programType === "movie"
          );
          // console.log({movieData})
          setTimeout(() => {
            setLoading(false);
            setMovies(movieData);
          }, 2500);
        });
    } catch (err) {
      setLoading(false);
      setError("Oops something went wrong");
    }
  }, []);
  return (
    <div className=" bg-[#0D1116] overflow-x-hidden ">
      {loading ? (
        <div className="h-[100vh] w-full flex items-center justify-center flex-col font-bold text-xl">
          Loading ...
        </div>
      ) : movies.length !== 0 ? (
        <>
          <MovieSeriesContents source={movies} title="Popular Movies" />
          <Footer />
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default Movies;

function MovieContents(props) {
  return (
    <section className=" w-[80vw] h-[auto] mx-[auto] mt-10 mb-[200px]">
      <BigTitle title="Popular Movies" />
      <br />
      <div className="grid laptopLarge:grid-cols-5 laptopSmall:grid-cols-4 tablet:grid-cols-3 grid-cols-2  gap-5 ">
        {props.movies === null ? (
          ""
        ) : (
          <>
            {props.movies.map((movieItem, index) => {
              const imageUrl = movieItem.images["Poster Art"].url;
              const label = movieItem.title;
              return (
                <MovieSeriesCard key={index} image={imageUrl} label={label} />
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
