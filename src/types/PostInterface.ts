export interface IPost {
  category: string;
  date: string;
  avatar: string;
  login: string;
  title: string;
  text: string;
  loggedIn: boolean;
  visibility: string;
  like: number;
  heart: number;
  comments: IComment[]
}

export interface IComment {
  text: string;
  avatar: string;
  date: string;
}

