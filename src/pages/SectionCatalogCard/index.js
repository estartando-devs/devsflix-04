import { CatalogCard } from "../../components/ContainerCatalogCard";
import { Button } from "../../components/Button";
import { TitleDescriptions } from "../../components/TitleDescriptions";

const SectionCatalogCard = () => {
    return (
        <>
            <TitleDescriptions title="Bohemian Rhapsody" />
            <CatalogCard title="25 000 movies and TV shows for free" />
            <Button children="Watch Movie" />
        </>
    )
}

export { SectionCatalogCard };