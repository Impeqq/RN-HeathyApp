import React from 'react';
import { SafeAreaView, View } from 'react-native';

import styled from 'styled-components';

import { normHor } from '@theme';

export const Layout = ({ children }: any) => {
  return (
    <SafeAreaView>
      <Container>{children}</Container>
    </SafeAreaView>
  );
};

const Container = styled(View)`
  padding-horizontal: ${normHor(20)}px;
`;
