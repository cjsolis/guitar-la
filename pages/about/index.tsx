import type { NextPage } from "next";
import Image from "next/image";
import Layout from "@components/layout/layout";
import styles from "./styles/about.module.css";

const AboutPage: NextPage = () => {
  return (
    <Layout title="About">
      <main className="contenedor">
        <h2 className="heading">About Us</h2>
        <div className={styles.content}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="About image"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              faucibus arcu nec lectus eleifend semper. Vestibulum ultrices eu
              ipsum vel iaculis. Curabitur nec nisl bibendum, efficitur mi sed,
              egestas arcu. Suspendisse potenti. Proin hendrerit orci elit,
              finibus rhoncus ante suscipit eu. Proin nec est massa. Suspendisse
              facilisis sapien vehicula fringilla euismod. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed quis sodales eros. Cras
              fermentum erat libero, in vulputate arcu venenatis at. Etiam
              scelerisque suscipit semper. Proin felis augue, venenatis
              scelerisque porta et, rhoncus sed enim.
            </p>
            <p>
              Morbi in sem nisi. Praesent eget nisi ac orci hendrerit tempor.
              Suspendisse potenti. Donec nunc felis, elementum in lacinia et,
              sagittis at nisl. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Sed at augue nec ex
              imperdiet dignissim. In lorem erat, semper vitae sapien vel,
              maximus varius nisl. Fusce finibus ante et mi sagittis viverra.
              Cras sollicitudin at magna eu viverra. Sed eget tortor vitae est
              egestas sagittis quis et dui. Maecenas lobortis sagittis arcu eu
              consectetur.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
