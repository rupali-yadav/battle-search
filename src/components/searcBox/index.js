import Suggestions from "../suggestions";

const SearchBox = ({
  inputVal,
  handleInputChange,
  suggestions,
  selectSuggestion,
}) => (
  <div className="search-wrapper">
    <p className="title">Search the battles</p>
    <input
      className="shadow-light"
      type="text"
      value={inputVal}
      onChange={handleInputChange}
      placeholder="enter location"
    />
    <Suggestions
      suggestions={suggestions}
      selectSuggestion={selectSuggestion}
    />
  </div>
);

export default SearchBox;
