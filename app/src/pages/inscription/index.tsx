import React from "react";
import { Container, Content } from "./styles";
import Header from "../../components/header/index";
import MeetupItem from "../../components/meetupItem/index";

export default function inscription() {
  return (
    <Container>
      <Header />
      <Content>
        <MeetupItem inscripted={true} />
      </Content>
    </Container>
  );
}
