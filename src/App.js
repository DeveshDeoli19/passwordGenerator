import { useState } from "react";
import React from "react";
import { numberss, lowercases, uppercases, symbolss } from "./Character";

function App() {
  const [password, setPassword] = useState("");

  const [passwordLength, setPasswordLength] = useState(26);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [numbers, setNumbers] = useState(false);

  const generatePassword = () => {
    if (!uppercase && !numbers && !symbols && !lowercase) {
      alert("To generate password select atleast one checkbox");
    } else {
      let characterList = "";

      if (numbers) characterList += numberss;
      if (uppercase) characterList += uppercases;
      if (lowercase) characterList += lowercases;
      if (symbols) characterList += symbolss;

      if(passwordLength < 8) alert("Password length must be greater or equal to 8")
      else{
      setPassword(createPassword(characterList))
    }
    }
  };

  const createPassword = (characterList) => {
    let password = "";

    const charLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.round(Math.random() * charLength);
     console.log(charIndex)
      password = password + characterList.charAt(charIndex);
    }
    return password;
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <h2>{password}</h2>
      <label>Enter length</label>
      <input
        type="number"
        defaultValue={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
        id="passwordLength"
        max="26"
        min="8"
      ></input>

      <br />
      <label>Include Uppercase</label>
      <input
        type="checkbox"
        checked={uppercase}
        onChange={(e) => setUppercase(e.target.checked)}
        id="uppercase"
        name="uppercase"
      ></input>

      <br />
      <label>Include lowercase</label>
      <input
        type="checkbox"
        checked={lowercase}
        onChange={(e) => setLowercase(e.target.checked)}
        id="lowercase"
        name="lowercase"
      ></input>

      <br />
      <label>Include numbers</label>
      <input
        type="checkbox"
        checked={numbers}
        onChange={(e) => setNumbers(e.target.checked)}
        id="numbers"
        name="numbers"
      ></input>

      <br />
      <label>Include Symbols</label>
      <input
        type="checkbox"
        checked={symbols}
        onChange={(e) => setSymbols(e.target.checked)}
        id="symbols"
        name="symbols"
      ></input>

      <br />

      <button onClick={generatePassword}>Generate password</button>
      
    </div>
  );
}

export default App;
