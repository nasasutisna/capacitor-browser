import { registerPlugin } from '@capacitor/core';

import type { browserPlugin } from './definitions';

const browser = registerPlugin<browserPlugin>('browser', {
  web: () => import('./web').then(m => new m.browserWeb()),
});

export * from './definitions';
export { browser };
