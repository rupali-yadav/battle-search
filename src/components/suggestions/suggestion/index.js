
const Suggestions = ({battle={}, selectSuggestion}) => (
    battle &&
    <button 
        className="selectCon"
        type="button"
        onClick={()=>selectSuggestion(battle?.location)}
    >
        {battle?.location}
    </button>
    
)

export default Suggestions;

