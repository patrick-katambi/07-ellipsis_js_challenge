import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BigTitle } from '../../components/BigTitle';
import Footer from '../../components/Footer';
import MovieSeriesCard from '../../components/MovieSeriesCard';
import { MovieSeriesContents } from '../../components/MovieSeriesContents';
import {jsonDataUrl} from '../../core/urls';

function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    try {
      console.log("enterd ryt");
      axios
        .get(jsonDataUrl, { headers: { Accept: "application/json" } })
        .then((response) => {
          const seriesData = response.data.entries.filter(
            (dataEntry) => dataEntry.programType === "series"
          );
          // console.log({seriesData})
          setTimeout(() => {
            setLoading(false);
            setSeries(seriesData);
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
      ) : series.length !== 0 ? (
        <>
          <MovieSeriesContents source={series} title="Popular Series" />
          <Footer />
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default Series


