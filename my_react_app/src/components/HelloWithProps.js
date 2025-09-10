import React from "react";

function HelloWithProps(props) {
  const marks = "!".repeat(props.exclamationNumber);

  return (
    <div>
      <p>
        Hi {props.to} from {props.from}
        {marks}
      </p>
      <img src={props.img} alt="greeting" width="200" />
    </div>
  );
}


export default HelloWithProps;
