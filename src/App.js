import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import TabButton from "./components/TabButton";
import NewsArticle from "./components/NewsArticle";

const Article = styled.article`
  margin: 2rem;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(55, 55, 55, 0.1);
`;

const H1 = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [newsContent, setNewsContent] = useState({
    "UK News": null,
    Football: null,
    Travel: null,
  });

  const [active, setActive] = useState("UK News");

  useEffect(() => {
    const baseUrl = "https://content.guardianapis.com/search";
    const apiKey = "9wur7sdh84azzazdt3ye54k4";

    const data = {
      ukNews: axios.get(`${baseUrl}?q=uk%20news&api-key=${apiKey}`),
      football: axios.get(`${baseUrl}?q=football&api-key=${apiKey}`),
      travel: axios.get(`${baseUrl}?q=travel&api-key=${apiKey}`),
    };

    Promise.all([data.ukNews, data.football, data.travel])
      .then((res) =>
        setNewsContent({
          "UK News": res[0].data.response.results,
          Football: res[1].data.response.results,
          Travel: res[2].data.response.results,
        })
      )
      .catch(console.log);
  }, []);

  function handleClick(e) {
    setActive(e.target.value);
  }

  if (
    !newsContent["UK News"] ||
    !newsContent["Football"] ||
    !newsContent["Travel"]
  ) {
    return (
      <Article>
        <H1>The Guardian News</H1>
        <div>loading...</div>
      </Article>
    );
  }

  return (
    <Article>
      <H1>The Guardian News</H1>
      <Section>
        <Header>
          {Object.keys(newsContent).map((tabButtonText, i) => (
            <TabButton
              key={i}
              value={tabButtonText}
              handleClick={handleClick}
              active={active}
            />
          ))}
        </Header>
        <Body>
          {newsContent[active].map((element, i) => (
            <NewsArticle key={element.id} {...element} index={i} />
          ))}
        </Body>
      </Section>
    </Article>
  );
}

export default App;
