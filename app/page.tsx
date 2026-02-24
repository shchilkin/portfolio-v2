import Image from "next/image";
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

export default function Home() {
    return (
        <div className={styles.container}>
            <div style={{ marginTop: 96 }}>
                <Image
                    src="/Photo.png"
                    alt="profile photo"
                    width={90}
                    height={90}
                    style={{ borderRadius: "100%" }}
                    priority
                />
            </div>
            <h1>Hi, I&apos;m Aleksandr 👋</h1>
            <p style={{ opacity: 0.8 }}>
                I&apos;m passionate about web development, open-source software
                and UI design.
            </p>
            <p style={{ opacity: 0.8 }}>
                Currently working at{" "}
                <a
                    style={{
                        color: "#00A5F6",
                        textDecoration: "underline",
                        opacity: 1,
                    }}
                    href="https://dreambroker.com"
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
                    href="/cv.pdf"
                >
                    current resume
                </a>
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
                        key={socialLink.name}
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
                    href="mailto:shchilkin@gmail.com"
                >
                    Get in touch
                </a>
            </div>
        </div>
    );
}
