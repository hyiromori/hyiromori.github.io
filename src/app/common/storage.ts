const { localStorage } = window;

class Storage {
  static get = (key: string): (string | null) => (localStorage.getItem(key));
  static set = (key: string, value: string): void => (localStorage.setItem(key, value));
  static remove = (key: string): void => (localStorage.removeItem(key));
};

export { Storage };