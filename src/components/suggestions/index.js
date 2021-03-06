import Suggestion from './suggestion'

const Suggestions = ({suggestions=[], selectSuggestion}) => (
    suggestions.length>0 &&

    <div className="suggestions shadow-light">
        {
          suggestions.length > 0 && suggestions.map((battle) => (
            <Suggestion
                key={battle?.battle_number}
                battle={battle}
                selectSuggestion={selectSuggestion}
            />
          ))
        }
      </div>
    
)

export default Suggestions;