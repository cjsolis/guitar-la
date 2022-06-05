import { GuitarType } from "@utils/types";
import React, { FC } from "react";
import Guitar from "../guitar/guitar";
import styles from "./styles/guitar-list.module.css";

export interface IGuitarListProps {
  guitars: GuitarType[];
}

const GuitarList: FC<IGuitarListProps> = ({ guitars }) => {
  return (
    <div className={`contenedor ${styles.list}`}>
      {guitars.map((guitar) => (
        <Guitar key={guitar.url} guitar={guitar} />
      ))}
    </div>
  );
};

export default GuitarList;
