import { SocialLinkType } from "../../types";
import styled from "styled-components";

const StyledLink = styled.a`
  color: "white";
  opacity: 0.8;
  &:hover {
    opacity: 1;
    color: ${(props) => props && props.color};
    text-decoration: underline;
  }
  &:active {
    opacity: 1;
    color: ${(props) => props && props.color};
    text-decoration: underline;
  }
`;
const SocialLink: React.FunctionComponent<SocialLinkType> = ({
  color = "#fff",
  name,
  url,
}) => {
  return (
    <li style={{ margin: "12px 0" }}>
      <StyledLink color={color} href={url}>
        {name}
      </StyledLink>
    </li>
  );
};

export default SocialLink;
