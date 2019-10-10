import React from "react";
import {
  Container,
  Content,
  Paginator,
  Date,
  PaginatorButton,
  PaginatorIcon
} from "./styles";
import Header from "../../components/header/index";
import MeetupItem from "../../components/meetupItem/index";

export default function dashboard() {
  return (
    <Container>
      <Header />
      <Content>
        <Paginator>
          <PaginatorButton>
            <PaginatorIcon name="chevron-left" size={40} color="#FFFFFF" />
          </PaginatorButton>
          <Date>31 de Maio</Date>
          <PaginatorButton>
            <PaginatorIcon name="chevron-right" size={40} color="#FFFFFF" />
          </PaginatorButton>
        </Paginator>
        <MeetupItem />
      </Content>
    </Container>
  );
}
