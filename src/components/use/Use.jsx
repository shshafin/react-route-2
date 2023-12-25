const Use = ({ us }) => {
  console.log(us);
  const { name, email } = us;
  return (
    <div>
      <h3>Name: {name} </h3>
      <h4>Email: {email} </h4>
    </div>
  );
};

export default Use;
