import { FC, useState } from "react";
import "./Contact.scss";
// import { LabeledInputProps } from "../../components/LabeledInput/LabeledInput.types";
import { Icon } from "../../components";

type FormBody = {
  name: string;
  affiliation: string;
  subject: string;
  message: string;
};

export const Contact: FC = () => {
  const DEFAULT_FORM_VALUES: FormBody = {
    name: "",
    subject: "",
    message: "",
    affiliation: "",
  };

  const [formValues, setFormValues] = useState<FormBody>(DEFAULT_FORM_VALUES);
  const [showSubmitButton, setShowSubmitButton] = useState<boolean>(false);

  const changeFormValues = (input: Partial<FormBody>, defaultFormValues: FormBody = formValues) => {
    setFormValues({ ...defaultFormValues, ...input });
  };

  return (
    // <SideTitlePage
    //   pageId="contact"
    //   pageTitle="Contact"
    //   classNames="contact-page-container"
    //   containerClassNames="contact-form-container"
    // >
    <section className="contact-page">
      <section className="contact-container">
        <h1 className="contact-title">
          Connect With Me
          <hr style={{ padding: 0, margin: 0, lineHeight: 0, width: "50%", justifySelf: "end" }} />
        </h1>
        <section className="contact-body">
          <section></section>
        </section>
      </section>
    </section>
    /* <form className="contact-form">
        <section className="input-container">
          <LabeledInput
            cssStyles={{ marginRight: "59px" }}
            inputLabelName={"Name"}
            onInputChange={(e) => changeFormValues({ name: e.target.value })}
          />
          <LabeledInput
            inputLabelName={"Affiliation / Company"}
            onInputChange={(e) => changeFormValues({ affiliation: e.target.value })}
          />
        </section>
        <LabeledInput
          cssStyles={{ margin: "50px 0 0" }}
          inputLabelName={"Subject"}
          onInputChange={(e) => changeFormValues({ subject: e.target.value })}
        />
        <div className="textarea-container">
          <LabeledInput
            cssStyles={{ margin: "50px 0 0" }}
            inputLabelName={"Message"}
            inputType="textarea"
            labelIcon={
              <button
                className={`form-submit-btn ${showSubmitButton ? "show-submit-button" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  // window.location that opens mail client
                  window.location.href = `
              mailto:jaybdev25@gmail.com?body=${formValues.message}&subject=${encodeURI(formValues.subject ?? "")}${encodeURI(` | ` + formValues.name ?? "")}${encodeURI(` from ` + formValues.affiliation ?? "")}`;
                }}
              >
                <div className="inner-button-body">
                  Send Email
                  <Icon classNames="submit-arrow" iconElement="SUBMIT_ARROW" />
                </div>
              </button>
            }
            classNames="textarea-box"
            onInputChange={(e) => {
              changeFormValues({ message: e.target.value });
              if (e.target.value) {
                setShowSubmitButton(true);
              } else {
                setShowSubmitButton(false);
              }
            }}
          />
        </div>
      </form> 
    /* </SideTitlePage> */
  );
};

