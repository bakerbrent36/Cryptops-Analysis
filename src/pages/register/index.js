import styled from "@emotion/styled";

const RegisterContainer = styled.div`
  width: 100%;
  height: 1800px;
  iframe {
    height: 100%;
  }
`;

const Register = () => {
  return (
    <RegisterContainer>
      <iframe
        src="https://www.golfgenius.com/leagues/213189/widgets/open_registration?shared=false"
        frameborder="0"
        scroll="none"
      />
    </RegisterContainer>
  );
};

export default Register;
