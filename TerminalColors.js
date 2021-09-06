import colors from "colors";

// **==========================================================================
// **        Colors theme for terminal (add some life to the terminal)
// **==========================================================================
colors.setTheme({
  input: ["brightMagenta", "bgBlack", "bold"],
  info: ["brightWhite", "bgBlack", "bold"],
  help: ["brightCyan", "bgBlack", "bold"],
  debug: ["brightBlue", "bgBlack", "bold"],
  warn: ["brightYellow", "bgBlack", "bold"],
  error: ["brightRed", "bgBlack", "bold"],
  success: ["brightGreen", "bgBlack", "bold"],
});
