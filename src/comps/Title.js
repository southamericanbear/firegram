import React from "react";

const Title = () => {
  return (
    <div className="title">
      <h1 className="firegram">FireGram</h1>
      <div className="user-info-container">
        <img
          className="profile-picture-user"
          src="https://pbs.twimg.com/profile_images/1331420928094445571/mfIKS5EH_400x400.jpg"
          alt="user"
        ></img>
        <div className="user-info">
          <h1>Alan Miranda</h1>
          <div className="account-stats">
            <div className="states">
              <span>9</span>
              <br></br>
              <span>Publications</span>
            </div>
            <div className="states">
              <span>155</span>
              <br></br>
              <span>Followers</span>
            </div>
            <div className="states">
              <span>200</span>
              <br></br>
              <span>Following</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
