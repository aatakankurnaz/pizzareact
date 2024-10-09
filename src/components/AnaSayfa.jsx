import React from 'react';
import { UstKutu, UstKutuIci, Body, Baslik, Firsat, Aciktirir, AciktimLink } from "../styles";

export default function AnaSayfa() {
  return (
    <Body>
      <UstKutu>
        <Baslik>Teknolojik Yemekler</Baslik>
        <UstKutuIci>
          <Firsat>fırsatı kaçırma</Firsat>
          <Aciktirir>KOD ACIKTIRIR <br /> PIZZA, DOYURUR</Aciktirir>
          <AciktimLink href="">ACIKTIM</AciktimLink>
        </UstKutuIci>
      </UstKutu>
    </Body>
  );
}
