import { createLogger, format as winstonFormat, transports } from "winston";

// **==========================================================================
// **                             Errors Logger
// **==========================================================================
const format = winstonFormat.combine(
  winstonFormat.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
  winstonFormat.printf(
    (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
  )
);

export default createLogger({
  transports: [
    new transports.File({
      level: "error",
      filename: "logs/errors.log",
      format,
    }),
  ],
});
