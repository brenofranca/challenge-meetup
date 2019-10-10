import React from "react";
import {
  Card,
  CardBody,
  ImageContainer,
  Image,
  Title,
  CardDescription,
  CardDescriptionText,
  ButtonInscription,
  ButtonInscriptionText
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

const cardImage = require("../../../assets/meetup1.png");

export default function meetupItem() {
  return (
    <Card>
      <ImageContainer>
        <Image source={cardImage} />
      </ImageContainer>
      <CardBody>
        <Title>Meetup de React Native</Title>
        <CardDescription>
          <Ionicons name="md-calendar" size={18} color="#999999" />
          <CardDescriptionText>24 de Junho, às 20h</CardDescriptionText>
        </CardDescription>
        <CardDescription>
          <Ionicons name="md-pin" size={18} color="#999999" />
          <CardDescriptionText>Rua Guilherme Gembala, 260</CardDescriptionText>
        </CardDescription>
        <CardDescription>
          <Ionicons name="md-person" size={18} color="#999999" />
          <CardDescriptionText>
            Organizador: Diego Fernandes
          </CardDescriptionText>
        </CardDescription>
        <ButtonInscription>
          <ButtonInscriptionText>Realizar Inscrição</ButtonInscriptionText>
        </ButtonInscription>
      </CardBody>
    </Card>
  );
}
