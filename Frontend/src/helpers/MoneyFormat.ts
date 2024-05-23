export function DHFormat(money: any) {
  const MoroccoDH = Intl.NumberFormat("fr-Morocco", {
    style: "currency",
    currency: "MAD",
  });
  return MoroccoDH.format(money);
}

export function TotalPercentage(value: number, total: number): number {
  if (total === 0) {
      return 0; // Avoid division by zero
  }
  
  const percentage = (value / total) * 100;
  return Math.round(percentage * 100) / 100;
}
