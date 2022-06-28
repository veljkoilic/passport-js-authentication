import { Link } from "react-router-dom";
export const Navbar = ({user}) => {
  const logout = () => { 
    window.open("http://localhost:5000/auth/logout", '_self')
   }
  return (
    <div className="navbar">
      <Link to="/" className="link">
        <span className="logo">Passport.js Login App</span>
      </Link>
      {user ? (
      <ul className="list">
        <li className="listItem">
          <img
            className="avatar"
            src={user.photos ? user.photos[0].value : "https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"}
            alt=""
          />
        </li>
        <li className="listItem">{user.displayName}</li>
        <li className="listItem" onClick={logout}> Logout </li>
      </ul>
      ): (
        <Link className="link" to={'/login'}>Login</Link>
      )}
    </div>
  );
};
