import "./style.css";

const Icons = () => {
    const Click = () => {
        console.log("clique")
    }
    return (
        <div className="container-icons">
            <img className="icons" src="/assets/images/Group 293.png" alt="Download" onClick={Click} />
            <img className="icons" src="/assets/images/Group 292.png" alt="Favorite" onClick={Click} />
            <img className="icons" src="/assets/images/Group 290.png" alt="Share" onClick={Click} />

        </div>
    )
}

export { Icons }