import React from "react";

import { Link } from "react-router-dom";
import { Card } from "../../styledComponents/card/index";
import { Button } from "../../styledComponents/button/index";
import { Grid } from "../../styledComponents/grid/index";

// import "../styles/landingPage.css";

// const StyledParagraph = styled.div`
//   margin: 2px;
// `;

const JobCardItem = (props) => {
  return (
    <div>
      {/* <div>
        <p style={{ width: "30%", display: "inline" }}>Hassan</p>
        <p style={{ width: "30%", display: "inline", marginLeft: "20%" }}>
          Minhas
        </p>
      </div> */}
      <Card>
        <Grid>
          <h2>{props.title}</h2>
          <div>
            <Button style={{ marginRight: "8px" }}>Apply</Button>
            <Link to={"/job/" + props.id}>View Detais </Link>
          </div>
        </Grid>

        {<h3>{props.companyName}</h3>}
        <p style={{ overflow: "hidden", height: "38px" }}>
          {props.description}
        </p>
        {<h4>Posted by: {props.userEmail}</h4>}
      </Card>
    </div>
  );
};

export default JobCardItem;
