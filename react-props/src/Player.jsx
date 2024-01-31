import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import players from "./players";
import "./App.css";

function Player({name, nationality, team, age, number, image}) {
  return (
    <Card className="main-card" style={{ width: '19rem' }}>
      <Card.Img className="image" variant="top" src={image} />
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name: {name}</ListGroup.Item>
        <ListGroup.Item>Age: {age}</ListGroup.Item>
        <ListGroup.Item>Nationality: {nationality}</ListGroup.Item>
        <ListGroup.Item>Team: {team}</ListGroup.Item>
        <ListGroup.Item>Jersey number: {number}</ListGroup.Item>
      </ListGroup>
        <Button>More</Button>
    </Card>
  );
}

export default Player;