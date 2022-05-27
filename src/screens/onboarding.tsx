import React, { useState } from 'react';
import { Dimensions, TextStyle, View, ViewProps } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { OnboardIcon } from 'src/assets/icons';
import styled from 'styled-components';

import { colors, normHor, normVert } from '@theme';
import { Button, Layout, Text } from '@ui';

import { FontSize, FontWeight } from '~types';

type TProps = {
  handleOnboarded: () => void;
};

const entries = [1, 2, 3];

const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

export const OnboardingScreen = ({ handleOnboarded }: TProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselReference, setCarouselReference] = useState<any>();

  const renderItem = (): React.ReactElement => (
    <Item>
      <OnboardIcon />
      <Text
        weight={FontWeight.Bold}
        fontSize={FontSize.S28}
        color={colors.blue}
        textStyle={{ ...styles.text, ...styles.margin } as TextStyle}
      >
        Discover Top Doctors
      </Text>
      <Text
        weight={FontWeight.Medium}
        fontSize={FontSize.S14}
        color={colors.black}
        textStyle={styles.text as TextStyle}
      >
        A team of professional doctors from many hospitals help you have the
        best healthcare experience wherever you are.
      </Text>
    </Item>
  );

  const isLastSlide = activeSlide === entries.length - 1;

  const slideToNext = (): void =>
    isLastSlide ? handleOnboarded() : carouselReference.snapToNext();

  return (
    <Layout>
      <View style={styles.flex as ViewProps}>
        <Text
          weight={FontWeight.Bold}
          fontSize={FontSize.S20}
          color={colors.blue}
        >
          HEATHY APP
        </Text>
        <TouchableOpacity onPress={handleOnboarded}>
          <Text
            weight={FontWeight.Bold}
            fontSize={FontSize.S16}
            color={colors.grey}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      <Carousel
        ref={setCarouselReference}
        data={entries}
        renderItem={renderItem}
        onSnapToItem={setActiveSlide}
        removeClippedSubviews={true}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        sliderHeight={sliderHeight}
        itemHeight={sliderHeight}
      />
      {carouselReference && (
        <Pagination
          carouselRef={carouselReference}
          dotsLength={entries.length}
          activeDotIndex={activeSlide}
          tappableDots
          dotStyle={dotStyle}
          containerStyle={{ marginVertical: normVert(20) }}
          inactiveDotStyle={inactiveDotStyle}
          inactiveDotScale={1}
          inactiveDotOpacity={1}
        />
      )}
      <NextButton onPress={slideToNext}>
        <Text
          weight={FontWeight.Bold}
          fontSize={FontSize.S16}
          color={colors.white}
        >
          {isLastSlide ? 'Start' : 'Next'}
        </Text>
      </NextButton>
    </Layout>
  );
};

const styles = {
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normVert(30),
    marginBottom: normVert(90),
  },
  text: {
    lineHeight: normVert(24),
    textAlign: 'center',
    marginTop: normVert(8),
    width: normHor(275),
  },
  margin: { marginTop: normVert(40) },
};

const inactiveDotStyle = {
  backgroundColor: colors.grey,
};

const dotStyle = {
  width: normHor(6),
  height: normHor(6),
  borderRadius: 10,
  marginHorizontal: normHor(-5),
  backgroundColor: colors.blue,
};

const Item = styled(View)`
  align-self: center;
  width: ${normHor(310)}px;
`;

const NextButton = styled(Button)`
  width: ${normHor(155)}px;
  align-self: center;
  background-color: ${colors.blue};
  padding-vertical: ${normVert(18)}px;
`;
