import React from "react";
import EventForm from "../components/EventForm";

const NewEvent = () => {
  // return <h1>NewEventPage</h1>;
  return <EventForm method='post' />;
};

export default NewEvent;
