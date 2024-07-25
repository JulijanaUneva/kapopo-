import { Link } from "react-router-dom";
import ChooseCards from "../../components/ChooseCards/ChooseCards.jsx";
import PhotoCards from "../../components/PhotoCards/PhotoCards";

const Home = () => {
  return (
    <>
      <h1>Ich bin die Startseite</h1>

      <Link to={"/kontakt"}>Kontaktieren Sie uns!</Link>
      <ChooseCards />
      <PhotoCards />
    </>
  );
};

export default Home;
