import React from 'react';
import { View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import { services } from '@data';
import { colors, normHor, normVert } from '@theme';
import { Text, TopPanel } from '@ui';

import { FontSize, FontWeight } from '~types';

export const ServicesList = () => {
  return (
    <View style={{ marginBottom: normVert(20) }}>
      <TopPanel
        title={'Our Service'}
        buttonText={'View all'}
        onPress={() => console.log('view all')}
      />
      <ServicesListContainer>
        {services.map(service => {
          const Icon = service.icon;

          return (
            <Service key={service.id}>
              <ServiceIcon>
                <Icon />
              </ServiceIcon>
              <Text
                weight={FontWeight.Semibold}
                fontSize={FontSize.S12}
                color={colors.grey}
                textStyle={styles.serviceName}
              >
                {service.name}
              </Text>
            </Service>
          );
        })}
      </ServicesListContainer>
    </View>
  );
};
const styles = {
  serviceName: {
    marginTop: normVert(12),
  },
};

const ServicesListContainer = styled(View)`
  justify-content: space-between;
  flex-direction: row;
`;

const Service = styled(TouchableOpacity)`
  align-items: center;
`;

const ServiceIcon = styled(View)`
  background-color: ${colors.white};
  padding-horizontal: ${normHor(20)}px;
  padding-vertical: ${normVert(20)}px;
  box-shadow: 0px 4px 20px rgba(131, 131, 131, 0.1);
  border-radius: 16px;
`;
