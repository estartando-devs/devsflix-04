import "./style.css";

const MovieCard = ({ title, imgUrl, score, url, tags }) => {
    const Click = () => {
        console.log(url)
    }
    return (
        <div className="content-films-suggestions" onClick={Click}>
            <div className="films-pic">
                <img className="films" src={imgUrl} alt={title} />
                <div className="container-frames-pic">
                    {!!tags && (
                        tags.map((tag) => {
                            if (tag === "free") {
                                return <img className="frame" key={tag} src="/assets/images/Frame 321.png" alt="frame" />;
                            } else if (tag === "new") {
                                return <img className="frame" key={tag} src="/assets/images/Frame 322.png" alt="frame" />
                            } else {
                                return null
                            }
                        })
                    )
                    }
                </div>
            </div>
            <span>{title}</span>
            <div className="container-rating">

                <div className="container-stars">
                    <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                    <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                    <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                    <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                    <img className="stars" src="/assets/images/HalfStar.png" alt="star" />
                </div>

                <p className="score">{score}</p>
            </div>
        </div>
    );
}

export { MovieCard };