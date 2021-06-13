import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      employees: data,
    },
  };
};

const EmployeeListing = ({ employees }) => {
  return (
    <>
      <Head>
        <title>EmployeeList | List</title>
      </Head>
      <div className="wrapper">
        <h1>All Employee</h1>

        {employees.map((employee) => (
          <Link href={"/employee/" + employee.id} key={employee.id}>
            <a className="employee">
              <h3>{employee.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default EmployeeListing;
