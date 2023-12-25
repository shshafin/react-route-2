import { useLoaderData } from "react-router-dom";
import Use from "../use/Use";

const User = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1>User: {users.length}</h1>
      <div>
        {users.map((us) => (
          <Use key={us.id} us={us}></Use>
        ))}
      </div>
    </div>
  );
};

export default User;
