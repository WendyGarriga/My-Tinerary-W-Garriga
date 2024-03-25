import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom"
// import { useLocation } from "react-router-dom"
import { login, logout } from "../Redux/usActions";

const Header = () => {
  const user = useSelector((store) => store.user.user)
  const location = useLocation()
  const dispatch = useDispatch()

  const links = [
    {
      path: "/",
      title: "Home",
      active: "/" == location.pathname,
      visible: true,
    },
    {
      path: "/Cities",
      title: "Cities",
      active: "/Cities" == location.pathname,
      visible: true,
    },
    {
      path: "/Register",
      title: "Register",
      active: "/Register" == location.pathname,
      visible: user.first_name ? false : true,
    },
    {
      path: "/Login",
      title: "Login",
      active: "/Login" == location.pathname,
      visible: user.first_name ? false : true,
    },
  ];
  
  const handleClick = () => {
    dispatch(logout())
  }
  return (
    <header className="flex w-full h-20  bg-cyan-200 text-black justify-around ">
      <h2 className="m-2 sm:m-5 text-sm sm:text-4xl  flex flex-row">MyTinerary</h2>
      <nav className="flex items- center gap-2 sm:gap-10 m -5">
       <nav className="flex gap-5 items-center sm:gap-10 m-2">
        {links.map((link) => (
        <Anchor key={link.title} link={link} />
         ))}
       <img src="./avatar-image2.jpg" alt="logologin" className="w-14 h-14"/>
          {user.first_name && (
        <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-xs sm:text-base lg:text-xl font-semibold">{user.first_name}</p>
        <button onClick={handleClick} className="bg-blue-900 px-2 py-1 font-semibold text-white">Logout</button>
        </div>
        )}
       </nav>
      </nav>
    </header>
    );
}

const Anchor = ({ link }) => {
  if (link.visible) {
    return (
      <Link
        key={link.title}
        className={`font-semibold py-1 px-2 border ${
          link.active ? "bg-white text-black" : ""
        }`}
        to={link.path}
      >
        {link.title}
      </Link>
    );
  } else {
    <></>;
  }
};

export default Header

