import { GuitarType } from "@utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styles from "@styles/guitar.module.css";

export interface IGuitarProps {
  guitar: GuitarType;
}

const Guitar: FC<IGuitarProps> = ({ guitar }) => {
  const { id, name, description, image, url, price } = guitar;
  return (
    <div className={styles.guitar}>
      <Image
        layout="responsive"
        width={170}
        height={350}
        src={image.url}
        alt={`Guitar Image ${id}`}
      />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link href={`/guitars/${url}`}>
          <a className={styles.link}>See details</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
