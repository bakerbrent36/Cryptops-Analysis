import { useRef } from "react";
import styled from "@emotion/styled";
import { useQuery } from "react-query";

const RosterContainer = styled.div``;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  padding: 15px;

  thead {
    text-transform: uppercase;
    color: #be1e2d;
  }

  th {
    padding-bottom: 15px;
  }

  tr {
    border-bottom: 1px solid gray;
  }

  td {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const Roster = () => {
  const { isLoading, error, data } = useQuery("eventRoster", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/roster`
    ).then((res) => res.json())
  );

  console.log(data);
  return (
    <RosterContainer>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(({ member }) => (
              <tr>
                <td>{member.first_name}</td>
                <td>{member.last_name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </RosterContainer>
  );
};

export default Roster;
