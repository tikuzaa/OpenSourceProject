import React from 'react'

const UserInformation = ({userData, pullRequests, handleLogout}) => {

  const userPullRequests = pullRequests.filter(pr => pr.user.login === userData.login);

  const repoNames = [...new Set(userPullRequests.map(pr => pr.base.repo.name))];

  return (
    <div className="user-info-container">
      <div className="user-info">
        <img src={userData.avatar_url} alt="User Avatar" className="user-avatar" />
        <h2>Welcome, {userData.login}!</h2>
        {/* Add more user information fields as needed */}
      </div>
      <h3>Your Pull Requests:</h3>
      <p>You have made {userPullRequests.length} pull request(s) in the following repository(ies):</p>
      {/* <ul>
        {pullRequests.map(pr => (
          <li key={pr.id}>
            <a href={pr.html_url} target="_blank" rel="noopener noreferrer">{pr.title}</a>
          </li>
        ))}
      </ul> */}
      <div>
        {repoNames.length > 0 ? (
          repoNames.map(repo => (
            <p key={repo}>{repo}</p>
          ))
        ) : (
          <p>No pull requests found.</p>
        )}
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserInformation
