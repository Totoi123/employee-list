import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className="not-found">
        <h1>Oops....</h1>
        <h2>Page not found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Home page</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
