import * as yup from "yup";
import LocaleKeys from "../../locales";

// **==========================================================================
// **                    Posts request validation schema
// **==========================================================================
const tags = yup
  .string()
  .trim()
  .required(LocaleKeys.REQUIRED_TAGS)
  .matches(/^[a-zA-Z0-9][,a-zA-Z0-9]*.[a-zA-Z0-9]$/, LocaleKeys.INVALID_TAGS);

const sortBy = yup
  .string()
  .trim()
  .oneOf(["id", "reads", "likes", "popularity"], LocaleKeys.INVALID_SORT);

const direction = yup
  .string()
  .trim()
  .oneOf(["asc", "desc"], LocaleKeys.INVALID_DIRECTION);

export const params = yup.object().shape({ tags, sortBy, direction });
