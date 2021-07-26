
import { TitleDescriptions } from "../../components/TitleDescriptions";
import { MovieCard } from "../../components/MovieCard";
import { Button } from "../../components/Button";

const MovieList = () => {
    return (
        <>
            <TitleDescriptions title="Bohemian Rhapsody" />
            <MovieCard title="Spies in Disguise" imgUrl="/assets/images/image 30.png" score="7.1" url="/Spies-in-Disguise" tags={["new"]} />
            <MovieCard title="Frozen II" imgUrl="/assets/images/image36.png" score="7.2" url="/Frozen-II" tags={["new"]} />
            <Button children="Watch movie" />

        </>
    )
}

export { MovieList };