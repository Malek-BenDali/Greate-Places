import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants';

const CustomHeaderButoon = props => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={colors.white}
  />
);
export default CustomHeaderButoon;
