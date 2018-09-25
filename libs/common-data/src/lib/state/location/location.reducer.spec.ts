import { locationReducer, initialState } from './location.reducer';

describe('Location Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = locationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
