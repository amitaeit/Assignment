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
        var user = { firstName: firstName, lastName: lastName, email: email, password: password };
        console.log(user);
        const jsondata = JSON.stringify(user);
        console.log(jsondata);

        try {
            const response = await axios.post('http://localhost:8080/signup', jsondata, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
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
            <div className="card signup-form mx-auto">
                <div className="card-body">
                    <h2 className='card-title text-center'>Sign Up</h2>
                    <div className='card-text'>
                        <form onSubmit={signup}>
                            <div className="form-group" >
                                <label htmlFor="exampleInputFirstName">First Name</label>
                                <input type="text" className="form-control" id="exampleInputFirstName" required />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="exampleInputLastName">Last Name</label>
                                <input type="text" className="form-control" id="exampleInputLastName" required />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="exampleInputEmail">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

