
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Profile.css";

function Profile() {
    return (
        <div className="profile-page">

            <div className="profile-header">
                <span className="profile-label">ACCOUNT</span>
                <h1>Profile</h1>
                <p>Manage your profile information.</p>
            </div>

            <div className="profile-card">

                <div className="profile-avatar">
                    R
                </div>

                <div className="profile-info">
                    <h2>Ric</h2>
                    <p>ric@example.com</p>
                </div>

            </div>

            {/* <div className="profile-navigation">

                <Link to="/dashboard/profile">
                    Profile
                </Link>

                <Link to="/dashboard/profile/settings">
                    Settings
                </Link>

            </div> */}

            <div className="profile-content">
                {/* <Outlet /> */}
                <h1>Hello Profile Page</h1>
            </div>

        </div>
    );
}

export default Profile;

