import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import Button from "./components/Button";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import PrivacyMsg from "./components/PrivacyMsg";

function App() {
  const privacyMsg = useSelector((store) => store.privacy);
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Container>
        <Heading />
        {privacyMsg ? <PrivacyMsg /> : <Content />}
        <Button />
      </Container>
    </div>
  );
}

export default App;
