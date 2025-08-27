import React, { useEffect, useState } from 'react';
import Screen from '../components/Screen';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { inRange } from '../utils/validators';

// TODO Q4
const TwoFactorAuthScreen = () => {
  const [isValid, setIsValid] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setIsValid(text.trim().length && inRange(text, 7, 7));
  }, [text]);

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
          placeholder="Enter the 7-digit code"
          onChange={(e) => setText(e.target.value)}
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
