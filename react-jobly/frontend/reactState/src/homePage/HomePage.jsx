import React, {useContext} from "react";
import { Link } from "react-router-dom";



function HomePage() {

    const {currentUser} = useContext(UserContext)
    console.debug("Homepage", "currentUser=", currentUser);

    return (
        <div className="Homepage">
            <div className="Container Center">
                <h1 className="mb-4 font-weight-bold">Jobly</h1>
                <p className="lead">All the Jobs</p>
                {currentUser
                ? <h2>
                    Welcome Back, {currentUser.firstName || currentUser.username }!
                </h2>
                : (
                    <p>
                        <Link className="btn btn-primary font-weight-bold mr-3"
                                to="/login">
                                    Login
                        </Link>
                        <Link className="btn btn-primary font-weight-bold mr-3"
                            to="/signup">
                                Signup
                            </Link>
                    </p>
                )}
            </div>
        </div>
    )
}

export default HomePage;