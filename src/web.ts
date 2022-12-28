import { WebPlugin } from '@capacitor/core';

import type { browserPlugin } from './definitions';

export class browserWeb extends WebPlugin implements browserPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
