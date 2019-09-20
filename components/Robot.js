import React from 'react';
import {Image} from 'react-native';
const Robot = () => {
  const robotImage = require('./images/robot.jpg');

  return (
    <Image source={robotImage} style={{width: 300, height: 300}} />
  );
};

export default Robot;
