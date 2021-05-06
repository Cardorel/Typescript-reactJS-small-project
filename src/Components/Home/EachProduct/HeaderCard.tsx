import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale , faCheck } from '@fortawesome/free-solid-svg-icons'


type headerDataType = {
  isNew: boolean;
  image: string;
  productName: string;
  isUserBought : boolean;
}

export default function HeaderCard(
  props: headerDataType
) {
  const {image , isNew , productName , isUserBought} = props;
  return (
    <div className="card-header">
      {isNew ? <h3 className="isNew">New</h3> : <span></span>}
      <div className="image-card">
        <div className="image-content">
          <img src={image} alt={productName} />
        </div>
      </div>
      <div>
        {
          !isUserBought? <FontAwesomeIcon className="icon-style" icon={faBalanceScale} /> : <FontAwesomeIcon className="icon-style" icon={faCheck} />
        }
      </div>
    </div>
  );
}
