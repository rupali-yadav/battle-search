const SearchBox = ({inputVal, handleInputChange, suggestions, selectSuggestion}) => (
    <div className="searchBoxCon">
        <input 
          className="searchInput"
          type="text"
          value={inputVal}
          onChange={handleInputChange}
          placeholder="enter location"
        />
        <div className="suggestionCon">
          {
           suggestions.length > 0 && suggestions.map((battle) => (
             <div>
                <button 
                  key={battle.battle_number}
                  className="selectCon"
                  type="button"
                  onClick={()=>selectSuggestion(battle?.location)}
                >
                {battle?.location}
                </button>
             </div>
            ))
          }
        </div>
    </div>
)

export default SearchBox;