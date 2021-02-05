import Suggestions from '../suggestions';

const SearchBox = ({inputVal, handleInputChange, suggestions, selectSuggestion}) => (
  <div className="searchBoxCon">
      <input 
        className="searchInput"
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
)

export default SearchBox;