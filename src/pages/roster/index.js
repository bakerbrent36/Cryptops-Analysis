import { useRef } from "react";
import styled from "@emotion/styled";
import { useQuery } from "react-query";

const RosterContainer = styled.div`
  background-color: #162e3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const CardWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
`;

const Card = styled.div`
  background-color: #ffffff;
  min-height: 400px;
  margin: 15px;
`;

const Ribbon = styled.div`
  background-color: #f3e9d5;
  color: #be1e2d;
  text-transform: uppercase;
  padding: 5px;
  position: relative;
  top: 10px;
  right: 15px;
  width: 150px;
`;

const TableContainer = styled.div`
  background-color: #f8f8f8;
  padding: 25px;
  margin: 10px;
`;

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
      <CardWrapper>
        <Card>
          <Ribbon>Player Roster</Ribbon>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>first name</th>
                  <th>last name</th>
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
          </TableContainer>
        </Card>
      </CardWrapper>
    </RosterContainer>
  );
};

export default Roster;
