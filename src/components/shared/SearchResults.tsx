import Loader from "./Loader";
import GridPostList from "./GridPostList";

interface SearchResultsProps {
  isSearchFetching: boolean;
  searchedPosts: any;
}
const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;
  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }
  return (
    <p className="mt-10 w-full text-center text-light-4">No results found</p>
  );
};

export default SearchResults;
