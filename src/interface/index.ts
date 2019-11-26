interface base {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Iinfo extends base {
  title: string;
  desc?: string;
}