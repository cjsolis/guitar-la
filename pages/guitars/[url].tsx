import Layout from "@components/layout/layout";
import { GET_GUITARS, GET_GUITARS_BY_URL } from "@utils/constants";
import { getApiUrl } from "@utils/helper";
import { GuitarType } from "@utils/types";
import Image from "next/image";
import { InferGetServerSidePropsType, NextPage } from "next/types";
import styles from "@styles/guitar.module.css";
import { useState } from "react";

const GuitarPage: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ guitar }) => {
  const { id, name, image, description, price } = guitar;
  const [amount, setAmount] = useState(0);

  const handleAmount = (amountToProcess: number) => {
    if (amount + amountToProcess > -1) {
      setAmount((prev) => prev + amountToProcess);
    }
  };

  return (
    <Layout title={`Guitar - ${name}`}>
      <div className={styles.guitar}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={image.url}
          alt={`Entry image ${id}`}
        />
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>
          <form className={styles.form}>
            <label>Amount:</label>
            <div className={styles.amount_selector}>
              <p>{amount}</p>
              <div className={styles.amount_selector_buttons}>
                <input
                  type="button"
                  value="+"
                  onClick={() => handleAmount(1)}
                />
                <input
                  type="button"
                  value="-"
                  onClick={() => handleAmount(-1)}
                />
              </div>
            </div>
            <input type="submit" value="Add to cart" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = getApiUrl(GET_GUITARS);
  const response = await fetch(url);
  const guitars: GuitarType[] = await response.json();
  const paths = guitars.map((guitar) => ({
    params: { url: guitar.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }: any) {
  const fullUrl = getApiUrl(GET_GUITARS_BY_URL(url));
  const response = await fetch(fullUrl);
  const guitar: GuitarType[] = await response.json();

  return {
    props: {
      guitar: guitar[0],
    },
  };
}

export default GuitarPage;
