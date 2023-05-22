export interface Criteria {
  categoryId:   string;
  categoryName: string;
  action:       boolean;
  items:        Item[];
}

export interface Item {
  id:              string;
  subject:         string;
  qty:             number;
  unit:            string;
  isComplete:      boolean;
  isFix:           boolean;
  isActive:        boolean;
  isTarget:        boolean;
  createdDate:     Date;
  updatedDate:     null;
  categoryId:      string;
  categoryName:    string;
  categoryOrderId: number;
}
