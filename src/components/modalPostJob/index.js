import React, { Fragment } from "react";
import styled from "styled-components";
import ReactDOM, { createPortal } from "react-dom";
import PostJob from "../../screens/PostJob/index";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";
import POST_JOB from "../../api/mutations/index";
import { useMutation } from "@apollo/client";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  z-index: 10;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba (0, 0, 0, 0.3);
`;

const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  width: 60%;
  background-color: white;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba (0, 0, 0, 0.25);
  z-index: 101;
  padding: 40px;
`;

// const ModalPostJob = ({ isShowing, hide }) =>
//   isShowing
//     ? createPortal(
//         <Fragment>
//           <h1>heloo</h1>
//           <button onClick={hide}>close</button>
//         </Fragment>,
//         document.body
//       )
//     : null;

// export default ModalPostJob;

// const ModalPostJob = (props) => {
//   return (
//     <div>
//       <ModalWrapper>
//         <ModalBackdrop>
//           <ModalBox></ModalBox>
//           <h1>asgxj</h1>
//           {/* <h1>ModalPostJob</h1>
//     {props.children} */}
//           {props .children}
//         </ModalBackdrop>
//       </ModalWrapper>
//     </div>
//   );
// };

const Button = styled.button`
  /* align-self: center;
  margin-left: 200px;
  width: 100px; */
  border-radius: 10px;

  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;

  text-decoration: none;
  font-size: 16px;
`;

const Input = styled.input`
  width: 300px;
`;

const ModalPostJob = ({ showModal, setShowModal }) => {
  return (
    <Modal
      style={{
        overlay: {
          // backgroundColor: "papayawhip",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <h1>Post a Job</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>Title </label>
        <Input type="text"></Input>
        <br />
        <br />
        <label>Commitment ID </label>
        <Input type="text"></Input>
        <br />
        <br />

        <label>Company Name </label>
        <Input type="text"></Input>
        <br />
        <br />
        <label>Location Names </label>
        <Input type="text"></Input>
        <br />
        <br />
        <label>User Email </label>
        <Input type="text"></Input>
        <br />
        <br />
        <label>Apply Url </label>
        <Input type="text"></Input>

        <br />
        <br />

        <label>Description </label>
        <textarea
          type="text"
          style={{ height: "100px", width: "300px" }}
        ></textarea>
        <br />
        <br />

        <div style={{ display: "flex", alignItems: "center" }}>
          <Button type="submit" style={{ backgroundColor: "green" }}>
            Post
          </Button>
          <Button
            style={{ marginLeft: "30px", backgroundColor: "red" }}
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalPostJob;
