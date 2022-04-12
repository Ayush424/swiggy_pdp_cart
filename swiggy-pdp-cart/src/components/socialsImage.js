export default function SocialImage(props) {
    return (
      <li>
        <img src={props.src} alt={props.alt} />
      </li>
    );
  }