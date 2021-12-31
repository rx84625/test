const customError = require("./../../src/libs/Error.js");

describe('cria objeto Error', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.resetAllMocks();

  });

  it('cria Error', () => {    
      error = customError("Error", "testMethod", 500, {message: 'error DB'})
      expect(error.message).toBe('Error');
      expect(error.method).toBe('testMethod');
      expect(error.statusCode).toBe(500);
      expect(error.original.message).toBe('error DB');
  });

});
