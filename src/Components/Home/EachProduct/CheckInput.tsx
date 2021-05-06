import React from "react";
import '../SCSS/checkInput.style.scss';

export default function CheckInput(props: {
  volume: {
    volumeValue : string,
    isChecked : boolean,
    unit : string,
    coefficient : number
 }[];
  handleInputsChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    indexItems : number
  ) => void;
  indexItems: number;
}) {
  const {
    volume,
    handleInputsChange,
    indexItems,
  } = props;
  return (
    <div>
      <div className="input-volum-container">
        {volume?.map((v , index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={v.isChecked}
              className="checkbox-custom"
              value={v.coefficient}
              name={v.volumeValue}
              id="firstVolum"
              onChange={(e) => handleInputsChange(e, index , indexItems)}
            />
            <span className="volum-qty">
              {v.volumeValue} {v.unit}
            </span>
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
    </div>
  );
}
