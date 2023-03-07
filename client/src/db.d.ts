export type DbId = number;

export interface User {
  id: DbId;
  name: string;
  email: string;
  email_verified_at?: string;
  role: "USER" | "ADMIN";
  password: string;
  remember_token: string;
}

export interface Tag {
  id: DbId;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: DbId;
  title: string;
  content: string;
  thumbnailUrl: string;
  mediaType?: string;
  mediaUrl?: string;
  viewCount: number;
  leadStory: boolean;
  created_at: string;
  updated_at: string;
}
