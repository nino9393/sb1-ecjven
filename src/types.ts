export interface Document {
  id: string;
  title: string;
  series: string;
  language: 'ar' | 'en';
  path: string;
}

export interface UserSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  language: 'ar' | 'en';
  series: string;
  documents: Document[];
  timestamp: string;
}

export interface CartItem extends Document {
  quantity: number;
}