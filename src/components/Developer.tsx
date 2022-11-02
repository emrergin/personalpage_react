import Website from "./Website";
import { useStateValue } from "../state";

const Developer = () => {
  const [{ websites, isTurkish }] = useStateValue();

  return (
    <div className="album right-of-the-grid">
      <h1 id="tableHeader">{isTurkish ? `Websiteleri` : `Websites`}</h1>
      {websites.map((website, index) => (
        <Website website={website} key={index} />
      ))}
    </div>
  );
};
export default Developer;
