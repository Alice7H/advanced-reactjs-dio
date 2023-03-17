import PropTypes from "prop-types";

function Table({ title, list }) {
  return (
    <table>
      <thead style={{ fontWeight: "bold", textDecoration: "underline" }}>
        <tr>
          <td>{title}</td>
        </tr>
      </thead>
      <tbody>
        {
          list.map((item, index) =>
            <tr key={index}>
              <td> - {item}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}

Table.prototype = {
  title: PropTypes.string,
  list: PropTypes.array
}

export default Table;