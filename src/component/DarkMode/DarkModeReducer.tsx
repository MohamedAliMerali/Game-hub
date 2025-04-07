export interface DarkModeAction {
  type: "TOGGGLE";
}

// ///////////////////////////////////////////////////
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  setDarkMode(isDarkMode);
}, []);

const toggleDarkMode = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  localStorage.setItem("darkMode", newMode.toString());
  console.log(">> Dark Mode changed, newMode:", newMode);
};

// ///////////////////////////////////////////////////

// PS: annotate the func to detect potential errors when returning a value
const counterReducer = (darkMode: boolean, action: Action): boolean => {
  if (action.type === "TOGGGLE") return !darkMode;
  return darkMode;
};

export default counterReducer;
