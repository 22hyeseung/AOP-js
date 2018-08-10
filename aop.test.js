import Aop from './aop';

describe('Aop', () => {
  describe('Aop.around(fnName, advice, targetObj)', () => {
    test('타깃 함수 호출 시 어드바이스를 실행한다.', () => {
      const targetObj = {
        targetFn: () => {},
      };

      let executedAdvice = false;
      const advice = function() {
        executedAdvice = true;
      };

      Aop.around('targetFn', advice, targetObj);

      targetObj.targetFn();
      expect(executeAdvice).toBe(true);
    });
  });
});
