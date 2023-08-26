export function getFirstRecordValue<T>(
  object: Record<string, T>
): T | undefined {
  const firstKey = Object.keys(object).at(0);
  if (firstKey) {
    return object[firstKey];
  } else {
    return undefined;
  }
}

export function getRecordValues<T>(object: Record<string, T>): T[] {
  return Object.keys(object).map((key) => object[key]);
}

export function formatNumber(number: number): string {
  return number.toLocaleString("en-US");
}
