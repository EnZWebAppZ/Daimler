export interface SalesQuery {
  queryId: string;
  queryLabel: string;
}

export interface Detail {
  name: string;
  description: string;
  receivedTime: Date;
  salesQuery: SalesQuery[];
}

export interface Notification {
  _id: string;
  index: number;
  guid: string;
  details: Detail[];
}