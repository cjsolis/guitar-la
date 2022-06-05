import Link from "next/link";
import styles from "./styles/header.module.css";
import Image from "next/image";
import { GuitarType } from "@utils/types";
import { FC } from "react";
import { useRouter } from "next/router";

export interface IHeaderProps {
  guitar: GuitarType | undefined;
}

const Header: FC<IHeaderProps> = ({ guitar }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.bar}>
          <Link href="/">
            <a>
              <Image
                width={400}
                height={100}
                src="/img/logo.svg"
                alt="Logo image"
              />
            </a>
          </Link>

          <nav className={styles.navigation}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Store</Link>
          </nav>
        </div>
        {guitar && (
          <div className={styles.model}>
            <h2>{guitar.name}</h2>
            <p>{guitar.description}</p>
            <p className={styles.price}>${guitar.price}</p>
            <Link href={`/guitars/${guitar.url}`}>
              <a className={styles.link}>See Product</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === "/" && (
        <img className={styles.guitar} src="/img/header_guitarra.png" alt="header image" />
      )}
    </header>
  );
};

export default Header;
