import React from "react";
import logo from "./logo.svg";
import "./App.css";

//import Jobs from "./api/queries/index";
import { Jobs } from "./api/queries/index";
import { gql } from "apollo-boost";

// const querCall = () => {
//   console.log('query')
// client
// .query({
//   query: gql`
//   {
//     jobs
//     {
//      id
//     }
//   }
//   `
// })
// .then(result => console.log(result));
//   client
//   .query({
//     query: gql`
//       {
//         jobs {
//           id
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));
// }
//  querCall();
const App = () => <div>{<Jobs />}</div>;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
