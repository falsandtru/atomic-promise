import { AtomicPromise } from '../../index';

describe('Interface: Package', function () {
  describe('global', function () {
    it('global', function () {
      assert(global['AtomicPromise'] !== AtomicPromise);
    });
  });

  describe('AtomicPromise', function () {
    it('AtomicPromise', function () {
      assert(typeof AtomicPromise === 'function');
    });
  });

});
