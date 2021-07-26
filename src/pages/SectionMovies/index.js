import { Button } from "../../components/Button";
import { TitleDescriptions } from "../../components/TitleDescriptions";
import { MovieCard } from "../../components/MovieCard";

const SectionMovies = () => {
    return (
        <>
            <TitleDescriptions title="Spies in Disguise" />
            <MovieCard title="Up" imgUrl="/assets/images/image37.png" score="8.6" url="/Up" tags={["new", "free"]} />
            <MovieCard title="Avengers: Endgame" imgUrl="/assets/images/image 31.png" score="7.6" url="/Avengers" tags={["new"]} />
            <Button children="Watch movie" />
        </>
    )
}

export { SectionMovies }