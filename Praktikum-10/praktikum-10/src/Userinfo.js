import React from "react";
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
class ShowAge extends React.Component {
  render() {
    return <h1>YOur Age Is, {this.props.age}</h1>;
  }
}
var person = [
  { name: "Sarah", age: 23 },
  { name: "Deborah", age: 20 },
  { name: "Josh", age: 12 },
];
class Userinfo extends React.Component {
  render() {
    return (
      <>
        {person.map((el) => {
          return (
            <div
              style={{
                border: "1px solid #000",
                borderRadius: "1px",
                padding: "20px",
              }}
            >
              <Welcome name={el.name} />
              <ShowAge age={el.age} />
            </div>
          );
        })}
      </>
    );
  }
}
export default Userinfo;
