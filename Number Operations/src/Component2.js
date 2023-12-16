function Component2({ decrease }) {
  let style = {
    backgroundColor: "white",
    padding: "10px",
    marginRight: "10px",
    color: "black",
    borderRadius: "8px",
    border: "1px solid black",
  };
  return (
    <div id="decreaseDiv">
      <input
        id="input"
        style={style}
        type="button"
        value="Decrease"
        onClick={decrease}
      ></input>
    </div>
  );
}

export default Component2;
