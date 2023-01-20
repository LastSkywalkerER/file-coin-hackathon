export const units = {
  quarter: 2,
  half: 4,
  single: 8,
  double: 16,
  quadruple: 32,
  eight: 64,
}

export type UnitsList = typeof units & { [key: string]: number }
