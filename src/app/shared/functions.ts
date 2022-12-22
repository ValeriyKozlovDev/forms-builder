export function deepClone(str: string | null): string {
  return JSON.parse(JSON.stringify(str))
}
