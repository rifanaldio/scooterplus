import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  // Default: light. If localStorage has a value, use it. Otherwise, follow system.
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = prefersDark ? 'dark' : 'light';
  window.localStorage.setItem('theme', initial);
  return initial;
};

const initialState = {
  menuOpen: false,
  theme: getInitialTheme()
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme', state.theme);
      }
    },
    setTheme: (state, action) => {
      state.theme = action.payload === 'dark' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme', state.theme);
      }
    }
  }
});

export const { toggleMenu, closeMenu, toggleTheme, setTheme } = uiSlice.actions;
export default uiSlice.reducer;

