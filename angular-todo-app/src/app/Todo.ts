export interface Todo {
  // Not Initialized With ID till we save to json server
  id?: number; // id? (optional)
  text: string;
  important: boolean;
}
