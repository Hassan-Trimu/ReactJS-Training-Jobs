import React from "react";
import { Card } from "../../styledComponents/card/index";
import { Grid } from "../../styledComponents/grid/index";
const PostJob = () => {
  return (
    <div>
      <form>
        <Card>
          <label>Title: </label>
          <input type="text"></input>
          <br />
          <br />
          <label>Commitment ID: </label>
          <input type="text"></input>
          <br />
          <br />

          <label>Company Name: </label>
          <input type="text"></input>
          <br />
          <br />
          <label>Location Names: </label>
          <input type="text"></input>
          <br />
          <br />
          <label>User Email: </label>
          <input type="text"></input>
          <br />
          <br />
          <label>Apply Url: </label>
          <input type="text"></input>
        </Card>
      </form>
    </div>
  );
};

export default PostJob;
