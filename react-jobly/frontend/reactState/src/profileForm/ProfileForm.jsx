import React, {useState, useContext} from "react";
import Alert from "./api";
import UserContext from "./auth/UserContext"

function ProfileForm() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        password: "",
    });

    const [formErrors, setFormErrors] = useState([]);

    const [saveConfirmed, setSavedConfirmed] = useState(false);

    console.debug(
        "ProfileForm",
        "currentUser=", currentUser,
        "formData=", formData,
        "formErrors=", formErrors,
        "saveConfirmed=", saveConfirmed,
);

async function handleSubmit(evt) {
evt.preventDefault();

let profileData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password,
};

let username = formData.username;
let updateUser;

try {
    updateUser = await JoblyApi.saveProfile(username, profileData);
} catch (err) {
    debugger;
    setFormErrors(err);
    return
}

setFormData(f => ({ ...f, password: ""}));
setFormErrors([]);
setSavedConfirmed(true);

setCurrentUser(updateUser);

}

function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
        ...f, [name]: value,
    }));
    setFormErrors([]);
}

return (
    <div className="col-md col-lg4 offset-md-3 offset-lg-4">
        <h3>Profile</h3>
        <div className="card">
            <div className="body">
                <form>
                    <div className="form-group">
                        <lable>Username</lable>
                        <p className="form-control-plaintext">{formData.username}</p>
                    </div>
                    <div className="form-group">
                        <lable>First Name</lable>
                        <input
                            name="firstName"
                            className="form-control"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <lable>Last Name</lable>
                        <input
                            name="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <lable>Email</lable>
                        <input
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <lable>Password</lable>
                        <input
                            type="password"
                            name="password"
                            className="form-contol"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
)};

export default ProfileForm;