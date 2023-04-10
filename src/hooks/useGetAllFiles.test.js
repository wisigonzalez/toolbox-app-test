/* eslint-disable jest/no-mocks-import */

import { waitFor} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useGetAllFiles } from './useGetAllFiles';

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

describe('useGetAllFiles hook', () => {
  it('should fetch files data', async () => { // Agregar async aquí
    const {result, waitForNextUpdate} = renderHook(() => useGetAllFiles(''));

    await waitForNextUpdate();

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
    });
  });

  it('should not fetch files data if fileName is defined', async () => { // Agregar async aquí
    const {result} = renderHook(() => useGetAllFiles('test'));

    expect(result.current.data).toEqual([]);
  });
});
