export const getCount = (battles=[]) => {
    return battles?.length;
}

export const getList = (battles=[]) => {
    return [ ...new Set(battles.map((battle)=>(
        battle?.location
    )))]
}

export const search = (queryString='', battles=[]) => {
    // const queryString = 'search/?location=gol&region=west&attacker_1=lan';
    const search = queryString.split('?')[1] || '';
    if (search){
      let results=[];
      const searchResults = new URLSearchParams(search);
      battles?.length >0 && battles.filter((battle, i) => {
        let pushToArr = [];
        searchResults.forEach((val, item) => {
          if (battle[item]?.toLowerCase().indexOf(val.toLowerCase()) > -1)
            pushToArr.push(true);
            else
            pushToArr.push(false);
        });
        !pushToArr.includes(false) && results.push(battle);

     });
     return results;
    }
    return [];
}