import axios from "axios";
import React, { useEffect, useState } from "react";
import { BigTitle } from "../../components/BigTitle";
import Footer from "../../components/Footer";
import MovieSeriesCard from "../../components/MovieSeriesCard";
import { MovieSeriesContents } from "../../components/MovieSeriesContents";
import { jsonDataUrl } from "../../core/urls";

function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [seriesPerPage, setSeriesPerPage] = useState(21);

  useEffect(() => {
    setLoading(true);
    try {
      console.log("enterd ryt");
      axios
        .get(jsonDataUrl, { headers: { Accept: "application/json" } })
        .then((response) => {
          const seriesData = response.data.entries.filter(
            (dataEntry) =>
              dataEntry.programType === "series" &&
              dataEntry.releaseYear >= 2010
          );
          // console.log({seriesData})
          setTimeout(() => {
            setLoading(false);
            seriesData.sort(function (a, b) {
              if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;
            });
            setSeries(seriesData.slice(0, 21));
          }, 2500);
        })
        .catch((err) => {
          setLoading(false);
          setError("Oops something went wrong");
        });
    } catch (err) {
      setLoading(false);
      setError("Oops something went wrong");
    }
  }, []);

  const lastSeriesOnViewIndex = currentPage * seriesPerPage;
  const firstSeriesIndex = lastSeriesOnViewIndex - seriesPerPage;
  const currentSeriesList = series.slice(
    firstSeriesIndex,
    lastSeriesOnViewIndex
  );

  return (
    <div className=" bg-[#0D1116] overflow-x-hidden ">
      {loading ? (
        <div className="h-[100vh] w-full flex items-center justify-center flex-col font-bold text-xl">
          Loading ...
        </div>
      ) : series.length !== 0 ? (
        <>
          <MovieSeriesContents
            source={currentSeriesList}
            title="Popular Series"
          />
          <Footer />
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default Series;
