import "./style.css";

const Suggestions = ({ onClick, teste }) => {
    return (
        <div className="container-suggestions">
            <p className="title-suggestions">{teste}</p>
            <div className="container-img">
                <div className="content-films-suggestions">
                    <img className="films" src="/assets/images/image34.png" alt="Avatar" onClick={onClick} />
                    <div className="container-frames-avatar">
                        <img className="frame" src="/assets/images/Frame 322.png" alt="frame" />
                        <img className="frame" src="/assets/images/Frame 321.png" alt="frame" />
                    </div>
                    <span>Avatar</span>
                    <div className="container-rating">

                        <div className="container-stars">
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/HalfStar.png" alt="star" />
                        </div>

                        <p className="score">8.6</p>
                    </div>
                </div>
                <div className="content-films-suggestions">
                    <img className="films" src="/assets/images/image36.png" alt="Cold heart 2" onClick={onClick} />
                    <div className="container-frames-frozen">
                        <img className="frame" src="/assets/images/Frame 322.png" alt="frame" />
                    </div>
                    <span>Cold heart 2</span>
                    <div className="container-rating">

                        <div className="container-stars">
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/EmptyStar.png" alt="star" />
                        </div>

                        <p className="score">7.6</p>
                    </div>
                </div>
                <div className="content-films-suggestions">
                    <img className="films" src="/assets/images/image37.png" alt="Up" onClick={onClick} />
                    <div className="container-frames-up">
                        <img className="frame" src="/assets/images/Frame 322.png" alt="frame" />
                        <img className="frame" src="/assets/images/Frame 321.png" alt="frame" />
                    </div>
                    <span>Up</span>
                    <div className="container-rating">

                        <div className="container-stars">
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/HalfStar.png" alt="star" />
                        </div>

                        <p className="score">8.6</p>
                    </div>
                </div>
                <div className="content-films-suggestions">
                    <img className="films" src="/assets/images/image35.png" alt="Seven pairs of unclean" onClick={onClick} />
                    <div className="container-frames-seven">
                        <img className="frame" id="frame-seven" src="/assets/images/Frame 323.png" alt="frame" />
                    </div>
                    <span>Seven pairs of unclean</span>
                    <div className="container-rating">

                        <div className="container-stars">
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/Star 2.png" alt="star" />
                            <img className="stars" src="/assets/images/EmptyStar.png" alt="star" />
                        </div>

                        <p className="score">7.6</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Suggestions };