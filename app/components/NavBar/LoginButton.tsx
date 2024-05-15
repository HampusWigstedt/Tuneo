'use client';
import React from 'react';
import { authorizeSpotify } from '../../utils/auth';

const LoginButton = () => {


  return (
    <button onClick={authorizeSpotify}>Login with Spotify</button>
  );
};

export default LoginButton;
