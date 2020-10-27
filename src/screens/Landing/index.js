import { from } from "apollo-boost";
import React, { useState } from "react";
// import { JOBS as jobs } from "../../data/index";
import ListJobItems from "../../components/listJobItems/index";
import { Grid } from "../../styledComponents/grid/index";
import { Button } from "../../styledComponents/button/index";
import ModalPostJob from "../../components/modalPostJob/index";

import { Link } from "react-router-dom";

export const Landing = (props) => {
  // const { isShowing, toggle } = useModal();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <Grid>
        <h1 style={{ margin: "20px" }}>Jobs</h1>

        <Button
          onClick={openModal}
          // onClick={toggle}
          style={{ margin: "40px", textDecoration: "none" }}
        >
          Post a Job
        </Button>
        <ModalPostJob showModal={showModal} setShowModal={setShowModal} />

        {/* {<ModalPostJob isShowing={isShowing} hide={toggle} />} */}
      </Grid>
      {<ListJobItems jobs={props.jobs}></ListJobItems>}
      {/* <ModalPostJob /> */}
    </div>
  );
};

export default Landing;
