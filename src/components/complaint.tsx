import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components';

import { normVert } from '@theme';
import { Textarea, TopPanel } from '@ui';

export const Complaint = () => {
  return (
    <Container>
      <TopPanel title={'Your Complaint'} />
      <Textarea />
    </Container>
  );
};

const Container = styled(View)`
  margin-bottom: ${normVert(28)}px;
`;
