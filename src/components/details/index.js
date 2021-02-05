const Details = ({battle}) => (
    <div className="details-card shadow-light">
        <p className="title"> {battle.name}</p>
        <p> <span>Location</span> {battle.location}</p>
        <p> <span>Outcome</span> {battle.attacker_outcome} </p>
        <p> <span>Attacker king</span> {battle.attacker_king}</p>
        <p> <span>Defender king</span> {battle.defender_king}</p>
    </div>
)


export default Details;