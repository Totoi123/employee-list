import Link from "next/link";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>EmployeeList | Home</title>
      </Head>
      <div className="wrapper">
        <h1>HomePage</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sequi non
          ullam unde magni rerum libero aliquid, cupiditate quaerat totam
          repudiandae natus tenetur quia amet quod, iusto nostrum in assumenda
          laudantium facilis esse veritatis. Illum error excepturi at
          exercitationem quaerat?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A magni
          distinctio ea reprehenderit in facilis aliquid voluptatibus incidunt?
          Magni, placeat facilis minus quaerat fugiat optio modi voluptates est
          ipsum reprehenderit!
        </p>
        <div className="btn">
          <Link href="/employee">
            <a>View employee</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
