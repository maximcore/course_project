import { Link } from "react-router-dom";

import Header from "./Header";

import { postsList } from "./Data";

const NotFoundPage = () => {
  return (
    <div className="center">
      <Header title={"Maxim Blog"} />
      <p>Page Not Found</p>
      <Link to="/"> Go Home! </Link>
    </div>
  );
};

export default NotFoundPage;
