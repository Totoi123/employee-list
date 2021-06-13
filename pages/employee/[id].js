export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((employee) => {
    return {
      params: { id: employee.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: {
      employee: data,
    },
  };
};

const Details = ({ employee }) => {
  return (
    <div className="wrapper">
      <h1>Employee Details</h1>
      <div className="detail-wrapper">
        <h2>Employee Id: {employee.id}</h2>
        <h2>Name: {employee.name}</h2>
        <h2>Username: {employee.username}</h2>
        <h2>Email: {employee.email}</h2>
        <h2>
          Address: {employee.address.suite}, {employee.address.street},{" "}
          {employee.address.city}
        </h2>
      </div>
    </div>
  );
};

export default Details;
