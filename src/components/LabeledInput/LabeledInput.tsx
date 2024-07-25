import { FC, useState } from "react";
import { LabeledInputProps } from "./LabeledInput.types";
import "./LabeledInput.scss";

export const LabeledInput: FC<LabeledInputProps> = ({
  inputType = "text",
  inputLabelName,
  labelIcon,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onInputChange = (): void => {},
  placeholder,
  classNames,
  cssStyles,
}) => {
  const [activeInput, setActiveInput] = useState<boolean>();

  return (
    <div
      className={`form-input-container ${activeInput ? "active-input-container" : ""} ${classNames ?? ""}`}
      onMouseEnter={() => {
        setActiveInput(true);
      }}
      onMouseLeave={() => {
        setActiveInput(false);
      }}
      style={cssStyles ?? {}}
    >
      <div className="label-container">
        <label className="form-label" htmlFor={`${inputLabelName.toLocaleLowerCase()}`}>
          {inputLabelName}
        </label>
        {labelIcon && <>{labelIcon}</>}
      </div>
      <div className="input-container">
        {inputType === "textarea" ? (
          <textarea
            name={inputLabelName.toLocaleLowerCase()}
            id={inputLabelName.toLocaleLowerCase()}
            onChange={(e) => onInputChange(e)}
            className={"form-textarea"}
            placeholder={placeholder}
            cols={220}
            rows={15}
          />
        ) : (
          <input
            id={inputLabelName.toLocaleLowerCase()}
            className={`form-input`}
            placeholder={placeholder}
            onChange={(e) => onInputChange(e)}
            type={inputType}
          />
        )}
      </div>
    </div>
  );
};

