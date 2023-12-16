function Component1({ increase }) {
  return (
    <div id="increaseDiv">
      <input
        style={{
          backgroundColor: "white",
          padding: "10px",
          marginRight: "10px",
          color: "black",
          borderRadius: "8px",
          border: "1px solid black",
        }}
        type="button"
        value="Increase"
        onClick={increase}
      ></input>
    </div>
  );
}

export default Component1;
