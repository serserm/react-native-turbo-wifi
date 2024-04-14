import { NativeModules } from 'react-native';

import { LINKING_ERROR } from './errors';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const TurboWifiModule = isTurboModuleEnabled
  ? require('./NativeTurboWifi').default
  : NativeModules.TurboWifi;

export const TurboWifi = TurboWifiModule
  ? TurboWifiModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );
