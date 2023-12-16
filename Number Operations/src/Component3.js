import './Component3.css';

function Component3({ makeZero }) {
  return (
    <div>
      <input type="button" value="Make Zero" onClick={makeZero} className="button"></input>
    </div>
  );
}

export default Component3;
