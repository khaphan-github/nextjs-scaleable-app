export interface ApiUpsertHook<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  isSuccess: boolean;
  summit: (data?: T) => Promise<void>;
}
