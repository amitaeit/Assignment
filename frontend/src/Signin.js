import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  
  const myLogin = async (e) => {
    e.preventDefault();
    const email = document.querySelector('#exampleInputEmail1').value;
    const password = document.querySelector('#exampleInputPassword1').value;

    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8080/login",
        params: { email, password }
      })
      if (response.data.code === "1") {
        //navigate to home page
        navigate("/dashboard");
      }
      else if (response.data.code === "2") {
        //show error on top of sign in page
        alert("Login Failed");
      }
      else if (response.data.code === "3") {
        alert("User not found");
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Sign In</h1>
        <form onSubmit={myLogin}>
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;

