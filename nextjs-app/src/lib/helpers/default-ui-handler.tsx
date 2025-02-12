/* eslint-disable @typescript-eslint/no-explicit-any */
import EmptyData from "../ui/default-empty-data";
import ErrorFetch from "../ui/default-error-fetch";
import DefaultLoading from "../ui/default-loading";

export default function DefaultUILoadingHandler(isLoading: boolean, isEmpty: boolean, error: any) {

  if (isLoading) {
    return <DefaultLoading></DefaultLoading>;
  }

  if (isEmpty) {
    return <EmptyData></EmptyData>;
  }

  if (error) {
    return <ErrorFetch></ErrorFetch>;
  }

  return null;
}