import "./style.css";
import { MovieCard } from "../../components/MovieCard";


const Suggestions = ({ sectionTitle }) => {
    return (
        <div className="container-suggestions">
            <p className="title-suggestions">{sectionTitle}</p>
            <div className="container-img">
                <MovieCard title="Avatar" imgUrl="/assets/images/image34.png" score="8.6" url="/avatar" tags={["new", "free"]} />
                <MovieCard title="Cold heart 2" imgUrl="/assets/images/image36.png" score="7.6" url="/cold-heart" tags={["new"]} />
                <MovieCard title="Up" imgUrl="/assets/images/image37.png" score="8.6" url="/Up" tags={["new", "free"]} />
                <MovieCard title="Seven pairs unclean" imgUrl="/assets/images/image35.png" score="7.6" url="/seven-pairs-unclean" tags={["free"]} />



            </div>
        </div>
    );
}

export { Suggestions };