import React from "react";

function Header(props) {
    return (
        <div className={"flow flow header-container"} style={{ "--flow-space": "0.75rem" }}>
            <img
                src={"champ-img.png"}
                alt={"Man holding up a microphone into the air."}
            />
            <h1 className={"fs-500 ff-joesfin"}>
                We are the Champions!
            </h1>
            <textarea
                className={"bg-light radius border text-white main-text"}
                type={"textarea"}
                placeholder={"Some text here!"}
                id={"main-text-el"}
                value={props.mainValue}
                onChange={props.handleChanges}
                name={"mainValue"}
                required
            ></textarea>
            <div className={"flex justify-center"}>
                <input
                    className={"bg-light radius border text-field text-white"}
                    type={"text"}
                    placeholder={"From"}
                    id={"from-text-el"}
                    value={props.fromValue}
                    onChange={props.handleChanges}
                    name={"fromValue"}
                ></input>
                <input
                    className={"bg-light radius border text-field text-white"}
                    type={"text"}
                    placeholder={"To"}
                    id={"to-text-el"}
                    value={props.toValue}
                    onChange={props.handleChanges}
                    name={"toValue"}
                ></input>
            </div>
            <button
                className={"publish-btn"}
                id={"publish-btn"}
                onClick={props.handleClick}>
                Publish!
            </button>
            <h2 className={"text-white ff-joesfin fs-500"}>- Endorsements -</h2>
        </div>
    )
}

export default Header;