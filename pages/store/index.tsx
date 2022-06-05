import type { InferGetServerSidePropsType, NextPage } from "next";
import Layout from "@components/layout/layout";
import { getApiUrl } from "@utils/helper";
import { GET_GUITARS } from "@utils/constants";
import { GuitarType } from "@utils/types";
import GuitarList from "components/shop/guitar-list/guitar-list";

const StorePage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  guitars
}) => {
  return (
    <Layout title="Store">
      <main className="contenedor">
        <h1 className="heading">Guitar Collection</h1>
        <GuitarList guitars={guitars}/>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = getApiUrl(GET_GUITARS);
  const response = await fetch(url);
  const guitars: GuitarType[] = await response.json();

  return {
    props: {
      guitars,
    },
  };
}


export default StorePage;
