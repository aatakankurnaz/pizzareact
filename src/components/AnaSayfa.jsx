import React from 'react';
import { UstKutu, UstKutuIci, Body, Baslik, Firsat, Aciktirir, AciktimLink } from "../styles"; 
import { Link } from "react-router-dom"

export default function AnaSayfa() {
  return (
    <Body>
      <UstKutu>
        <Baslik>Teknolojik Yemekler</Baslik>
        <UstKutuIci>
          <Firsat>Fırsatı Kaçırma</Firsat>
          <Aciktirir>KOD ACIKTIRIR <br /> PIZZA, DOYURUR</Aciktirir>
          <Link to="/form">
          <AciktimLink href="">ACIKTIM</AciktimLink>
          </Link>
        </UstKutuIci>
      </UstKutu>
    </Body>
  );
}
