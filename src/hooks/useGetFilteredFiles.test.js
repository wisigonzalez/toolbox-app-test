/* eslint-disable jest/no-mocks-import */

import { waitFor} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useGetFilteredFiles } from './useGetFilteredFiles';

const mockData = [
    {
      fileName: 'test5.csv',
      text: 'foo1',
      number: 777,
      hex: '#ABCDEFGH',
    },
    {
      fileName: 'test5.csv',
      text: 'bar1',
      number: 888,
      hex: '#01234567',
    },
  ];

  jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: {data: mockData }})),
  }));

  jest.mock('../providers', () => ({
    get: jest.fn(() => Promise.resolve({ data: {data: mockData }})),
  }));


describe('useGetFilteredFiles hook', () => {
  it('should fetch filtered files data', async () => { // Agregar async aquí
    const {result, waitForNextUpdate} = renderHook(() => useGetFilteredFiles('test5.csv'));

    await waitForNextUpdate();

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
    });
  });

  it('should not fetch files data if fileName is not allowed', async () => { // Agregar async aquí
    const { result } = renderHook(() => useGetFilteredFiles('test'));

    expect(result.current.data).toEqual([]);
  });
});
