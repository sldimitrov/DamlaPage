import React, { useState } from "react";
import InputForm from "./InputForm";
import Success from "./Success";
import Error from "./Error";

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  if (!isSent) {
    return <InputForm handleSubmit={setIsSent} setError={setError} />;
  } else if (isSent === "error") {
    return (
      <Error error={error} errormsg={"Error with handling the connection"} />
    );
  } else {
    return <Success />;
  }
}
