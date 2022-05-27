import React from 'react';
import { Image, StyleProp, View, ViewStyle } from 'react-native';

import { AddressIcon } from 'src/assets/icons/address';
import styled from 'styled-components';

import { CardImage } from '@assets';
import { colors, normHor, normVert } from '@theme';
import { Button, Text } from '@ui';

import { FontSize, FontWeight } from '~types';

type TProps = {
  doctorIcon: () => JSX.Element;
  onPress?: () => void;
  title: string;
  description?: string;
  address?: string;
};

export const DoctorCard = ({
  doctorIcon,
  onPress,
  title,
  description,
  address,
}: TProps) => {
  return (
    <CardContainer>
      <Background source={CardImage} />
      <View>
        <Text
          weight={FontWeight.Bold}
          fontSize={FontSize.S20}
          color={colors.black}
          textStyle={styles.title}
        >
          {title}
        </Text>
        {description && (
          <Text
            weight={FontWeight.Medium}
            fontSize={FontSize.S14}
            color={colors.grey2}
          >
            {description}
          </Text>
        )}
      </View>
      {onPress && (
        <CardButton onPress={onPress}>
          <Text
            weight={FontWeight.Bold}
            fontSize={FontSize.S12}
            color={colors.white}
          >
            Registration
          </Text>
        </CardButton>
      )}
      {address && (
        <View style={styles.icon as StyleProp<ViewStyle>}>
          <AddressIcon />
          <Text
            textStyle={styles.address}
            fontSize={FontSize.S14}
            color={colors.blue}
          >
            {address}
          </Text>
        </View>
      )}
      <CardIcon>{doctorIcon()}</CardIcon>
    </CardContainer>
  );
};

const styles = {
  title: {
    width: normHor(200),
    lineHeight: normVert(28),
  },
  icon: { flexDirection: 'row' },
  address: { marginLeft: 5 },
};

const CardButton = styled(Button)`
  width: ${normHor(95)}px;
  background-color: ${colors.blue};
`;

const CardIcon = styled(View)`
  position: absolute;
  right: ${normHor(30)}px;
  bottom: 0;
`;

const CardContainer = styled(View)`
  padding-vertical: ${normVert(12)}px;
  padding-horizontal: ${normHor(12)}px;
  height: ${normVert(150)}px;
  width: ${normHor(360)}px;
  justify-content: space-between;
`;

const Background = styled(Image)`
  position: absolute;
  height: ${normVert(150)}px;
  width: 100%;
  border-radius: 16px;
`;
