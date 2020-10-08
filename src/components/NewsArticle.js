import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid rgba(55, 55, 55, 0.1);
`;

const Div = styled.div`
  min-width: 3ch;
  min-height: 100%;
  text-align: center;
  display: inline-block;
`;

const NewsArticle = ({ webTitle, webUrl, index }) => {
  return (
    <Container>
      <Div index={index}>{index + 1}</Div>
      <a href={webUrl} target="blank">
        {webTitle}
      </a>
    </Container>
  );
};

export default NewsArticle;
