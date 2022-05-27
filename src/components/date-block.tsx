import React, { useState } from 'react';
import { View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import { colors, normHor, normVert } from '@theme';
import { Text, TopPanel } from '@ui';

import { FontSize, FontWeight } from '~types';

const DATES = [
  { id: 1, number: 18, mounth: 'Jan', current: false },
  { id: 2, number: 19, mounth: 'Jan', current: false },
  { id: 3, number: 20, mounth: 'Jan', current: true },
  { id: 4, number: 21, mounth: 'Jan', current: false },
  { id: 5, number: 22, mounth: 'Jan', current: false },
  { id: 6, number: 23, mounth: 'Jan', current: false },
];

export const DateBlock = () => {
  const [data, setData] = useState(DATES);

  const handlePress = (id: number) => () => {
    setData(list => {
      const arr = list.map(item => ({
        ...item,
        current: (item.current = false),
      }));
      arr[id - 1].current = true;

      return arr;
    });
  };
  return (
    <Container>
      <TopPanel
        title={'Date'}
        buttonText={'Other'}
        onPress={() => console.log('view all')}
      />
      <DateList>
        {data.map(item => (
          <DateItem
            key={item.id}
            color={item.current ? colors.blue : colors.white3}
            onPress={handlePress(item.id)}
          >
            <Text
              fontSize={FontSize.S14}
              weight={FontWeight.Bold}
              color={item.current ? colors.white : colors.grey}
            >
              {item.number}
            </Text>
            <Text
              fontSize={FontSize.S14}
              weight={FontWeight.Medium}
              color={item.current ? colors.white : colors.grey}
            >
              {item.mounth}
            </Text>
          </DateItem>
        ))}
      </DateList>
    </Container>
  );
};

const DateItem = styled(TouchableOpacity)<{ color: string }>`
  justify-content: space-between;
  background-color: ${p => p.color};
  width: ${normHor(44)}px;
  height: ${normVert(56)}px;
  padding-vertical: ${normVert(8)}px;
  align-items: center;
  border-radius: 12px;
`;

const DateList = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled(View)`
  margin-top: ${normVert(28)}px;
  margin-bottom: ${normVert(16)}px;
`;
