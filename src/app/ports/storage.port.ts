import {InjectionToken} from '@angular/core';

export const STORAGE_PORT = new InjectionToken<StoragePort>('STORAGE_PORT');

export interface StoragePort {
  getItem(key: string): string | null;

  setItem(key: string, value: string): void;
}
