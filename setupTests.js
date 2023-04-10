const mockData = [
    {
      fileName: 'test5.csv',
      text: 'foo',
      number: 555,
      hex: '#ABCDEFG',
    },
    {
      fileName: 'test6.csv',
      text: 'bar',
      number: 666,
      hex: '#0123456',
    },
  ];

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: {data: mockData }})),
}));

jest.mock('./src/providers', () => ({
    get: jest.fn(() => Promise.resolve({ data: {data: mockData }})),
}));
  
  
