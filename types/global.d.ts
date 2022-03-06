export = global;

declare global {
  interface Window {}
}

export interface ObjectType {
  [key: string]: any;
}
