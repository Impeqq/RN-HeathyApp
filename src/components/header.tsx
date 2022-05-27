import React from 'react';
import { Image as ImageRN, TouchableOpacity, View } from 'react-native';

import styled from 'styled-components';

import { LKImage } from '@assets';
import { colors, normHor, normVert } from '@theme';
import { Text } from '@ui';

import { FontSize, FontWeight } from '~types';

type TProps = {
  name?: string;
  onPress?: () => void;
};

export const Header = ({ name, onPress }: TProps) => {
  return (
    <Container>
      <Burger onPress={onPress}>
        <Line />
        <Line />
        <Line />
      </Burger>

      {name && (
        <Text
          weight={FontWeight.Bold}
          fontSize={FontSize.S20}
          color={colors.black}
        >
          {name}
        </Text>
      )}

      <Image source={LKImage} />
    </Container>
  );
};

const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Burger = styled(TouchableOpacity)`
  width: ${normHor(36)}px;
  height: ${normVert(36)}px;
  background-color: ${colors.grey3};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const Line = styled(View)`
  width: ${normHor(12)}px;
  height: ${normVert(2)}px;
  background-color: ${colors.black};
  border-radius: 12px;
  margin-vertical: ${normVert(1.5)}px;
`;

const Image = styled(ImageRN)`
  width: ${normHor(36)}px;
  height: ${normVert(36)}px;
  background-color: ${colors.blue2};
  border-radius: 12px;
`;
