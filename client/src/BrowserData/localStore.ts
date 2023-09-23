function getDataFromLocalStore<T>(name: string): T | null {
  if (!name) return null;

  try {
    const storedValue = localStorage.getItem(name);
    if (storedValue !== null) {
      // Parse the stored JSON data and return it
      return JSON.parse(storedValue) as T; // Cast to the desired type T
    }
  } catch (error) {
    console.error("Error while getting data from local storage:", error);
  }

  return null;
}

function setDataToLocalStore<T>(name: string, value: any): void {
  if (!name) return;

  try {
    const valueToStore =
      typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(name, valueToStore);
  } catch (error) {
    console.error("Error while setting data to local storage:", error);
  }
}

function removeDataFromLocalStore(name: string): void {
  if (!name) return;

  try {
    // Remove the item from local storage
    localStorage.removeItem(name);
  } catch (error) {
    console.error("Error while removing data from local storage:", error);
  }
}

function clearDataLocalStore(): void {
  try {
    // Clear all items from local storage
    localStorage.clear();
  } catch (error) {
    console.error("Error while clearing local storage:", error);
  }
}

function getUserDataFromLocalStoreProm<T>(name: string): Promise<T | null> {
  return new Promise((resolve, reject) => {
    if (!name) {
      resolve(null);
      return;
    }

    try {
      const storedValue = localStorage.getItem(name);
      if (storedValue !== null) {
        resolve(JSON.parse(storedValue) as T); // Resolve with the desired type T
      } else {
        resolve(null); // Resolve with null if the item is not found
      }
    } catch (error) {
      console.error("Error while getting data from local storage:", error);
      reject(error); // Reject the promise if there's an error
    }
  });
}

export {
  getDataFromLocalStore,
  setDataToLocalStore,
  removeDataFromLocalStore,
  clearDataLocalStore,
  getUserDataFromLocalStoreProm,
};
