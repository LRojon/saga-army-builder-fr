import translations from "../data/translations.json";
import { UnitDetails, Unit } from "../ArmyUnitTypes";

type TranslatedUnit = UnitDetails<Unit> & {
  displayUnit?: string;
  displayEquipmentOptions?: string;
  displaySpecialRules?: string;
};

export type Translation = keyof typeof translations;

export function t(key: Translation): string {
  if (!key) return "";
  return (translations as any)[key] ?? key;
}

export default { t };
