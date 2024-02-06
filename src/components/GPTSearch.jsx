import { LOGINBACKGROUNDIMAGE } from "../utils/constant";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="brightness-50 bg-cover absolute -z-10">
        <img src={LOGINBACKGROUNDIMAGE} alt="netflix background" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
