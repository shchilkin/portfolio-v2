import Head from "next/head";
import SocialLink from "../components/SocialLink";
import styles from "../styles/Home.module.css";
import { SocialLinkType } from "../types";

const socialLinks: Array<SocialLinkType> = [
  {
    color: "#ea4c89",
    name: "Dribbble",
    url: "https://dribbble.com/AleksandrShchilkin",
  },
  { name: "GitHub", url: "https://github.com/shchilkin" },
  {
    color: "#0077b5",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aleksandrshchilkin/",
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aleksandr Shchilkin</title>
        <meta
          name='description'
          content="I'm a software engineer, who is passionate about web development, open-source software and UI design."
        />
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
      <div style={{ marginTop: 96 }}>
        <img
          src='/Photo.png'
          alt='profile photo'
          style={{ width: "90px", height: "90px", borderRadius: "100%" }}
        />
      </div>
      <h1>Hi, I'm Aleksandr 👋</h1>
      <p style={{ opacity: 0.8 }}>
        I'm passionate about web development, open-source software and UI
        design.
      </p>
      <p style={{ opacity: 0.8 }}>
        Currently working at{" "}
        <a
          style={{
            color: "#00A5F6",
            textDecoration: "underline",
            opacity: 1,
          }}
          href='https://dreambroker.com'
        >
          Dream Broker Oy
        </a>{" "}
        as a Junior Software Engineer.
      </p>
      <p style={{ marginBottom: 24, opacity: 0.8 }}>
        Link to my{" "}
        <a
          style={{
            color: "#00A5F6",
            textDecoration: "underline",
            opacity: 1,
          }}
          href='/cv.pdf'
        >
          current resume
        </a>{" "}
      </p>
      <h3 style={{ marginBottom: 4 }}>Find me at:</h3>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          marginBottom: 64,
        }}
      >
        {socialLinks.map((socialLink) => (
          <SocialLink
            color={socialLink.color}
            name={socialLink.name}
            url={socialLink.url}
          />
        ))}
      </ul>
      <div style={{ boxSizing: "border-box" }}>
        <a
          style={{
            padding: "16px 32px",
            width: "100%",
            backgroundColor: "#f65100",
            borderRadius: 12,
          }}
          href='mailto:shchilkin@gmail.com'
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default Home;
