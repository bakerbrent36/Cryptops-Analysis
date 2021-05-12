import styled from "@emotion/styled";

const MainContainer = styled.div`
  iframe {
    width: 100%;
    height: 1000px;
    border: none;
  }
`;

const Sponsors = () => {
  return (
    <MainContainer>
      <iframe src="https://workhorsetour.com/sponsors.html" />
    </MainContainer>
  );
};

export default Sponsors;
