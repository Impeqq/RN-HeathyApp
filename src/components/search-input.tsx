import React from 'react';
import { TextInput, View } from 'react-native';

import { MagnifIcon } from 'src/assets/icons';
import styled from 'styled-components';

import { normVert } from '@theme';
import { Input } from '@ui';

export const SearchInput = () => {
  return (
    <SearchContainer>
      <Input
        placeholder={'Search'}
        leftIcon={<MagnifIcon style={{ marginRight: 10 }} />}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled(View)`
  margin-vertical: ${normVert(20)}px;
`;
