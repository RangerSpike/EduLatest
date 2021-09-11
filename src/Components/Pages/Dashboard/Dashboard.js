import "./Dashboard.css";
import Navbar from "../../Common/Navbar/Navbar";
import hello from "../../../assets/hello.svg";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello {localStorage.getItem('UserName')}</h1>
            <p>Welcome to the dashboard</p>
          </div>
        </div>

        <h1>
          <text className="overallstats">OVERALL STATISTICS</text>
        </h1>
      </div>
      <div className="featured">
        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">Students</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">100000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub">By whole Year</span>
        </div>
        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">
            Overall Students Passed This Year
          </span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">8000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub">This Year</span>
        </div>
        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">Students Failed This Year</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">2000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub">This YEar</span>
        </div>

        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">Students Failed This Year</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">2000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub">This YEar</span>
        </div>
      </div>
    </>
  );
}
