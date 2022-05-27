import React, { useState } from 'react';
import { View } from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styled from 'styled-components';

import { normVert } from '@theme';
import { Input, TopPanel } from '@ui';

export const ScheduleInputs = () => {
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [currentType, setCurrentType] = useState<string>();

  const showDatePicker = (type: string) => () => {
    setDatePickerVisibility(true);
    setCurrentType(type);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    currentType === 'start' &&
      setStartDate(
        `${date.getHours()}:${('0' + date.getMinutes()).substr(-2)}`,
      );
    currentType === 'end' &&
      setEndDate(`${date.getHours()}:${('0' + date.getMinutes()).substr(-2)}`);
    hideDatePicker();
  };

  return (
    <Container>
      <TopPanel title={'Schedule'} />
      <InputsContainer>
        <Input
          onPressIn={showDatePicker('start')}
          width={'48%'}
          placeholder={'Start'}
          value={startDate}
        />
        <Input
          onPressIn={showDatePicker('end')}
          width={'48%'}
          placeholder={'End'}
          value={endDate}
        />
      </InputsContainer>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
};

const InputsContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled(View)`
  margin-bottom: ${normVert(16)}px;
`;
