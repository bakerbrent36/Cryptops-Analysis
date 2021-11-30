import { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useQuery } from "react-query";

const RosterContainer = styled.div`
  background-color: #F3E9D5;
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
  padding-bottom: 1rem;
  button{
    width: 134px;
    height: 54px;
    background-color: #be1e2d;
    border: none;
    margin: 5px;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 2rem auto;
  :hover{
    opacity:0.7;
    transition:0.2s ease-in-out;
    cursor:pointer;
  }
  }
`;

const Ribbon = styled.div`
  background-color: #f3e9d5;
  color: #be1e2d;
  text-transform: uppercase;
  padding: 15px;
  position: relative;
  top: 10px;
  right: 15px;
  width: 150px;
`;

const TableContainer = styled.div`
  background-color: #f8f8f8;
  padding: 25px;
  margin: 10px;
  text-align: center;
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
  const [roster, setRoster] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)

  const getPlayers = (pageNum = 1) => {
    console.log("PAGE NUMBER", pageNum)
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/roster?page=${pageNum}`
    ).then((res) => res.json()).then(data => {
      if (data.length != 0) {
        setRoster(oldState => [...oldState, ...data])
      } else {
        setLoading(false)
      }
    })
      
      
  }

  function loadMore(){
    setPageNumber(oldState => {
      getPlayers(oldState + 1)
      return oldState + 1
    })

  }

  console.log(pageNumber)
  // console.log(newPlayers || 'blah')

  useEffect(() => {
    getPlayers()
  }, [])

  console.log(roster)

  return (
    <RosterContainer>
      <CardWrapper>
        <Card>
          <Ribbon>Player Roster</Ribbon>
          <TableContainer>
            <div style={{ paddingTop: "25px", paddingBottom: "25px" }}>
              The following golfers are members on Tour. Don't see your friends?
              Invite them to join!
            </div>
            <Table>
              <thead>
                <tr>
                  <th>first name</th>
                  <th>last name</th>
                  <th>handicap index</th>
                </tr>
              </thead>
              <tbody>
                {roster &&
                  roster
                    .filter(({ member }) => !member.deleted)
                    .map(({ member }) => (
                      <tr>
                        <td>{member.first_name}</td>
                        <td>{member.last_name}</td>
                        <td>{member?.handicap?.handicap_index || "N/A"}</td>
                      </tr>
                    ))}
              </tbody>
            </Table>
          </TableContainer>
          {loading && <button onClick={loadMore}>LOAD MORE</button>}
        </Card>
      </CardWrapper>
    </RosterContainer>
  );
};

export default Roster;
