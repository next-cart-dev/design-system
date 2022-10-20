import { StylesConfig } from "react-select"

import { lightTheme } from "../../tokens"

const colors = lightTheme.theme.colors

export const SelectStyled: StylesConfig = {
  control: (styles) => ({
    ...styles,
    borderRadius: "4px",
    borderColor: colors.primary500,
    height: "48px"
  }),
  container: (styles) => ({ ...styles, borderRadius: "4px", width: "100%" }),
  dropdownIndicator: (styles) => ({
    ...styles,
    background: colors.primary500,
    borderRadius: "0 2px 2px 0",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 10px",
    alignItems: "center"
  }),
  indicatorSeparator: () => ({ display: "none" }),
  clearIndicator: (styles) => ({
    ...styles,
    padding: "2px"
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    background: isFocused ? colors.primary400 : colors.neutral500,
    color: colors.text500
  }),
  menu: (styles) => ({ ...styles, background: colors.neutral500 }),
  multiValueRemove: (styles) => ({
    ...styles,
    "&:hover": { background: colors.primary500, color: colors.text200 }
  })
}

export const MobileSelectStyled: StylesConfig = {
  control: (styles) => ({
    ...styles,
    borderRadius: "4px",
    borderColor: colors.secondary500,
    height: "32px"
  }),
  container: (styles) => ({ ...styles, borderRadius: "4px", width: "100%" }),
  dropdownIndicator: (styles) => ({
    ...styles,
    background: colors.secondary500,
    borderRadius: "0 2px 2px 0",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 6px",
    alignItems: "center"
  }),
  indicatorSeparator: () => ({ display: "none" }),
  clearIndicator: (styles) => ({
    ...styles,
    padding: "2px"
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    background: isFocused ? colors.primary400 : colors.neutral500,
    color: colors.text500
  }),
  menu: (styles) => ({ ...styles, background: colors.neutral500 }),
  multiValueRemove: (styles) => ({
    ...styles,
    "&:hover": { background: colors.secondary500, color: colors.text200 }
  })
}
