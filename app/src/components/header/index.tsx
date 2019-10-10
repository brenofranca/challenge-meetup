import React from "react";
import { Container, Logo } from "./styles";

const logo = require("../../../assets/logo.png");

export default function header() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
