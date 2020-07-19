
interface opt {
  key: string,
  salt: string,
  isNeedUrlEncode: boolean,
}

class initRes {
  key: string;
  salt: string;
  isNeedUrlEncode: boolean;
  encrypt: (data: object, dataOptions = [], options = []) => string | boolean;
  decrypt: (string: string) => object | boolean;
}

export class easyJwt extends initRes {
  constructor(key: string, salt: string, isNeedUrlEncode: boolean): initRes;
}

export function encrypt(opt: opt, data: object, dataOptions = [], options = []): string | boolean {}
export function decrypt(opt: opt, string: string): object | boolean {}
