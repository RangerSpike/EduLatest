import React from "react";

const MultiRowRes = (props) => {
  return props.formVals.map((val, idx) => {
    let subject = `subject-${idx}`,
      IAmarks = `IAmarks-${idx}`,
      extMarks = `extMarks-${idx}`;

    let isChecked = props.getChecked;

    return (
      <tr role="row" className="odd " key={val.index}>
        <td>
          <select
            className="select2 "
            data-select2-id="1"
            tabindex="-1"
            aria-hidden="true"
            name="subject"
            data-id={idx}
            id={subject}
          >
            <option value="" data-select2-id="3">
              Select{" "}
            </option>
            <option value="1" data-select2-id="20">
              English
            </option>
            <option value="2" data-select2-id="21">
              Urdu
            </option>
            <option value="3" data-select2-id="22">
              Hindi
            </option>
            <option value="3" data-select2-id="22">
              Sanskirit
            </option>
            <option value="3" data-select2-id="22">
              History
            </option>
          </select>
        </td>

        <td>
          <input
            type="text"
            placeholder="Marks ..."
            className="form-control"
            style={{ width: "200px", marginLeft: "140px" }}
            name="IAmarks"
            data-id={idx}
            id={IAmarks}
            disabled={isChecked}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Marks ..."
            className="form-control"
            style={{ width: "200px", marginLeft: "140px" }}
            name="extMarks"
            data-id={idx}
            id={extMarks}
          />
        </td>
        <td>
          {idx === 0 ? (
            console.log("123")
          ) : (
            <button
              className="btn btn-danger "
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          )}
        </td>
        <td>
          <button className="btn btn-success " onClick={()=>props.saveValues(val)}>
            <i className="fa fa-save" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  });
};
export default MultiRowRes;
