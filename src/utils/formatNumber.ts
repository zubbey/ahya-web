import { replace } from "lodash";
import numeral from "numeral";
import "numeral/locales/pt-br";
// ----------------------------------------------------------------------

export function fCurrency(number: number): string {
  const amount = `₦${numeral(number).format(!number ? "0,0.00" : "0,0[.]00")}`;

  return amount;
}

export function fPercent(amount: number, percent: number): number {
  return numeral((amount * percent) / 100).value() || 0;
}

export function unitCalculator(amount: number, unit: number): number {
  return numeral(amount * unit).value() || 0;
}

export function fNumber(number: string): number {
  return numeral(number).value() || 0;
}

export function fNumberToString(number: number): string {
  return numeral(number).format();
}

export function fShortenNumber(number: number): string {
  return replace(numeral(number).format("0.00a"), ".00", "");
}

export function fData(number: number): string {
  return numeral(number).format("0.0 b");
}

export function dCalculator(number: number): Date {
  const now = new Date();
  const dueDate = new Date(now);
  dueDate.setDate(now.getDate() + number);

  return dueDate;
}

export function sumArray(arr: number[]): number {
  const total = arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return total;
}
