import { BigTitle } from "./BigTitle";
import MovieSeriesCard from "./MovieSeriesCard";

export function MovieSeriesContents(props) {
  const source = props.source;
  return (
    <section className=" w-[80vw] h-[auto] mx-[auto] mt-10 mb-[200px]">
      <BigTitle title={props.title} />
      <br />
      <div className="grid laptopLarge:grid-cols-5 laptopSmall:grid-cols-4 tablet:grid-cols-3 grid-cols-2  gap-5 ">
        {source === null ? (
          ""
        ) : (
          <>
            {source.map((sourceData, index) => {
              const imageUrl = sourceData.images["Poster Art"].url;
              const label = sourceData.title;
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
