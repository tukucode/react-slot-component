import { Button, Container } from "react-bootstrap";

import AlertChild from "./components/AlertChild";
import CardChild from "./components/CardChild";

const App = () => {
  return (
    <Container className="py-5">
      <h3>Belajar konsep props children</h3>

      <AlertChild title="Error">
        <p className="m-0">Lorem ipsum dolor sit amet consectetur.</p>
      </AlertChild>

      <br />

      <AlertChild title="Success" variant="border-success text-success">
        <i className="m-0">Lorem ipsum dolor sit amet consectetur.</i>
      </AlertChild>

      <br />

      <CardChild title="Slot Body">
        <div slot="Body">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            voluptate!
          </p>
        </div>
      </CardChild>

      <br />

      <CardChild title="Slot Actions">
        <div slot="Actions">
          <Button className="me-2">Delete</Button>
          <Button variant="success">Update</Button>
        </div>
      </CardChild>

      <br />

      <CardChild title="Multiple slot">
        <div slot="Body">
          <h3>Data</h3>
        </div>

        <div slot="Actions">
          <Button variant="danger">Detail</Button>
        </div>
      </CardChild>
    </Container>
  );
};

export default App;
