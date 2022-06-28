import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export const Login = () => {
  const authGoogle = () => { 
    window.open("http://localhost:5000/auth/google", "_self")
   }
   const authGithub = () => { 
    window.open("http://localhost:5000/auth/github", "_self")
   }
   const authFacebook = () => { 
    window.open("http://localhost:5000/auth/facebook", "_self")
   }
  return (
    <div className="login">
      <h1 className="loginTitle">Choose login method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={authGoogle}>
            <FontAwesomeIcon icon={faGoogle} />
            Google
          </div>
          <div className="loginButton facebook" onClick={authFacebook}>
            <FontAwesomeIcon icon={faFacebookF} />
            Facebook
          </div>
          <div className="loginButton github" onClick={authGithub}>
            <FontAwesomeIcon icon={faGithub} />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line"/>
          <div className="or">OR</div>
        </div>
        <div className="right">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="submit">Login</button>
          
        </div>
      </div>
    </div>
  );
};
