import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export enum Type {
  default = 'default',
  numberPad = 'number-pad',
  decimalPad = 'decimal-pad',
  numeric = 'numeric',
  emailAddress = 'email-address',
  phonePad = 'phone-pad',
}

interface InputProps {
  style?: any;
  placeholder?: string;
  value?: string;
  touched?: any;
  errors?: any;
  name?: string;
  keyboardType?: Type;
  label?: string;
  rightIcon?: any;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
  inputStyle?: object;
}

export const BaseInput: FC<InputProps> = ({
  style,
  value,
  placeholder,
  onChangeText,
  touched,
  errors,
  name,
  keyboardType,
  label,
  secureTextEntry,
  rightIcon,
  multiline,
  numberOfLines,
  inputStyle,
  ...props
}) => {
  return (
    <View style={{marginBottom: 12}}>
      <View style={[styles.inputContainer, style]} {...props}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={[{width: '95%'}, inputStyle]}
        />
        {rightIcon}
      </View>
      {touched && errors && <Text style={styles.errorMessage}>{errors}</Text>}
    </View>
  );
};

export const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 48,
    width: '100%',
    // backgroundColor: 'rgba(48, 48, 48, 0.3)',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    // marginTop: 3,
  },
});
