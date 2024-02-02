import React from "react";

const CardChild = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title = "Title", children } = props;

  const Body = React.Children.toArray(children).filter(
    (child) => child.props.slot === "Body"
  );

  const Actions = React.Children.toArray(children).filter(
    (child) => child.props.slot === "Actions"
  );

  return (
    <div className="border border-primary p-3">
      <h4>{title}</h4>

      {Body}

      {Actions}
    </div>
  );
};

export default CardChild;
