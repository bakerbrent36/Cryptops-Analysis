import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Image = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #162e3d;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  text-decoration: none;
  margin: 15px;
  margin-bottom: 25px;
  height: 525px;
  width:100%;

  img{
    width:100%;
    height:100%;
  }

  @media only screen and (max-width: 1200px) {
    height: 325px;
  }

  @media only screen and (max-width: 768px) {
    height: 268px;
  }
`;


const HeaderImage = ({ backgroundImage, date, name, link }) => {

  return (
    <Image>
      {roundInfo &&
      roundInfo
        .filter((round) =>
          currentMonth
            ? format(parseISO(round.date), "MMM").toLocaleLowerCase() ==
              currentMonth
            : round
        )
        .map((round) => {
          return (
            <RoundCard
              backgroundImage={round?.course_info?.main_image || PlaceHolder}
              date={round?.date}
              name={round?.name}
              link={`/round/${round?.id}`}
            />
          );
        })}
    </Image>
    
  );
};

export default HeaderImage;
