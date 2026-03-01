import { createLogger, format, transports, Logger } from "winston";

const { combine, timestamp, label, printf, colorize } = format;

// Define log format
const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} : ${level}: ${message}`;
});

// Create logger instance
const logger: Logger = createLogger({
  level: "info",
  format: combine(
    label({ label: "API" }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    customFormat
  ),
  transports: [
    new transports.Console({
      format: combine(colorize(), customFormat),
    }),
    new transports.File({
      filename: "logs/error.log",
      level: "error",
      format: customFormat,
    }),
    new transports.File({
      filename: "logs/combined.log",
      format: customFormat,
    }),
  ],
});

export default logger;
