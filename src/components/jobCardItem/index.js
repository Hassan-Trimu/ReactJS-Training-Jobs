import React from "react";

import styled from "styled-components";
import ReactMarkDown from "react-markdown";
// import "../styles/landingPage.css";

const Card = styled.div`
  margin: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Button = styled.button`
  align-self: center;
  margin-left: 200px;
  width: 100px;
  border-radius: 10px;
  background-color: royalblue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;

  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
// const StyledParagraph = styled.div`
//   margin: 2px;
// `;

const StyledUser = styled.div`
  background: ${(props) => (props.type === "Admin" ? "red" : "yellow")};
  background: red;
`;

const CardFun = (props) => {
  return (
    <div>
      <Card>
        <Grid>
          <h1>{props.title}</h1>
          <Button>Apply</Button>
        </Grid>
        {<h2>{props.companyName}</h2>}
        {<h3>{props.userEmail}</h3>}
        <ReactMarkDown style={{ overflow: "hidden" }}>
          {props.description}
        </ReactMarkDown>
      </Card>
    </div>
  );
};

export default CardFun;
