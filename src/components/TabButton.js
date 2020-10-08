import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1.2rem;
  padding: 1rem 0.5rem;
  cursor: pointer;
  border-style: none;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.value === props.active ? "transparent" : "rgba(55, 55, 55, 0.1)"};
  &:focus {
    outline: none;
  }
`;

const TabButton = ({ value, handleClick, active }) => {
  return (
    <Button onClick={handleClick} value={value} active={active}>
      {value}
    </Button>
  );
};

export default TabButton;
