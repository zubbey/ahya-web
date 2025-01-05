import Payment from "./payment";
import Point from "./point";

export default interface User {
  userName: string;
  avatar: string;
  firstName: string;
  lastName: string;
  point: number; //total point collected
  paymentHistory: Payment[]; // history of payment withdrawal
  pointHistory: Point[]; // history of points received
  status: string; // "active" | "inactive" | "suspended"
  createdAt: string;
}
