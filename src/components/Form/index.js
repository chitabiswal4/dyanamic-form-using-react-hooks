import { useState } from "react";
import DynamicForm from "../DynamicForm";

const Form = () => {
  const [data, setData] = useState();
  var onSubmit = (dataModel) => {
    setData(JSON.stringify(dataModel));
  };
  return (
    <div className="App">
      <DynamicForm
        className="form"
        title="Registration"
        dataModel={[
          { key: "name", label: "Full Name", props: { required: true } },
          {
            key: "age",
            label: "Age",
            type: "number",
            props: { required: true },
          },
          {
            key: "email",
            label: "Email Address",
            type: "email",
            props: { required: true },
          },
          {
            key: "message",
            label: "Enter a Message",
            props: { required: true },
          },
        ]}
        onSubmit={(dataModel) => {
          onSubmit(dataModel);
        }}
      />
      <div class="results">
        <h2>Form Data</h2>
        <pre>{data}</pre>
      </div>
    </div>
  );
};

export default Form;
