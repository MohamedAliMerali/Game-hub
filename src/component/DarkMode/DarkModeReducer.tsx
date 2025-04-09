export interface DarkModeAction {
  type: "TOGGGLE";
}

// PS: annotate the func to detect potential errors when returning a value
const counterReducer = (darkMode: boolean, action: DarkModeAction): boolean => {
  const newMode = !darkMode;
  localStorage.setItem("darkMode", newMode.toString());
  console.log(">> Dark Mode changed, newMode:", newMode);
  if (action.type === "TOGGGLE") {
    return !darkMode;
  }
  return darkMode;
};

export default counterReducer;
