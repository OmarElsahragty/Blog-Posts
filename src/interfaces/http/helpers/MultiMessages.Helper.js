import LocaleKeys from "../../../app/locales";

// **==========================================================================
// **                       Multi messages concatenation
// **==========================================================================
export default (messages, req) =>
  messages.map((msg) => req.t(msg)).join(` ${req.t(LocaleKeys.AND)} `);
