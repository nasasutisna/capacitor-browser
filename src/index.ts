import { registerPlugin } from '@capacitor/core';

import type { BrowserPlugin } from './definitions';

const browser = registerPlugin<BrowserPlugin>('browser', {
  web: () => import('./web').then(m => new m.BrowserWeb()),
});

export * from './definitions';
export { browser };
