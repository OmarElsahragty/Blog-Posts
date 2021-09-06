import LocaleKeys from "../../../app/locales";

// **==========================================================================
// **                          Server Error (500)
// **==========================================================================
export default (error) => {
  return {
    statusCode: 500,
    error,
    message: LocaleKeys.SERVER_ERROR,
  };
};
