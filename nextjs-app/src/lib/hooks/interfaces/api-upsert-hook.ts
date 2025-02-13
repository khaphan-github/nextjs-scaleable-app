export interface ApiUpsertHook<T> {
  data: T | null;
  error: string | object | null;
  isLoading: boolean;
  isSuccess: boolean;
  summit: (data?: T) => Promise<void>;
}
