import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instagram.png";
import pinterest from "../../../images/pinterest.png";
import twitter from "../../../images/twitter.png";
import SocialImage from "./SocialsImage/SocialsImage";

export default function Socials() {
    return (
      <div className="col-4">
        <ul>
          <SocialImage src={facebook} alt="facebook logo" />
          <SocialImage src={instagram} alt="Instagram logo" />
          <SocialImage src={pinterest} alt="Pinterest logo" />
          <SocialImage src={twitter} alt="Twitter logo" />
        </ul>
      </div>
    );
  }