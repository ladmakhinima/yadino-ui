export interface File {
  name: string;
  mimetype: string;
  size: number;
  type: FileType;
}

export enum FileType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}
