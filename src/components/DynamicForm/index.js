import React, { useState } from "react";
import "./DyanamicForm.css";
const DyanamicForm = (props) => {
  const [formData, setFormData] = useState({});
  const onSubMitForm = (e) => {
    e.preventDefault();
    if (props.onSubmit) props.onSubmit(formData);
  };
  const handleChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };
  const displayForm = () => {
    let dataModel = props.dataModel;

    let formUI = dataModel.map((data) => {
      let key = data.key;
      let type = data.type;
      let props = data.props || {};
      return (
        <div key={key}>
          <label className="label" key={"l" + data.key} htmlFor={data.key}>
            {" "}
            {data.label}
          </label>
          <input
            {...props}
            useref={data.key}
            type={type}
            key={"i" + data.key}
            onChange={(e) => {
              handleChange(e, key);
            }}
          />
        </div>
      );
    });
    return formUI;
  };
  return (
    <div className="form-holder">
      <form
        onSubmit={(e) => {
          onSubMitForm(e);
        }}
      >
        {displayForm()}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DyanamicForm;
