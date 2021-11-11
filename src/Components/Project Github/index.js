import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import Repo from "./Repositories";

function GitPro() {
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Vinc4dev")
      .then((res) => res.json())
      .then((data) => setProfile(data));
    fetch("https://api.github.com/users/Vinc4dev/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  console.log({ profile });

  return (
    <>
      <ProfileHeader profile={profile} />

      <div className="container">
        <div className="row">
          {repos.map((repo) => (
            <div className="col">
              <Repo repo={repo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GitPro;
