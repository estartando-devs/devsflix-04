import { Header } from "../../components/Header";
import { Suggestions } from "../../components/ContainerSuggestions";
import { SectionDescription } from "../SectionDescription";
import { Icons } from "../../components/ContainerIcons";
import { CatalogCard } from "../../components/ContainerCatalogCard";
import { MovieInformationCard } from "../../components/MovieInformationCard";
import { getShows } from "../../api/shows";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [hasShows, setHasShows] = useState(false);

  useEffect(() => {
    const request = async () => {
      const response = await getShows();
      setShows(response[0]);
      setTimeout(() => {
        toast.success("Deu tudo certo!");
        setHasShows(true);
      }, 1000);
    };
    request();
  }, []);

  return (
    <>
      {hasShows && (
        <>
          <Header
            src={shows.image.original}
            title={shows.name}
            genres={shows.genres.join(" ")}
          />
          <Icons />
          <MovieInformationCard
            date={shows.premiered}
            location={shows.network.country.name}
            audio="125 Мин"
            language={shows.language}
          />
          <CatalogCard title="25,000 films and soap operas for free" />
          <SectionDescription
            descriptions={shows.summary
              .replace("<p>", "")
              .replace("<b>", "")
              .replace("</p>", "")
              .replace("</b>", "")}
          />
          <Suggestions sectionTitle="Similar films" />
          <Toaster />
        </>
      )}
    </>
  );
};
export { Home };
