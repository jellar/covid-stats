import { useState, useEffect } from "react";
import Stats from "../components/Stats";
import { CountySelector } from "../components/countrySelector";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}`;
export default function IndexPage() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Stats url="https://covid19.mathdro.id/api" />
      <CountySelector />
    </div>
  );
}
