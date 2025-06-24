import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  // Sadece dark mode state'i tutuluyor
  private _darkTheme = signal<boolean>(false);

  // Dışarıdan erişim için computed getter
  isDarkTheme = computed(() => this._darkTheme());

  constructor() {
    // State değiştiğinde DOM class'ı güncelleniyor
    effect(() => {
      this.toggleDarkMode(this._darkTheme());
    });
  }

  // Dark mode'u aç/kapat
  setDarkTheme(isDark: boolean) {
    this._darkTheme.set(isDark);
  }

  // DOM class'ını güncelle
  private toggleDarkMode(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('app-dark');
    } else {
      document.documentElement.classList.remove('app-dark');
    }
  }
}
