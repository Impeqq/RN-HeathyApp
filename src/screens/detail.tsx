import React from 'react';
import { View } from 'react-native';

import { Doctor2 } from 'src/assets/icons';
import { ScheduleInputs } from 'src/components/schedule-inputs';
import styled from 'styled-components';

import { Complaint, DateBlock, DoctorCard, Header } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { colors, normVert } from '@theme';
import { Button, Layout, Text } from '@ui';

import { FontSize, FontWeight, RootStackParamList } from '~types';

export const DetailScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList>) => {
  return (
    <Layout>
      <Header onPress={() => navigation.goBack()} name={'Apointment'} />
      <Container>
        <DoctorCard
          title={'Dr. Yumi Nickerson'}
          description={'Dentist at White Hospital'}
          doctorIcon={Doctor2}
          address={'Po Box 5071 San Marcos'}
        />
        <DateBlock />
        <ScheduleInputs />
        <Complaint />
        <CardButton onPress={() => navigation.goBack()}>
          <Text
            weight={FontWeight.Bold}
            fontSize={FontSize.S16}
            color={colors.white}
          >
            Next
          </Text>
        </CardButton>
      </Container>
    </Layout>
  );
};

const CardButton = styled(Button)`
  padding-vertical: ${normVert(18)}px;
  background-color: ${colors.blue};
`;

const Container = styled(View)`
  margin-top: ${normVert(52)}px;
`;
