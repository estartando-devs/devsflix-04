import { useEffect, useState } from "react";
import { getShows } from "../../api/show";

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await getShows();
      setShows(response);
    };
    request();
  }, []);

  return (
    <div>
      {shows.map(({ id, name }) => {
        return (
          <div key={id}>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};
export { Home };
