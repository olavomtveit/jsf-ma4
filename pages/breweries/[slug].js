import Layout from "../../components/Layout/Layout";
import { BASE_URL } from "../../constants/api";
import axios from "axios";

export default function Games({ brewery }) {
  return (
    <Layout>
      <h1>{brewery.name}</h1>
      <h2>Rating: {brewery.rating}</h2>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await axios.get(BASE_URL);
    const breweries = res.data.data;

    const paths = breweries.map((brewery) => ({
      params: { slug: brewery.slug },
    }));

    return { paths: paths, fallback: false };
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}/${params.slug}`;
  let brewery = null;
  try {
    const res = await axios.get(url);
    brewery = res.data;
    console.log("slug.js", brewery);
  } catch (e) {
    console.log(e);
  }
  return {
    props: { brewery: brewery },
  };
}
