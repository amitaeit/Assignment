import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function Signup(props) {
    const signup = async (e) => {
        e.preventDefault();
        const firstName = document.querySelector('#exampleInputFirstName').value;
        const lastName = document.querySelector('#exampleInputLastName').value;
        const email = document.querySelector('#exampleInputEmail').value;
        const password = document.querySelector('#exampleInputPassword').value;
        console.log(email);

        try {
            const response = await axios({
                method: "post",
                url: "http://localhost:8080/signup",
                params: { firstName, lastName, email, password }
            })
            if (response.data.code === "1") {
                alert("User created successfully")
            }
            else if (response.data.code === "2") {
                alert(response.data.message)

            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Sign Up</h1>
                <form onSubmit={signup}>
                    <div className="form-group" >
                        <label htmlFor="exampleInputFirstName">First Name</label>
                        <input type="text" className="form-control" id="exampleInputFirstName" placeholder="Enter First Name" required />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="exampleInputLastName">Last Name</label>
                        <input type="text" className="form-control" id="exampleInputLastName" placeholder="Enter Last Name" required />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="exampleInputEmail">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword" placeholder="Enter Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;

