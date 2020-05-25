export type UserPayload = Readonly<{
  name: string;
  email: string;
  id: string;
  amountRequest?: number;
  payDate?: string;
  creditStatus?: boolean;
  payCredit?: boolean;
  document: number;
}>;
