import { Link } from "react-router";

const HeaderBar = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="text-2xl font-bold hover:opacity-80">
        Logo
      </Link>
    </div>
  );
};

export default HeaderBar;
