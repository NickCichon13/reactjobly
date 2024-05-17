import React, { useState } from "react";
import {useHistory} from "react-router-dom";


function LoginForm({login}) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    console.debug(
        "LoginForm", 
        "login=", typeof login,
        "formData=", formData,
        "formErrors", formErrors,
    );

    async function handleSubmit(evt) {
        evt.preventDefault();
        let res = await login(formData);
        if(res.success) {
            history.push("/companies");
        } else {
            setFormErrors(res.errors);
        }
    }
function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value}));
}

return (
    <div className="LoginForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h3 className="mb-3">Log In</h3>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                name="username"
                                className="form-control"
                                onChange={handleChange}
                                autoComplete="username"
                                required
                            />
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                    required
                            />
                            </div>
                            <button
                                className="btn btn-primary float-right"
                                onSubmit={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LoginForm;