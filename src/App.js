import Endorsement from './Endorsement';
import Header from './Header';
import { initializeApp } from'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import React, {useEffect, useState} from "react";

function App() {

    const appSettings = {
        databaseURL: "https://champions-project-e52d7-default-rtdb.firebaseio.com/"
    }
    const app = initializeApp(appSettings);
    const database = getDatabase(app);
    const endorsementsListInDB = ref(database, "endorsements");

    const [ endorsementEl, setEndorsementEl ] = useState([]);
    const [inputValue, setInputValue ] = useState({
        mainValue: "",
        fromValue: "",
        toValue: ""
    })

    const handleInputChange = (e) => {
        setInputValue(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    function clearState() {
        setInputValue({
            mainValue: "",
            fromValue: "",
            toValue: "",
        })
    }
    function handleSubmit() {
        if (inputValue.mainValue !== "") {
            push(endorsementsListInDB, inputValue);
            clearState();
        } else {
            console.log("alert");
        }
    }

    useEffect(() => {
        onValue(endorsementsListInDB, (snapshot) => {
            if (snapshot.exists()) {
                const valuesArray = Object.entries(snapshot.val());
                const endorsements = valuesArray.map((value) => (
                    <Endorsement
                        key={value[0]}
                        id={value[0]}
                        mainText={value[1].mainValue}
                        fromText={value[1].fromValue}
                        toText={value[1].toValue}
                    />
                ));
                setEndorsementEl(endorsements);
            }
        });
    });

  return (
    <div className="App">
        <div className={"container flow"}>
            <Header
                mainValue={inputValue.mainValue}
                fromValue={inputValue.fromValue}
                toValue={inputValue.toValue}
                handleChanges={handleInputChange}
                handleClick={handleSubmit}
            />
            {endorsementEl}
        </div>
    </div>
  );
}

export default App;
