const Details = ({battle}) => (
    <div className="battleInfoCon">
        <h1> {battle.name}</h1>
        <p> Location: {battle.location}</p>
        <p> Outcome: {battle.attacker_outcome} </p>
        <p> Attacker king: {battle.attacker_king}</p>
        <p> Defender king: {battle.defender_king}</p>
    </div>
)


export default Details;