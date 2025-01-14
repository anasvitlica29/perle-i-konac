import { SearchIcon } from "@/vectors";
import Button from "@/components/Button/Button";

const SearchBar = () => {
  return (
    <form className="relative">
      <input
        className="px-5 pl-11 py-2 rounded outline-transparent"
        type="search"
        placeholder="Pretraga proizvoda..."
      />
      <SearchIcon className="h-5 w-5 absolute top-3 left-3" />
      <Button text="Traži" />
    </form>
  );
};

export default SearchBar;
