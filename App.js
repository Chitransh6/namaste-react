const React = require('react');
const ReactDOM = require('react-dom/client');
const temp = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child" , key: "k1"}, [
    React.createElement("h1", {key : "k5"}, "hii I am h1 tag"),
    React.createElement("h2", {key : "k6"}, "hii I am h2 tag"),
  ]),
 React.createElement("div", { id: "child1" , key:"k2"}, [
    React.createElement("h1", {key : "k7"}, "hii I am h1 tag"),
    React.createElement("h2", {key : "k8"}, "hii I am h2 tag"),
  ])

]



);

console.log(temp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(temp);
