import React from "react";
import RepoSection from "./components/RepoSection";
import "./UserInformation.css";

import { LuLogOut } from "react-icons/lu";
const UserDashboard = ({
  userData,
  pullRequests,
  issues,
  pullRequests1,
  issues1,
  pullRequests2,
  issues2,
  pullRequests3,
  issues3,
  pullRequests4,
  issues4,
  pullRequests5,
  issues5,
  pullRequests6,
  issues6,
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
        {/* Sayan */}
        <RepoSection
          userData={userData}
          pullRequests={pullRequests}
          issues={issues}
        />
        {/* Bidisha */}
        <RepoSection
          userData={userData}
          pullRequests={pullRequests1}
          issues={issues1}
        />
        {/* Ankit */}
        <RepoSection
          userData={userData}
          pullRequests={pullRequests2}
          issues={issues2}
        />
        {/* Debangan */}
        <RepoSection
          userData={userData}
          pullRequests={pullRequests3}
          issues={issues3}
        />
        {/* Sayandip */}
        <RepoSection
          userData={userData}
          pullRequests={pullRequests4}
          issues={issues4}
        />
        {/* Sahil */}
        <RepoSection
          userData={userData}
          pullRequests={pullRequests5}
          issues={issues5}
        />
        {/* Muskaan */}
        <RepoSection
          userData={userData}
          pullRequests={pullRequests6}
          issues={issues6}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
