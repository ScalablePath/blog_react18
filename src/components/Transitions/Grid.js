const Grid = (props) => {
  const { count } = props;
  let rows = [];
  let i, j;
  for (i = 0; i < count; i++) {
    let cols = [];
    for (j = 0; j < count; j++) {
      cols.push(<div key={`${i}${j}`} className={`col-${count}by${count}`} />);
    }
    rows.push(
      <div key={`row${i}`} className="grid-row">
        {cols}
      </div>
    );
  }
  return <div className="grid">{rows}</div>;
};
export default Grid;
