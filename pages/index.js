import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/Link";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Welcome to the Home page</h1>
        <h3>
          Do you like beer? If so, navigate to the Results page at the top of
          this page!
        </h3>
        <p>
          Or, if you like hip-hop try to figure out who's lyrics it is in our
          About us Page
        </p>
      </div>
    </Layout>
  );
}
