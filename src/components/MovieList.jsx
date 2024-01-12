import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="text-white px-6 py-4">
      <h2 className="font-bold text-2xl my-4">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
