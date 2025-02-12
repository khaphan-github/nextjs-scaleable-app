/**
 * Output of the data hook
 */
export interface IAPIFetchingHook<T> {
  data: T;
  error: unknown,
  isLoading: boolean;
  isEmpty: boolean;
}