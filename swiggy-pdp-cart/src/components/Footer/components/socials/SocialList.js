import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import pinterest from "./images/pinterest.png";
import twitter from "./images/twitter.png";
import SocialItem from "../socialImage/SocialItem";

export default function SocialList() {
  const socialsArray = [
    { id: 0, src: facebook, alt: "Facebook logo" },
    { id: 1, src: instagram, alt: "Instagram logo" },
    { id: 2, src: pinterest, alt: "Pinterest logo" },
    { id: 3, src: twitter, alt: "Twitter logo" },
  ];

  const socialsList = socialsArray.map((item) => (
    <SocialItem key={item.id} src={item.src} alt={item.alt} />
  ));
  return (
    <div className="col-4">
      <ul>{socialsList}</ul>
    </div>
  );
}
