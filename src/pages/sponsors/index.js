import styled from "@emotion/styled";

// Sponsor Images
import Capstone from "../../assets/images/sponsors/capstone.png";
import Kunda from "../../assets/images/sponsors/kunda.png";
import Farmers from "../../assets/images/sponsors/founding-farmers.png";
import Montco from "../../assets/images/sponsors/montco-golf.png";
import Conlins from "../../assets/images/sponsors/conlins.png";
import Workhorse from "../../assets/images/sponsors/workhorse.png";

const MainContainer = styled.div`
  iframe {
    width: 100%;
    height: 1000px;
    border: none;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  padding-top:5rem;
  margin: 0 auto;
`;

const SponsorList = styled.div`
  margin:0 auto;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  h1{
    width:100%;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    font-family: BebasNeue;
    color: #F3E9D5;
    font-size:56px;
  }
  @media(max-width:892px){
    h1{
      font-size: 36px;
    }
  }
`;

const SponsorItem = styled.div`
  align-self:center;
  margin:0 auto;
`;

const TitleBar = styled.div`
  background: #F3E9D5;
  display:flex;
  padding: 0.6rem 1rem;
  text-transform:uppercase;
  color:#BE1E2D;
  font-family: BebasNeue;
  font-size:22px;
  @media(max-width:892px){
    width:auto;
    justify-content: center;
  }
`;

const SponsorContent = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
  .sponsor-img{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img{
    width:100%;
  }
  .sponsor-desc{
    width: 50%;
  }
  span{
    color:#BE1E2D;
    font-weight:bold;
    font-family:Raleway;
    margin-top:1rem;
  }
  .sponsor-cta {
    width: 15%;
  }
  button{
    padding: 15px 25px;
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
    font-family:Raleway;
    font-weight:bold;
  }
  button:hover{
    cursor:pointer;
    transition:0.2s ease-in-out;
    opacity:0.7;
  }
  @media(max-width:892px){
    flex-direction: column;
    padding: 2.2rem;
    .sponsor-img, .sponsor-desc, .sponsor-cta{
      width: 100%;
    }
    .sponsor-img{
      margin: 1rem 0;
    }
    img{
      width: 100%;
    }
    .sponsor-desc{
      text-align: center;
    }
    .sponsor-cta{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0 1rem 0;
    }
  }
`;

const Sponsors = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <SponsorList>
          
            <h1>Proud Tour Sponsors</h1>

          <SponsorItem>
            <TitleBar>
              Breakfast Ball Sponsor
            </TitleBar>
            <SponsorContent>
              <div class="sponsor-img">
                <img src={Farmers} alt="Conlins logo" style={{width:"90%",}}/>
              </div>
              <div class="sponsor-desc">
                <p>Founding Farmers KOP is a full-service restaurant and bar open every day, located in the center of the lively King of Prussia Town Center. As a farmer-owned restaurant, almost all of our delicious food and drink – including our proprietary spirits, Founding Spirits – is made from scratch using high-quality ingredients from American family farms.</p>
                <span>Member Perk: $2 off first Workhorse Beer at Founding Farmers King of Prussia. Dine in only. With purchase.</span>
              </div>
              <div class="sponsor-cta">
                <button onClick={()=> window.open("https://www.wearefoundingfarmers.com/location/king-of-prussia/", "_blank")}>
                  Visit Site
                </button>
              </div>
            </SponsorContent>
          </SponsorItem>

          <SponsorItem>
            <TitleBar>
              Official Golf Partner
            </TitleBar>
            <SponsorContent>
              <div class="sponsor-img">
                <img src={Montco} alt="Conlins logo" style={{width:"60%",}}/>
              </div>
              <div class="sponsor-desc">
                <p>Montgomery County, Pennsylvania is home to more than 50 golf courses, including some of the most historic and top-ranked courses in the country. And with 80 nearby hotels, incredible attractions and delicious dining options, Montgomery County isn't just a place to play golf, it's a destination.</p>
              </div>
              <div class="sponsor-cta">
                <button onClick={()=> window.open("https://www.valleyforge.org/golf/", "_blank")}>
                  Visit Site
                </button>
              </div>
            </SponsorContent>
          </SponsorItem>

          <SponsorItem>
            <TitleBar>
              Print and Copy Sponsor
            </TitleBar>
            <SponsorContent>
              <div class="sponsor-img">
                <img src={Conlins} alt="Conlins logo"/>
              </div>
              <div class="sponsor-desc">
                <p>Conlin’s Digital Print is a family-owned business located in King of Prussia. Since 1980, Conlin’s has served our customers with exceptional digital printing, signage, and direct mail. Call us today with your next project.</p>
              </div>
              <div class="sponsor-cta">
                <button onClick={()=> window.open('https://conlinsprint.com/', "_blank")}>
                  Visit Site
                </button>
              </div>
            </SponsorContent>
          </SponsorItem>

          <SponsorItem>
            <TitleBar>
              Official Beer Distributor
            </TitleBar>
            <SponsorContent>
              <div class="sponsor-img">
                <img src={Kunda} alt="Kunda logo"/>
              </div>
              <div class="sponsor-desc">
                <p>Specializing in hard-to-find American craft beers and imported selections from around the globe, Kunda Beverage doesn't only have the best selection available, but also has the knowledge and expertise to back it up! With over 125 years of collective beer experience over multiple generations, beer is truly our livelihood.</p>
                <span>Member Perk:  5% off all purchases.</span>
              </div>
              <div class="sponsor-cta">
                <button onClick={()=> window.open("http://kundabev.com/", "_blank")}>
                  Visit Site
                </button>
              </div>
            </SponsorContent>
          </SponsorItem>

          <SponsorItem>
            <TitleBar>
              Official Insurance Partner
            </TitleBar>
            <SponsorContent>
              <div class="sponsor-img">
                <img src={Capstone} alt="Capstone blue and orange logo"/>
              </div>
              <div class="sponsor-desc">
                <p>Capstone Group is the official insurance partner of the Workhorse Tour. Just as Workhorse offers Your Beer, Your Way, Capstone Group provides Your Coverage, Your Way by taking a customized approach to insurance and employee benefits for businesses and individuals.</p>
              </div>
              <div class="sponsor-cta">
                <button onClick={()=> window.open("https://www.capstoneinsgroup.com/", "_blank")}>
                  Visit Site
                </button>
              </div>
            </SponsorContent>
          </SponsorItem>

          <SponsorItem>
            <TitleBar>
              Presenting Sponsor
            </TitleBar>
            <SponsorContent>
              <div class="sponsor-img">
                <img src={Workhorse} alt="Conlins logo" style={{width:"80%",}}/>
              </div>
              <div class="sponsor-desc">
                <p>Beer Made Right: it's not a marketing gimmick, rather, it's our promise that we won't cut corners to ensure top-notch suds and consistent, high-quality service. Visit the King of Prussia Taproom to enjoy food and drink seven days a week, plus live golf on TV!</p>
                <span>Member Perk: $1 off in-house drafts and 15% off merch and to-go beer, plus discounts on private event space.</span>
              </div>
              <div class="sponsor-cta">
                <button onClick={()=> window.open("https://www.workhorsebrewing.com/", "_blank")}>
                  Visit Site
                </button>
              </div>
            </SponsorContent>
          </SponsorItem>

        </SponsorList>
      </InnerContainer>
      {/* <iframe src="https://workhorsetour.com/sponsors.html" /> */}
    </MainContainer>
  );
};

export default Sponsors;
