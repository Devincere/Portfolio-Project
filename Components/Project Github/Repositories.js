const Repo = ({ repo, imgSrc }) => (
  <div className="card">
    <img src={imgSrc} className="card-img-top" alt="..." />
    <div className="card-body">
      <h3 className="card-title">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description}</p>
    </div>
    <div className="card-footer">{repo.topics}</div>
  </div>
);

export default Repo;
