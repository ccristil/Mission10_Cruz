import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function FoodList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5206/Bowling');
      const b = await rsp.json();
      setBowlerData(b);
    };
    fetchBowlerData();
  }, []);

  return (
    <div>
      <br />
      <div className="row">
        <h3>All Bowlers</h3>
      </div>
      <br />
      <br />
      <div className="container">
        <table className="table table-striped">
          <tr>
            <th>Full Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
          <tbody>
            {bowlerData.map((b) => (
              <tr key={b.bowlerId}>
                <td>{b.bowlerName}</td>
                <td>{b.team.teamName}</td>
                <td>{b.bowlerAddress}</td>
                <td>{b.bowlerCity}</td>
                <td>{b.bowlerState}</td>
                <td>{b.bowlerZip}</td>
                <td>{b.bowlerPhoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodList;
