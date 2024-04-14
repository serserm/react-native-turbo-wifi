import { TurboWifi } from './TurboWifi';

export function multiply(a: number, b: number): Promise<number> {
  return TurboWifi.multiply(a, b);
}
