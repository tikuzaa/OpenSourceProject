import React from 'react'

const UserInformation = ({userData, handleLogout}) => {



  return (
    <div className="user-info-container">
      <div className="user-info">
        <img src={userData.avatar_url} alt="User Avatar" className="user-avatar" />
        <h2>Welcome, {userData.login}!</h2>
        {/* Add more user information fields as needed */}
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserInformation
