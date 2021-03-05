import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import styled from "@emotion/styled";

const LowerContainer = styled.div`
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

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  text-transform: uppercase;
  color: #162e3d;
  margin: 10px;

  label {
    padding-right: 15px;
  }
`;

const TourResults = () => {
  const [eventRounds, setEventRounds] = useState();
  const [currentRound, setCurrentRound] = useState(false);
  const [currentTour, setCurrentTour] = useState(false);
  const [roundTours, setRoundTours] = useState();
  const [tourResults, setTourResults] = useState();

  // const eventRounds = useQuery("eventData", () =>
  //   fetch(
  //     `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
  //   ).then((res) => res.json())
  // );

  useEffect(() => {
    if (currentRound) {
      fetch(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds/${currentRound}/tournaments`
      ).then((res) =>
        res.json().then((data) => {
          setRoundTours(data);
          if (data[0]) {
            setCurrentTour(data[0].event.id);
          }
        })
      );
    }

    if (currentTour) {
      fetch(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds/${currentRound}/tournaments/${currentTour}.json`
      ).then((res) => res.json().then((data) => setTourResults(data)));
    }
  }, [currentRound, currentTour]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
    )
      .then((res) => res.json())
      .then((data) => {
        setEventRounds(data);
        if (data.length > 0) {
          setCurrentRound(data[0].round.id);
        }
      });
  }, []);

  console.log(eventRounds);
  console.log(tourResults);
  console.log(roundTours);
  console.log(currentRound);
  console.log(currentTour);

  return (
    <CardWrapper>
      <Card>
        <DropdownContainer>
          <div>
            <label>Round Name</label>
            <select onChange={(e) => setCurrentRound(e.target.value)}>
              {eventRounds &&
                eventRounds.length > 0 &&
                eventRounds.map(({ round }) => (
                  <option value={`${round.id}`}>{round.name}</option>
                ))}
            </select>
          </div>
          {roundTours && (
            <div>
              <label>Tournament</label>
              <select onChange={(e) => setCurrentTour(e.target.value)}>
                {roundTours.length > 0 &&
                  roundTours.map(({ event }) => (
                    <option value={`${event.id}`}>{event.name}</option>
                  ))}
              </select>
            </div>
          )}
        </DropdownContainer>
        <Ribbon>Weekly Results</Ribbon>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>position</th>
                <th>name</th>

                <th>score</th>
              </tr>
            </thead>
            <tbody>
              {tourResults &&
                tourResults.event.scopes[0].aggregates.map((line) => (
                  <tr>
                    <td>{line.position}</td>
                    <td>{line.name}</td>
                    <td>{line.score}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </TableContainer>
      </Card>
    </CardWrapper>
  );
};

export default TourResults;
