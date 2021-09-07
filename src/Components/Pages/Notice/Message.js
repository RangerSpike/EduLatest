import React, { useState, useEffect } from "react";
import Navbar from "../../Common/Navbar/Navbar";
function Message() {
  const [title, setTitle] = useState();
  const [recipient, setRecipient] = useState();
  const [message, setMessage] = useState();

  const [sendTo, setSendTo] = useState();
  const [standard, setStandard] = useState();

  const [currentUser, setCurrentUser] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    //console.log(e.target.value);

    const input = e.target.name;
    if (input === "title") {
      setTitle(e.target.value);
    } else if (input === "recipient") {
      setRecipient(e.target.value);
    } else if (input === "message") {
      setMessage(e.target.value);
    } else if (input === "sendTo") {
      setSendTo(e.target.value);
    } else if (input === "standard") {
      setStandard(e.target.value);
    }
  };
  useEffect(() => {
    if(localStorage.getItem("Role") === "Teacher"){
      setIsDisabled(true);
      setSendTo("Student")
    }
    console.log(localStorage.getItem("Role"));
    setCurrentUser(localStorage.getItem("Role"));
  }, []);

  // const onBlurCheck = (e) => {
  //   console.log(e.target.value);
  //   if (currentUser === "Teacher") {
  //     if (e.target.value === "Teacher") {
  //       setSendTo("");
  //       setStandard("");
  //       alert("Teaches Cannot Send Message/Notice To Teachers");
  //     }
  //     else{
  //       setSendTo("Student")
  //     }
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Write New Message</h3>
                </div>
              </div>
              <form
                className="new-added-form"
                onChange={handleChange}
                //onBlur={onBlurCheck}
              >
                <div classname="text-centre" style={{ marginLeft: "100px" }}>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                      <label>Send to</label>
                      <select
                        className="select3 select2-hidden-accessible"
                        data-select2-id="1"
                        tabIndex="-1"
                        aria-hidden="true"
                        value={sendTo}
                        onChange={(e) => handleChange(e)}
                        disabled={isDisabled}
                      >
                        <option value="" data-select2-id="3">
                          Select{" "}
                        </option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                      <label>standard</label>
                      <select
                        className="select3 select2-hidden-accessible"
                        data-select2-id="1"
                        tabIndex="-1"
                        aria-hidden="true"
                        value={standard}
                      >
                        <option value="" data-select2-id="3">
                          Select
                        </option>
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                        <option value="6">6 </option>
                        <option value="7">7 </option>
                        <option value="8">8 </option>
                        <option value="9">9 </option>
                        <option value="10">10 </option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                      <label>Section</label>
                      <select
                        className="select3 select2-hidden-accessible"
                        data-select2-id="1"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="3">
                          Select
                        </option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C </option>
                        <option value="D">D</option>
                        <option value="E">D</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="col-10 form-group"
                  style={{ paddingTop: "50px" }}
                >
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-10 form-group">
                  <label>Recipient</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="recipient"
                    id="recipient"
                    name="recipient"
                    value={recipient}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-10 form-group">
                  <label>Message</label>
                  <textarea
                    className="textarea form-control"
                    cols="10"
                    rows="9"
                    placeholder="type a message"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
                <div className="col-12 form-group mg-t-8">
                  <button
                    type="submit"
                    className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    style={{ marginLeft: "356px" }}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
