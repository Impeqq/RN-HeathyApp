import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { normVert } from '@theme';

import styled from 'styled-components';

type TProps = {
  children: React.ReactNode;
} & TouchableOpacityProps;

export const Button = ({ children, ...props }: TProps) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

const ButtonStyled = styled(TouchableOpacity)`
  background: #000;
  flex-direction: row;
  justify-content: center;
  padding-vertical: ${normVert(10)}px;
  border-radius: 8px;
`;
