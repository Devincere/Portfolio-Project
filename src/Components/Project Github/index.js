import React, { useState, useEffect } from "react";
import axios from "axios";
//import ProfileHeader from "./ProfileHeader";
import Repo from "./Repositories";

const reposImgs = [
  "https://repository-images.githubusercontent.com/427163718/acb0e596-58c0-4fbc-8a10-c0ead3275ec4",
  "https://repository-images.githubusercontent.com/416443996/b6065578-4b61-4fdd-a9b3-24ae82ea29f5",
];

function GitRepo() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: reposData } = await axios(
      "https://api.github.com/users/Vinc4dev/repos"
    );
    setRepos(reposData);
  };

  // console.log({ profile });

  return (
    <>
      {repos.map((repo, index) => (
        <div key={index} className="col-md-4 col-sm-12">
          <Repo repo={repo} imgSrc={reposImgs[index]} />
        </div>
      ))}
    </>
  );
}

export default GitRepo;
