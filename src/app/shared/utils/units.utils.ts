import { Units } from '../models/units.enum';

export function unitToSymbol(unit: Units): string {
  switch (unit) {
    case Units.Metric:
      return '˚C';
    case Units.Imperial:
      return '˚F';
    case Units.SI:
      return 'K';
  }
}
