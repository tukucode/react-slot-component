/* eslint-disable react/prop-types */
export default function AlertChild(props) {
  const {
    title = "Title",
    variant = "border-danger text-danger",
    children,
  } = props;

  return (
    // border-danger bg-danger
    <div className={`border p-2 ${variant}`}>
      <h5>{title}</h5>

      {children}
    </div>
  );
}
