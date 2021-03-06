// @flow

export function dashCase<T>(str: T): T {
  return typeof str === 'string'
    ? str.split(/([_A-Z])/).reduce((one, two, idx) => {
        const dash = !one || idx % 2 === 0 ? '' : '-';
        two = two === '_' ? '' : two;
        return `${one}${dash}${two.toLowerCase()}`;
      })
    : str;
}

export const empty = (val: any): boolean => val == null;

export function keys(obj: Object | void): Array<any> {
  obj = obj || {};
  const names = Object.getOwnPropertyNames(obj);
  return Object.getOwnPropertySymbols
    ? names.concat(Object.getOwnPropertySymbols(obj))
    : names;
}
