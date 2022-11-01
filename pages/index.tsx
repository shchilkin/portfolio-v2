import { borderRadius } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={"true"}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div>
        <img
          src='https://avatars.githubusercontent.com/u/49785954?v=4'
          style={{ width: "90px", height: "90px", borderRadius: "100%" }}
        />
      </div>
      <h1>Hi, I'm Aleksandr 👋</h1>
      <p>
        I'm passionate about web development, open-source software and UI
        design.
      </p>
      <p>
        Currently working at{" "}
        <a
          style={{ color: "lightblue", textDecoration: "underline" }}
          href='https://dreambroker.com'
        >
          Dream Broker Oy
        </a>{" "}
        as a Junior Software Engineer.
      </p>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        <li>
          <a
            style={{ color: "#ea4c89", textDecoration: "underline" }}
            href='https://dribbble.com/AleksandrShchilkin'
          >
            Dribbble
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "underline" }}
            href='https://github.com/shchilkin'
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            style={{ color: "#0077b5", textDecoration: "underline" }}
            href='https://www.linkedin.com/in/aleksandrshchilkin/'
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}