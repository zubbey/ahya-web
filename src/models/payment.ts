export default interface Payment {
  amount: number;
  type: "transfer" | "cash";
  note: string;
  createdAt: number;
}
