import assert from 'power-assert';
import { AtomicPromise } from 'spica/promise';

type Assert = typeof assert;

declare global {
  const assert: Assert;
  interface Window {
    AtomicPromise: typeof AtomicPromise;
  }
}
