import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onBlur={() => setFieldTouched("password")}
        onChangeText={handleChange("password")}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />

      <ErrorMessage error={errors.password} visible={touched.password} />
    </>
  );
}

export default AppFormField;
