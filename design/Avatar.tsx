import React from 'react';
import {Image} from 'react-native';

interface IRoundedAvatar {
  uri: string;
  size: number;
}

const Avatar = ({uri, size}: IRoundedAvatar) => {
  return (
    <Image
      source={{uri}}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
    />
  );
};

export default Avatar;
