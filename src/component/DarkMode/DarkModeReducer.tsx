export interface DarkModeAction {
  type: "TOGGGLE";
}

const counterReducer = (darkMode: boolean, action: DarkModeAction): boolean => {
  if (action.type === "TOGGGLE") {
    const newMode = !darkMode;
    localStorage.setItem("darkMode", newMode.toString());
    console.log(">> Dark Mode changed, New Mode:", newMode);
    return newMode;
  }
  return darkMode;
};

export default counterReducer;
