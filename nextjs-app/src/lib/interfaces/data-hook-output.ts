/**
 * Output of the data hook
 */
export interface IDataHookOutput<T> {
  data: T;
  error: unknown,
  isLoading: boolean;
  isEmpty: boolean;
}