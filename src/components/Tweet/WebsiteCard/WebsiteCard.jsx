import React from "react";
import Card from "react-bootstrap/Card";

function WebsiteCard(props) {
  return (
    <Card className="mt-2">
      <Card.Img variant="top" src="https://placeimg.com/600/300/any" />
      <Card.Body className="p-3">
        <Card.Title
          className="font-weight-bold mb-1"
          style={{ fontSize: "16px" }}
        >
          {props.title}
        </Card.Title>
        <Card.Text className="mb-1" style={{ fontSize: "16px" }}>
          {props.desc}
        </Card.Text>
        <Card.Text style={{ color: "rgb(136, 153, 166)" }}>dev.to</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WebsiteCard;
