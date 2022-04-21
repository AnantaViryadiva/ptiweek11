import React from "react";
import { Card } from "react-bootstrap";
import contacts from "../contacts";

function App() {
  return (
    <div className="container">
      <div className="big">
        <h5 className="contact">My Contacts</h5>
        <Card className="round" style={{ height: "15rem", width: "35rem" }}>
          <Card.Body>
            <Card.Img className="img" variant="top" src={contacts[0].imgURL} />
            <Card.Title className="nama">{contacts[0].nama}</Card.Title>
            <Card.Text className="telp">{contacts[0].telp}</Card.Text>
            <Card.Text>{contacts[0].email}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="round" style={{ height: "15rem", width: "35rem" }}>
          <Card.Body>
            <Card.Img className="img" variant="top" src={contacts[1].imgURL} />
            <Card.Title className="nama">{contacts[1].nama}</Card.Title>
            <Card.Text className="telp">{contacts[1].telp}</Card.Text>
            <Card.Text>{contacts[1].email}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="round" style={{ height: "15rem", width: "35rem" }}>
          <Card.Body>
            <Card.Img className="img" variant="top" src={contacts[2].imgURL} />
            <Card.Title className="nama">{contacts[2].nama}</Card.Title>
            <Card.Text className="telp">{contacts[2].telp}</Card.Text>
            <Card.Text>{contacts[2].email}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default App;
