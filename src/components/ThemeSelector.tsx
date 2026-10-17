'use client';

import { useId, useSyncExternalStore } from 'react';
import styles from './showroom.module.css';

type Theme = 'system' | 'light' | 'dark';
const themeKey = 'po-book-theme';
const themeEvent = 'po-book-theme-change';

function readTheme(): Theme {
  const value = document.documentElement.dataset.theme;
  return value === 'light' || value === 'dark' ? value : 'system';
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== themeKey && event.key !== null) return;
    if (event.newValue === 'light' || event.newValue === 'dark') document.documentElement.dataset.theme = event.newValue;
    else delete document.documentElement.dataset.theme;
    callback();
  };
  window.addEventListener('storage', onStorage);
  window.addEventListener(themeEvent, callback);
  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(themeEvent, callback);
  };
}

function setTheme(theme: Theme) {
  if (theme === 'system') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = theme;
  try {
    if (theme === 'system') localStorage.removeItem(themeKey);
    else localStorage.setItem(themeKey, theme);
  } catch {
    // The current page still supports theme changes when browser storage is disabled.
  }
  window.dispatchEvent(new Event(themeEvent));
}

export default function ThemeSelector() {
  const id = useId();
  const theme = useSyncExternalStore(subscribe, readTheme, () => 'system');
  return (
    <div className={styles.themeControl}>
      <label htmlFor={id}>Appearance</label>
      <select id={id} value={theme} onChange={(event) => setTheme(event.target.value as Theme)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
