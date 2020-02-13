import React from 'react';
import links from '../data/links.json';

const centerTable = {
  "margin": "0 auto"
}

export default class Links extends React.Component {
  render() {
    return <div>

      <table className="table text-center" style={centerTable}>

      <tbody>
        {links.map(item =>
          (
              <tr key={item.link}>
                <td><a href={item.link}>{item.text}</a></td>
              </tr>
          ))
        }

</tbody>
      </table>
    </div>
  }
};

