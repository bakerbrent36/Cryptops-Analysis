import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

const RegisterContainer = styled.div`
  width: 100%;
  height: 1800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  iframe {
    height: 100%;
    width: 100%;
  }
`;

const Button = styled.div`
  width: 223px;
  height: 68px;
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
`;

const FormModal = styled.div`
  position: absolute;
  background-color: rgba(22, 46, 61, 0.9);
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GHINForm = styled.form`
  display: flex;
  flex-direction: column;

  span {
    font-size: 36px;
    font-family: BebasNeue;
    text-transform: uppercase;
    color: #f3e9d5;
    margin-left: 5px;
  }
`;

const Input = styled.input`
  height: 50px;
  width: 250px;
  margin: 5px;
  padding: 5px;
  padding-left: 15px;
  font-size: 18px;
  flex: 1;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 700px;
`;

const InputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  label {
    color: #ffffff;
    margin-right: 5px;
    padding-left: 5px;
    font-size: 18px;
  }

  select {
    margin-right: 5px;
    font-size: 18px;
  }
`;

const SubmitButton = styled.input`
  width: 223px;
  height: 68px;
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
`;

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [GHIN, setGHIN] = useState();
  const [loading, setLoading] = useState(true);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch(`/get-ghin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        gender: formData.get("gender"),
        email: formData.get("email"),
        street_1: formData.get("street_1"),
        state: formData.get("state"),
        country: "USA",
        city: formData.get("city"),
        zip: formData.get("zip"),
      }),
    })
      .then((res) => {
        setShowModal(false);
        return res.json();
      })
      .then((data) => setGHIN(data));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showModal &&
        formRef.current &&
        !formRef.current.contains(event.target)
      ) {
        setShowModal(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <RegisterContainer>
      {GHIN?.golfers?.id ? (
        <div>
          Your GHIN is {GHIN.golfers.id}. Use this number to complete the tour
          registration below.
        </div>
      ) : (
        <Button onClick={() => setShowModal(true)}>Need a GHIN?</Button>
      )}
      {showModal && (
        <FormModal>
          <FormContainer ref={formRef}>
            <GHINForm onSubmit={handleSubmit}>
              <span>Golfer Information</span>
              <InputRow>
                <Input required name="first_name" placeholder="First Name" />
                <Input required name="last_name" placeholder="Last Name" />
              </InputRow>
              <InputRow>
                <label for="gender">Gender:</label>
                <select name="gender" placeholder="Gender">
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
                <Input required name="email" placeholder="Email Address" />
              </InputRow>
              <InputRow>
                <Input required name="street_1" placeholder="Street Address" />
              </InputRow>
              <InputRow>
                <Input required name="city" placeholder="City" />
                <label for="state">State:</label>
                <select required name="state" placeholder="State">
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AR">AR</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
                </select>
                <Input required name="zip" placeholder="Zip" />
              </InputRow>
              <InputRow
                style={{ justifyContent: "flex-end", paddingTop: "15px" }}
              >
                <SubmitButton type="submit" value="SUBMIT" />
              </InputRow>
            </GHINForm>
          </FormContainer>
        </FormModal>
      )}

      {loading && <div>Loading</div>}
      <iframe
        src={`${process.env.REACT_APP_REGISTER_URL}`}
        frameborder="0"
        scroll="none"
        onLoad={() => setLoading(false)}
      />
    </RegisterContainer>
  );
};

export default Register;
