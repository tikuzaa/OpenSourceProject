import React from "react";
import RepoSection from "./components/RepoSection";
//Muskaan D codes
// import React from "react";

import "./UserInformation.css"; // Make sure to create this CSS file!

import { LuLogOut } from "react-icons/lu";
const UserDashboard = ({ userData, pullRequests,pullRequests1, handleLogout }) => {
  // pullRequests = pullRequests.filter((pr) => pr.user.login === userData.login);
  // // Group PRs by repository
  // const repoMap = pullRequests.reduce((acc, pr) => {
  //   const repoName = pr.base.repo.name;
  //   if (!acc[repoName]) {
  //     acc[repoName] = {
  //       avatar: pr.base.repo.owner.avatar_url,
  //       url: pr.base.repo.html_url,
  //       prs: [],
  //     };
  //   }
  //   acc[repoName].prs.push({
  //     title: pr.title,
  //     status: pr.state === "open" ? "Pending" : "Accepted",
  //     prUrl: pr.html_url,
  //   });
  //   return acc;
  // }, {});

  // const repos = Object.entries(repoMap);

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
        <RepoSection userData={userData} pullRequests={pullRequests} />
        <RepoSection userData={userData} pullRequests={pullRequests1} />

        {/* <div className="repositories">
          {repos.length > 0 ? (
            repos.map(([repoName, { avatar, url, prs }]) => (
              <div className="repo-card" key={repoName}>
                <div className="repo-header">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <img
                      src={avatar}
                      alt="Repo Owner Avatar"
                      className="repo-avatar"
                    />
                  </a>
                  <h3>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {repoName}
                    </a>
                  </h3>
                </div>
                <div className="pr-list">
                  <p className='font-poppins'>
                    You have made {pullRequests.length} pull request(s) in this
                    repository
                  </p>{" "}
                  <br />
                  {prs.map((pr, index) => (
                    <div className="pr-item" key={index}>
                      <span className={`pr-status ${pr.status.toLowerCase()}`}>
                        {pr.status}
                      </span>
                      <p className='font-poppins'>{pr.title}</p>
                      <a
                        href={pr.prUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-link"
                      >
                        View on GitHub
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            null //request not found div
            // <p>No pull requests found.</p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default UserDashboard;
