import React, { ReactNode } from "react";
import NavBar from "../NavBar";
import Footer from "./Footer";
import tw from "twin.macro";
import styled from "styled-components";
interface LayoutProps {
  children: ReactNode;
}
function DefaultLayout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <NavBar />
      {children}
      <Footer />
    </Wrapper>
  );
}

export default DefaultLayout;

const Wrapper = styled.div`
  ${tw` flex flex-col m-auto items-center font-sans`}
`;
