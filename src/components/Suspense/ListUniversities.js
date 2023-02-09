import React from "react";
const ListUniversities = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>link</th>
        </tr>
        {props.list.map((item, index) => (
          <tr key={`u-${index}`}>
            <td>{item.name}</td>
            <td>
              <a href={item.web_pages[0]}>{item.web_pages[0]}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ListUniversities;
