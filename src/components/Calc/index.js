import PropTypes from "prop-types";

function Calc(props) {
  const { min, max, onChange } = props;
  return (
    <div>
      <p>Valor mínimo: {min}</p>
      <p>Valor máximo: {max}</p>
      <label htmlFor="inputValue">Valor: </label>
      <input type="text" id="inputValue" name="inputValue" onChange={onChange} />
    </div>
  );
}

Calc.prototype = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Calc;