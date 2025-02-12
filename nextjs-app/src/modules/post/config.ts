/**
 * Config environment api
 */
export const ENDPOINT = process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_DOMAIN;
export const APIs = {
  GET_LIST_POST: ENDPOINT + '/posts',
  CREATE_POST: ENDPOINT + '/posts',
}