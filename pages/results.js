import Layout from "../components/Layout/Layout";
import styles from "../styles/Results.module.css";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Results({ breweries }) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Breweries in United States</h1>
        {breweries
          ? breweries.map((brewery, index) => {
              return (
                <div key={index} data-id={index} className="brewery">
                  <a key={brewery.slug} href={`results/${brewery.slug}`}>
                    <h2>{brewery.name}</h2>
                    <p>Type: {brewery.brewery_type}</p>
                    <p>
                      {brewery.city}, {brewery.state}, {brewery.country}.
                    </p>
                  </a>
                </div>
              );
            })
          : "loading breweries.."}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let breweries = [];

  try {
    const res = await axios.get(BASE_URL);
    breweries = res.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      breweries: breweries,
    },
  };
}
