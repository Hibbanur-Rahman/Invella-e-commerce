import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Banner from "../components/banner";
import "../assets/styles/login.css";
const Login = () => {
  return (
    <>
      <Navbar />
      <Banner head="MY ACCOUNT" path="Home / My account" />
      <div className="login row m-0 p-0 justify-content-center mt-5 mb-5 pt-5 pb-5">
        <div className="col-12 col-md-5 p-5">
          <form action="/login" method="post" className="login-form">
            <h3 className="mb-3">Login</h3>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </div>
            <div className="row m-0 p-0 justify-content-center ">
              <button type="submit" class="btn text-light w-auto ps-4 pe-4">
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-5 p-5">
          <form action="/register" method="post" className="login-form">
            <h3 className="mb-3">Register</h3>
            <div class="mb-3">
              <label for="userName" class="form-label">
                User Name
              </label>
              <input
                type="text"
                class="form-control"
                id="userName"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="row m-0 p-0 ">
              <button type="submit" class="btn text-light w-auto ps-4 pe-4">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
