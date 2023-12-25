import { Link } from "react-router-dom";

const Use = ({ us }) => {
  const { name, email, id } = us;
  return (
    <div>
      <h3>Name: {name} </h3>
      <h4>Email: {email} </h4>
      <Link to={`/User/${id}`}>Show details</Link>
      <Link to={`/User/${id}`}>
        <button>click me</button>
      </Link>
    </div>
  );
};

export default Use;
