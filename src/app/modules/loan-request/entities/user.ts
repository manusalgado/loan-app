export type UserPayload = Readonly<{
  name: string;
  email: string;
  id: string;
  amountRequest?: number;
  payDate?: string;
  creditStatus?: string;
  payCredit?: boolean;
  document: number;
}>;
