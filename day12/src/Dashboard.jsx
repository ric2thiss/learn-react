import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">

            <div className="dashboard-header">
                <span className="dashboard-label">
                    OVERVIEW
                </span>

                <h1>Dashboard</h1>

                <p>
                    Welcome back! Here's an overview of your store.
                </p>
            </div>

            {/* Dashboard Navigation */}
            <nav className="dashboard-nav">

                <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "dashboard-nav-link active"
                            : "dashboard-nav-link"
                    }
                >
                    Overview
                </NavLink>

                <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                        isActive
                            ? "dashboard-nav-link active"
                            : "dashboard-nav-link"
                    }
                >
                    Profile
                </NavLink>

                <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) =>
                        isActive
                            ? "dashboard-nav-link active"
                            : "dashboard-nav-link"
                    }
                >
                    Settings
                </NavLink>

            </nav>

            {/* Child routes appear here */}
            <Outlet />

        </div>
    );
}

export default Dashboard;