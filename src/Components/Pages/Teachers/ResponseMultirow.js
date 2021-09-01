import React from "react";

const ResponseMultirow = (props) => {
  return props.taskList.map((val, idx) => {
    let subjectName = `subjectName-${idx}`,
      standardName = `standardName-${idx}`,
      gradeName = `gradeName-${idx}`,
      timings = `timings-${idx}`;
      
    return (
      <tr key={val.index}>
        <td>
          {/* <input type="text"  name="projectName" data-id={idx} id={projectName} className="form-control " /> */}
          <div
            className="col-xl-3 col-lg-6 col-12 form-group"
            data-select2-id="12"
          >
            <select
              className="select2"
              name="subjectName"
              data-id={idx}
              id={subjectName}
            >
              <option value="" data-select2-id="">
                Select
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
          </div>
        </td>
        <td>
          {/* <input type="text"  name="task" id={task} data-id={idx} className="form-control " /> */}
          <div className="col-xl-3 col-lg-6 col-12 form-group">
            <select
              className="select2"
              name="standardName"
              id={standardName}
              data-id={idx}
            >
              <option value="" data-select2-id="12">
                Select
              </option>
              <option value="1">Play</option>
              <option value="2">Nursery</option>
              <option value="3">One</option>
              <option value="3">Two</option>
              <option value="3">Three</option>
              <option value="3">Four</option>
              <option value="3">Five</option>
            </select>
          </div>
        </td>
        <td>
          {/* <textarea  name="taskNotes" id={taskNotes} data-id={idx} className="form-control"></textarea> */}
          <div className="col-xl-3 col-lg-6 col-12 form-group">
            <select
              className="select2"
              name="gradeName"
              id={gradeName}
              data-id={idx}
            >
              <option value="" data-select2-id="12">
                Select{" "}
              </option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
              <option value="3">D</option>
              <option value="3">E</option>
            </select>
          </div>
        </td>
        <td>
          <input
            type="text"
            name="timings"
            data-id={idx}
            id={timings}
            className="form-control "
          />
        </td>
        <td>
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
          )}
        </td>
      </tr>
    );
  });
};
export default ResponseMultirow;
