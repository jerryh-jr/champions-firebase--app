import React from "react";

function Endorsement(props) {
    return (
            <div className={"container flow bg-white text-dark ff-inter endorsement-container radius"}>
                <h3 className={"fs-200"}>To: {props.toText}</h3>
                <p className={"fs-200"}>{props.mainText}</p>
                <h3 className={"fs-200"}>From: {props.fromText}</h3>
            </div>
    )
}

export default Endorsement;