import { IPostResponse } from "../hook/use-get-list-post";

export class PostModel {
  id: number = -1;
  title: string = '';
  content: string = '';

  /**
   * Map model form api
   * @param args 
   * @returns 
   */
  fromJson(args: IPostResponse) {
    this.id = args.id;
    this.title = args.title;
    this.content = args.body;
    return this;
  }

  /**
   * Mao model from form
   * @param args 
   * @returns 
   */
  fromForm(args: { title: string, content: string }) {
    this.title = args.title;
    this.content = args.content;
    return this;
  }
}