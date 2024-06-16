export type CallbackFn = (start: number, end: number) => void;

export interface CommonProps {
  children: JSX.Element[];
  offsetKey: string;
}
