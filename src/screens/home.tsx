import React from 'react';
import { View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { Doctor1 } from 'src/assets/icons';
import styled from 'styled-components';

import {
  DoctorCard,
  Header,
  PackagesList,
  SearchInput,
  ServicesList,
} from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { colors, normVert } from '@theme';
import { Layout, Text } from '@ui';

import { FontSize, FontWeight, RootStackParamList } from '~types';

export const HomeScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList>) => {
  return (
    <Layout>
      <Header />
      <Container>
        <Text
          weight={FontWeight.Bold}
          fontSize={FontSize.S20}
          color={colors.black}
        >
          Hello Maxim !
        </Text>
        <Text
          weight={FontWeight.Medium}
          fontSize={FontSize.S14}
          color={colors.grey}
          textStyle={styles.description}
        >
          How are you feeling today ?
        </Text>
        <DoctorCard
          title={'Periodic general Health check'}
          onPress={() => navigation.push('DetailScreen')}
          doctorIcon={Doctor1}
        />
        <SearchInput />
        <ScrollView>
          <ServicesList />
          <PackagesList />
        </ScrollView>
      </Container>
    </Layout>
  );
};

const styles = {
  description: { marginTop: normVert(6), marginBottom: normVert(18) },
};

const Container = styled(View)`
  margin-top: ${normVert(16)}px;
`;
