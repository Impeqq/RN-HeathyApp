import React from 'react';
import { TextStyle } from 'react-native';

import Svg, { Path } from 'react-native-svg';

type TProps = {
  style: TextStyle;
};

export const MagnifIcon = ({ style }: TProps) => {
  return (
    <Svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.97 19.19C6.43 19.19 2.75 15.51 2.75 10.97C2.75 6.43 6.43 2.75 10.97 2.75C15.51 2.75 19.19 6.43 19.19 10.97C19.19 15.51 15.51 19.19 10.97 19.19Z"
        stroke="#BABABA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.25 21.25L17.14 17.14"
        stroke="#BABABA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
