import { useAuth } from "../context/auth-context";
import { useState } from "react";
import "./Login.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const { isLogin, setIsLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const testLoginHandler = () => {
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshbalika");
  };

  const loginHandler = async (e) => {
    e.preventDefault();

 
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
     
      setIsLogin((item) => !item);
      localStorage.setItem("token", response.data.encodedToken);
      if (location?.state?.from?.pathname) {
        navigate(location?.state?.from?.pathname);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="container-flex flex-center form-container flex-column">
        <h2 className="font-xl">Login</h2>
        <form onSubmit={(e) => loginHandler(e)}>
          <label for="" className="label-text">
            Email <br />
            <input
              type="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />

          <label for="" className="label-text">
            Password <br />
            <input
              type="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />

          <br />

          <input type="submit" className="input btn-default" value="Login" />
          <br />
          <br />
          <input
            type="submit"
            className="input btn-default"
            value="Login With Test Credentials"
            onClick={testLoginHandler}
          />
          <br />
          <br />

          <div>
            <Link to="/signup">
              {" "}
              <button type="submit" className="input btn-default" value="submit">
                {" "}
                Don't have an Account? Sign Up{" "}
              </button>
            </Link>
          </div>
        </form>
      </main>

      {/* <button
        onClick={() => {
          setIsLogin((item) => !item);

          navigate(location?.state?.from?.pathname);
        }}
      >
        {isLogin ? "Log OUt" : "Login"}
      </button>
      <h2>Chabbi laya kya?</h2> */}
    </>
  );
}
