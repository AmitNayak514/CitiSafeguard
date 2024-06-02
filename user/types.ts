export interface Laws {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  sections: string;
  firstOffenseFine: number | null;
  fine: number;
  imprisonment: string | null;
  applicableTo: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
