const Suggestions = ({ battle = {}, selectSuggestion }) =>
  battle && (
    <button className="shadow-light" type="button" onClick={() => selectSuggestion(battle?.location)}>
      {battle?.location}
    </button>
  );

export default Suggestions;
