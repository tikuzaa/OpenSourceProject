import React from "react";
import RepoSection from "./components/RepoSection";
import "./UserInformation.css";

import { LuLogOut } from "react-icons/lu";
const UserDashboard = ({
  userData,
  pullRequests,
  issues,
  pullRequests1,
  handleLogout,
}) => {
  return (
    <div className="dashboard-container">
      {/* Main Dashboard Box */}
      <div className="dashboard-box">
        {/* Profile Section */}
        <div className="user-header">
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            <img
              src={userData.avatar_url}
              alt="User Avatar"
              className="user-avatar"
            />
          </a>
          <h2>Welcome, {userData.login}!</h2>
          <button className="logout-button" onClick={handleLogout}>
            <LuLogOut />
          </button>
        </div>

        {/* Repository Section */}
        <RepoSection
          userData={userData}
          pullRequests={pullRequests}
          issues={issues}
        />
        <RepoSection userData={userData} pullRequests={pullRequests1} />
      </div>
    </div>
  );
};

export default UserDashboard;
