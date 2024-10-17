// Function to save state to localStorage
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("cart", serializedState);
    } catch (err) {
      console.error("Could not save state", err);
    }
  };
  
  // Function to load state from localStorage
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("cart");
      if (serializedState === null) {
        return undefined; // If no saved state, return undefined
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Could not load state", err);
      return undefined;
    }
  };
  