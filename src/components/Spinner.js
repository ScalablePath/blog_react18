import loader from "../assets/loading.gif";
const Spinner = (props) => {
  return (
    <img
      src={loader}
      className={props.className ? props.className : "loader-sm"}
      alt="loading..."
    />
  );
};
export default Spinner;
