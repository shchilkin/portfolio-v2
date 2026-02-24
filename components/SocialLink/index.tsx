import { SocialLinkType } from "../../types";
import styles from "./SocialLink.module.css";

const SocialLink: React.FunctionComponent<SocialLinkType> = ({
  color = "#fff",
  name,
  url,
}) => {
  return (
    <li style={{ margin: "12px 0" }}>
      <a
        className={styles.link}
        style={{ "--link-color": color } as React.CSSProperties}
        href={url}
      >
        {name}
      </a>
    </li>
  );
};

export default SocialLink;
