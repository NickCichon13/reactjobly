import React, {useState} from "react";
import { useHistory } from "react-router-dom"

function SignUpForm({signup}) {
    const history= useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    console.debug(
        "SignupForm",
        "signup=", typeof signup,
        "formData=", formData,
        "formErrors=", formErrors,
    );

    async function handleSubmit(evt) {
        evt.preventDefault();
        let res = await signup(formData);
        if(res.success) {
            history.push("/companies");
        } else {
            setFormData(res.errors);
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value}));
    }

    return (
        <div className="SignupForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h2 className="mb-3">Sign Up</h2>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <lable>Username</lable>
                                <input
                                    name="username"
                                    className="form-control"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                <div>
                                    <div className="form-group">
                                        <lable>password</lable>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <lable>First Name</lable>
                                        <input
                                            name="firstName"
                                            className="form-control"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    <div className="form-group">
                                        <lable>Last Name</lable>
                                        <input
                                            name="lastName"
                                            className="form-control"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    <div className="form-group">
                                        <lable>Email</lable>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button
                                    type="submit"
                                    className="btn btn-primary float-right"
                                    onSubmit={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;