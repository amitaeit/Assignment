const mongoose = require('mongoose');
const User = require('./userSchema');

const express = require('express');
var cors = require('cors');
const { response } = require('express');

const app = express();
const PORT = 8080;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
})

app.get("/", (req, resp) => {
    resp.status(200).json({ msg: "Welcome" });
})

mongoose.connect('mongodb://127.0.0.1:27017')
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    })

app.get("/login", async (req, resp) => {
    const email = req.query.email;

    try {
        const user = await User.findOne({ email });
        if (user) {
            if (user.password === req.query.password) {
                resp.send({ code: "1", message: "login successful" });
            }
            else {
                resp.send({ code: "2", message: "login failed" })
            }
        }
        else {
            resp.send({ code: "3", message: "User not found" });
        }
    }
    catch (err) {
        resp.send({ code: "4", message: err })
    }
})

app.post("/signup", async (req, resp) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const email = req.query.email;
    const password = req.query.password;

    console.log(email)

    //create user
    const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })

    try {
        let retuser = await User.findOne({ email: email })
        console.log(retuser);
        if (retuser) {
            return resp.send({ code: "2", message: "User with email id already exist" });
        }
        else {
            console.log("user not exists")
            await user.save();
            resp.send({ code: "1", message: "User created successfully" })
        }

    }

    catch (err) {
        console.log(err);
        resp.send({ code: "3", message: err })
    }

});

