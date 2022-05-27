import React from 'react';
import { View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import { packages } from '@data';
import { colors, normHor, normVert } from '@theme';
import { Text, TopPanel } from '@ui';

import { FontSize, FontWeight } from '~types';

export const PackagesList = () => {
  return (
    <View>
      <TopPanel
        title={'Our Package'}
        buttonText={'View all'}
        onPress={() => console.log('view all')}
      />
      <PackagesListContainer>
        {packages.map(item => {
          const Icon = item.icon;

          return (
            <Package key={item.id}>
              <PackageIcon>
                <Icon />
              </PackageIcon>
              <PackageTextContainer>
                <Text
                  weight={FontWeight.Semibold}
                  fontSize={FontSize.S14}
                  color={colors.black}
                  textStyle={styles.packageName}
                >
                  {item.name}
                </Text>
                <Text
                  weight={FontWeight.Semibold}
                  fontSize={FontSize.S12}
                  color={colors.grey}
                >
                  {item.doctor}
                </Text>
              </PackageTextContainer>
            </Package>
          );
        })}
      </PackagesListContainer>
    </View>
  );
};
const styles = {
  packageName: {
    marginBottom: normVert(8),
    marginTop: normVert(16),
  },
};

const PackageTextContainer = styled(View)`
  justify-content: space-between;
  align-self: flex-start;
`;

const PackagesListContainer = styled(View)`
  justify-content: space-between;
  flex-direction: row;
`;

const Package = styled(TouchableOpacity)`
  align-items: center;
  box-shadow: 0px 4px 20px rgba(131, 131, 131, 0.1);
  background-color: ${colors.white};
  padding-horizontal: ${normHor(20)}px;
  padding-vertical: ${normVert(20)}px;
  border-radius: 16px;
  width: ${normHor(160)}px;
`;

const PackageIcon = styled(View)`
  background-color: ${colors.blue2};
  border-radius: 16px;
  overflow: hidden;
`;
