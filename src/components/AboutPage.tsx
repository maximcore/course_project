import Header from "./Header";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header title={"Maxim Blog"} />
      <Link to="/"> Back Home</Link>

      <div>Welcome!!!</div>
      <img
        src="https://c.tenor.com/eaDPAe9OLSoAAAAd/cat-kissing.gif"
        alt="Cat"
      />
      <div>My name is Maxim, I'm 21 y.o. student from Belarus</div>
      <img
        src="https://www.pngitem.com/pimgs/m/99-998603_patrick-cool-cute-spongebob-aww-tumblr-patrick-star.png"
        alt="Patrick from Sponge Bob"
      ></img>
      <div>I am a cool guy</div>
      <img
        src="https://media.giphy.com/media/26u45paxuh0hkTICQ/giphy.gif"
        alt="Cool emoji"
        width="250"
      />
      <div>
        This is my blog, here you can read 'interesting' articles written by me.
      </div>
    </div>
  );
};

export default AboutPage;
