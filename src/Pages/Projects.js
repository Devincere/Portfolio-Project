import React, { useState, useEffect } from "react";
import ProfileHeader from "../Components/Project Github/ProfileHeader";
import axios from "axios";
import "../Components/Project Github/style.css";
import GitRepo from "../Components/Project Github/index";

const Projects = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: profileData } = await axios(
      "https://api.github.com/users/Vinc4dev"
    );

    setProfile(profileData);
  };

  return (
    <div className="container-fluid my-auto">
      <div className="row">
        <div className="col">
          <ProfileHeader profile={profile} />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <GitRepo />
        </div>
      </div>
    </div>
  );
};

export default Projects;
