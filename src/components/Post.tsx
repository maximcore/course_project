import { StringMappingType } from "typescript";

export class Post {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  postId: number;

  constructor(
    theName: string,
    theDescription: string,
    theImageUrl: string,
    theImageAlt: string,
    thePostId: number
  ) {
    this.name = theName;
    this.description = theDescription;
    this.imageUrl = theImageUrl;
    this.imageAlt = theImageAlt;
    this.postId = thePostId;
  }
}

export default Post;
