import Website1 from "./Website1.jpeg";

const Repo = ({ repo }) => (
  <div className="row">
    <div className="col-6">
      <div className="card">
        <img src={Website1} class="card-img-top" alt="..." />
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
    </div>
  </div>
);

export default Repo;
