import React, { useState } from "react";
import Screen from "../components/Screen";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { inRange } from "../utils/validators";

// TODO Q4
const TwoFactorAuthScreen = () => {
  const [code,setCode]=useState('')

  const isValid=inRange(code,7,7)
  return (
    <Screen>
      <form>
        <Title>Enter verification code</Title>
        <Subtitle>
          A text message with a 7-digit code has been sent to your mobile phone
          number
        </Subtitle>
        <TextInput
          label="Code"
          role="textbox"
          name="textbox"
          value={code}
          onChange={(e)=>setCode(e.target.value)}
          placeholder="Enter the 7-digit code"
         maxLength={7}

        />
        <Button
          type="primary"
          name="Submit"
          value="Submit"
          disabled={!isValid}
        />
      </form>
    </Screen>
  );
};

export default TwoFactorAuthScreen;
