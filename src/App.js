import { useState, useEffect } from 'react';
import ErrorModule from './components/errorModule';
import SearchBox from './components/searcBox';
import Details from './components/details';
import './App.css';
import { getCount,getList,search} from './selectors'; 

const initialState = {
  battles: [],
  suggestions: [],
  filteredResults: []
};

function App() {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const [inputVal, setInputVal] = useState('');
   const handleInputChange = (e) => {
     setInputVal(e.target.value);
     const value = e.target.value.trim();
     const suggestions = state.battles?.length && state.battles.filter((battle) => {
       if (value && battle?.location?.toLowerCase().indexOf(value) > -1)
         return battle.location;
     });
     setState({...state, filteredResults:[],suggestions});
    // console.log(getCount(state.battles));
    // console.log(getList(state.battles));
    // console.log(search('search/?location=gol&region=west&attacker_1=lan', state.battles));

   }
   

   const selectSuggestion = (location='')=>{
     setInputVal('');
     const filteredResults = state.battles?.length && state.battles.filter((battle) => {
       if (location && battle?.location?.toLowerCase().indexOf(location.toLowerCase()) > -1)
         return battle;
     });
     setState({...state,suggestions:[], filteredResults})
   }
   
   
   useEffect(() => {
     const fetchBattlesData = async () => {
       try {
         const blob = await fetch('./battlesData.json');
         const battles = await blob.json();
         setState({...state, battles});
       } catch (e) {
         setError('Someting went wrong')
       }
     }
     fetchBattlesData();
   }, []);

  return (
    <div className="app" role="main">
      <h1>Search the battles</h1>
      <ErrorModule error={error} visible={error}/>
        <SearchBox
          inputVal={inputVal}
          handleInputChange={handleInputChange}
          suggestions={state.suggestions}
          selectSuggestion={selectSuggestion}
        />
      
      {
        state.filteredResults?.length > 0 && state.filteredResults?.map((battle)=>(
          <Details
          key={battle.battle_number} 
          battle={battle}
          />
        ))
      }
    </div>
  );
}

export default App;
