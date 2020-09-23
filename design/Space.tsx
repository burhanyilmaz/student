import React from 'react';
import {View} from 'react-native';

interface ISpace {
  value: number;
}

const Space = ({value}: ISpace) => {
  return <View style={{width: 0, height: 0, marginTop: value}} />;
};

export default Space;
