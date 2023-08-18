import React from 'react';
import {useFormikContext} from 'formik';

import AppTextinput from '../AppTextinput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({name, width, ...otherProps}) => {
  const {handleChange, setFieldTouched, touched, errors, handleBlur} =
    useFormikContext();
  return (
    <>
      <AppTextinput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        // onBlur={() => setFieldTouched(name)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
