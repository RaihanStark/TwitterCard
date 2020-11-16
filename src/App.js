import React, { useState } from "react";

import Container from "react-bootstrap/Container";

import Tweet from "./components/Tweet/Tweet";
import "./App.css";

const App = () => (
  <Container className="p-3">
    <Tweet
      title="RaihanStark"
      username="ActuallyRaihan"
      tweet="Hello my friend!"
      cardTitle="Learn React?"
      cardDesc="Can't try yourself away from the tutorials? The cure is to make tiny
      little experiment apps"
    />
    <Tweet
      title="RaihanStark"
      username="ActuallyRaihan"
      tweet="Hello my friend!"
      cardTitle="Learn React?"
      cardDesc="Can't try yourself away from the tutorials? The cure is to make tiny
      little experiment apps"
    />
    <Tweet
      title="RaihanStark"
      username="ActuallyRaihan"
      tweet="Hello my friend!"
      cardTitle="Learn React?"
      cardDesc="Can't try yourself away from the tutorials? The cure is to make tiny
      little experiment apps"
    />
    <Tweet
      title="RaihanStark"
      username="ActuallyRaihan"
      tweet="Hello my friend!"
      cardTitle="Learn React?"
      cardDesc="Can't try yourself away from the tutorials? The cure is to make tiny
      little experiment apps"
    />
  </Container>
);

export default App;
