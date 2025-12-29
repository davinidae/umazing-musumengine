import { describe, expect, test } from 'vitest';
import { ApiResponse, getErrorMessage } from '../../../../src/api/utils/api.util';

describe('api.util', () => {
  test('ApiResponse.execute serializes JSON and merges headers', () => {
    const res = new ApiResponse(
      201,
      { ok: true, n: 1 },
      {
        'X-Test': '1',
      },
      undefined,
    );

    const out = res.execute();
    expect(out.statusCode).toEqual(201);
    expect(out.headers['Content-Type']).toEqual('application/json');
    expect(out.headers['X-Test']).toEqual('1');
    expect(out.cookies).toEqual([]);
    expect(out.body).toEqual(JSON.stringify({ ok: true, n: 1 }));
  });

  test('getErrorMessage extracts message from Error and other values', () => {
    expect(getErrorMessage(new Error('boom'))).toEqual('boom');
    expect(getErrorMessage({ message: 'nope' })).toEqual('nope');
    expect(getErrorMessage('x')).toEqual('x');
    expect(getErrorMessage(123)).toEqual('123');
    expect(getErrorMessage(null)).toEqual('null');
  });
});
