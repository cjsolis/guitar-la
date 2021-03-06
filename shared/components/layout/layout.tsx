import { GuitarType } from "@utils/types";
import Head from "next/head";
import Footer from "../footer/footer";
import Header from "../header/header";

type Props = {
  title: string;
  guitar?: GuitarType;
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ title, children, guitar }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header guitar={guitar}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
