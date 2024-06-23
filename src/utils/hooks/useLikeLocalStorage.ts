const encode = (data: string): object => JSON.parse(data);
const decode = (data: object): string => JSON.stringify(data);

export function setLocalLocalStorageData<T extends object>(
  key: string,
  data: T
): void {
  localStorage.setItem(key, decode(data));
}

export function getLocalStorageData<T extends object>(key: string): T {
  const item: string | null = localStorage.getItem(key);
  if (item !== null) {
    return encode(item) as T;
  }
  return {} as T;
}
