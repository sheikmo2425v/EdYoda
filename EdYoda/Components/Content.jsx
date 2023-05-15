import { useState } from "react";

const Content = () => {
  const [amount, setamount] = useState("18,500");
  const [disamount, setdisamount] = useState(179);
  const[mamount,setmamount]=useState("18,401");
  const [selectedOption, setSelectedOption] = useState("option0");
  const [da, setda] = useState(["t year1", "t year2", "t year2"]);

  const c = (event) => {
    setSelectedOption(event.target.value);
    
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col bor">
            <p className="content">Access curated courses worth </p>
            <p className="content" style={{ marginTop: "-6%" }}>
              <span className="amount"> ₹18,500
                <span className="line"> </span>{" "}
              </span>
              at just <span className="dis"> ₹ 99</span>per year!
            </p>
            <div>
              <div className="middle">
            <img src="./images/book.jpg" alt="" width="30" height="30"/>
            <p className="sentence"><span style={{color:"#0096FF"}}> 100+</span> Job relevant courses</p>
            </div>
            <div className="middle">
            <img src="./images/clock.png" alt="" width="30" height="30"/>
            <p className="sentence"><span style={{color:"#0096FF"}}> 20,000+</span> Hours of content</p>
            </div>
            <div className="middle">
            <img src="./images/live.png" alt="" width="30" height="30"/>
            <p className="sentence"><span style={{color:"#0096FF"}}> Exclusive</span> webinar access</p>
            </div>
            <div className="middle">
            <img src="./images/certificate.png" alt="" width="30" height="30"/>
            <p className="sentence">Scholarship worth <span style={{color:"#0096FF"}}>₹94,500</span></p>
            </div>
            <div className="middle">
            <img src="./images/ads.png" alt="" width="30" height="30"/>
            <p className="sentence"><span style={{color:"#0096FF"}}> Ad Free</span> learning experience</p>
            </div>
            </div>
          </div>
          <div className="col ">
            <div className=" plan">
              <div className="row sign ">
                <p className="col no">1</p>
                <p className="col no">2</p>
              </div>
              <div className="row sub ">
                <p className="col up">Sign Up</p>
                <p className="col up">Subscribe</p>
              </div>
              <div>
                <p
                  style={{
                    marginTop: "-15%",
                    fontWeight: "600",
                    color: "#3C4852",
                    fontSize: "18px",
                  }}
                >
                  Select your subscription plan
                </p>
              </div>
              <form className="box">
                <div className="t year">
                  <input
                    type="radio"
                    id="optione"
                    name="option"
                    value="optione"
                    checked
                  />
                  <p className="expired">Offer expired</p>
                  <label for="optione" style={{ color: "#BEBEBE" }}>
                    12 Months Subscription{" "}
                    <span className="dside">
                      Total <b> ₹ 99</b>
                      <span className="dsideb">
                        <b> ₹8</b> /mo
                      </span>
                    </span>
                  </label>
                </div>
               
                <br />
                <div className={da[0]}>
                  <p className="rec">Recommended</p>
                  <input
                    type="radio"
                    id="option0"
                    name="options"
                    value="option0"
                    checked={selectedOption === "option0"}
                    onChange={(e) => (
                      c(e), setda(["t year1", "t year2", "t year2"]),setamount("18,500"),setdisamount("179"),setmamount("18,401")
                    )}
                  />
                  <label htmlFor="option0">
                    12 Months Subscription{" "}
                    <span className="side">
                      Total <b> ₹ 179</b>
                      <span className="sideb">
                      <b> ₹15 </b> /mo
                      </span>
                    </span>
                    {selectedOption === "option0" && (
                      <img
                        src="./images/selected.png"
                        alt="Selected Icon"
                        className="selected-icon"
                      />
                    )}
                  </label>
                </div>
                <br />
              
                <div className={da[1]}>
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={(e) => (
                      c(e), setda(["t year2", "t year1", "t year2"]),setamount("9,250"),setdisamount("149"),setmamount("9,151")
                    )}
                  />
                  <label htmlFor="option1">
                    6 Months Subscription
                    <span className="side">
                      Total <b> ₹ 149</b>
                      <span className="sideb">
                      <b> ₹25</b> /mo
                      </span>
                    </span>{" "}
                    {selectedOption === "option1" && (
                      <img
                        src="./images/selected.png"
                        alt="Selected Icon"
                        className="selected-icon"
                      />
                    )}
                  </label>
                </div>
                <br />
             
                <div className={da[2]}>
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={(e) => (
                      c(e), setda(["t year2", "t year2", "t year1"]),setamount("4,625"),setdisamount("99"),setmamount("4,526")
                    )}
                  />
                  <label htmlFor="option2">
                    3 Months Subscription{" "}
                    <span className="side">
                      Total <b> ₹ 99</b>
                      <span className="sideb">
                      <b> ₹33 </b> /mo
                      </span>
                    </span>{" "}
                    {selectedOption === "option2" && (
                      <img
                        src="./images/selected.png"
                        alt="Selected Icon"
                        className="selected-icon"
                      />
                    )}
                  </label>
                </div>
              </form>

              <div className="subfee">
                <p className="fee">Subscription fee </p>
                <p style={{ marginTop: "-18%", marginLeft: "80%",color:"#3C4852"}}>
                  ₹{amount}
                </p>
              </div>
            </div>
            <p className="offer">Limited time offer<span style={{color:"#3C4852",marginLeft:"78%",marginTop:"-10%"}}>-₹{mamount}</span></p>
            <p className="valid"><img src="./images/offer.png" alt="" width="16" height="16"  />   Offer valid till 25th march 2023 </p>
            <div className="total">
              <p className="total1">
                <b>Total </b> (Incl. of 18% GST){" "}
              </p>
              <p style={{ marginTop: "-17%", marginLeft: "140%",color:"#3C4852" }}>
              <b> ₹{disamount}</b>
              </p>
              </div>
              <div className="bottom">
                <div className="canbor">
                <p className="cancel">CANCEL</p>
                </div>
                <div className="paybor">
                <p className="pay"><b> PROCEED TO PAY</b></p>
                </div>

              </div >
              <div className="razor">
              <img src="./images/Razorpay.png" alt="" width="68" height="26"/>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;