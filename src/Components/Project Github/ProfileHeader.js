const ProfileHeader = ({ profile }) => (
  <header className="text-center header-profile">
    <img
      className="img-profile rounded-circle"
      src={profile.avatar_url}
      alt={profile.name}
    />
    <h1 className="text-center">Projects</h1>
  </header>
);

export default ProfileHeader;
