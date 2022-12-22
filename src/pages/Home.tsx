import React, { useEffect, useState } from "react";
import { createNanoEvents } from "nanoevents";
import i18n from "../i18n/config";
import { Link, Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import styled from "styled-components";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import { AiOutlineUnorderedList } from "react-icons/ai";

const emitter = createNanoEvents();
const Pokemon = React.lazy(() => import("Pokemon/Home"));
const RickAndMorty = React.lazy(() => import("RickAndMorty/Home"));

const pokemonRoutes = import("Pokemon/routes");
const rickRoutes = import("RickAndMorty/routes");

i18n.on("languageChanged", (lng: any) => {
  emitter.emit("languageChanged", lng);
});

const createLinksByMF = (
  microfrontName: string,
  routesPromise: Promise<any>
) => {
  const [mapedRoutes, setMapedRoutes] = useState<any[]>([]);
  useEffect(() => {
    routesPromise.then((routes) => {
      return setMapedRoutes(
        routes.default.map((route: any) => (
          <div key={`${microfrontName}${route.path}`}>
            <Link to={`/${microfrontName}${route.path}`}>
              <AiOutlineUnorderedList /> {route.title}
            </Link>
          </div>
        ))
      );
    });
  }, [microfrontName, routesPromise]);
  return mapedRoutes;
};

const renderMFE = (MFE: any) => {
  return (
    <React.Suspense fallback="Loading...">
      <MFE emitter={emitter} />
    </React.Suspense>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 80%;
  padding-inline: 3rem;
`;

const Home = () => {
  const links = [
    ...createLinksByMF("RickAndMorty", rickRoutes),
    ...createLinksByMF("Pokemon", pokemonRoutes),
  ];
  return (
    <Container>
      <SideBar>
        {links}
        <LanguageSelector />
      </SideBar>
      <Content>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/RickAndMorty/*" element={renderMFE(RickAndMorty)} />
            <Route path="/Pokemon" element={renderMFE(Pokemon)} />
          </Routes>
        </React.Suspense>
      </Content>
    </Container>
  );
};

export default Home;
