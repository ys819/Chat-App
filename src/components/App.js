import React, { useState } from 'react';
import SignIn from './signIn';

export default () => {
  const [name, setName] = useState('');
  console.log({name});

  return <SignIn setName={setName} />;
};
