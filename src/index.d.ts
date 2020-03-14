declare module 'provoke-array' {
  export default function provokeArray<T extends object>(count: number, item: ((index: number) => T) | T): T[];
}