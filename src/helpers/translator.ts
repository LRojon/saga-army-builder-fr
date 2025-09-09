import translations from "../data/translations.json";
import { UnitDetails, Unit } from "../ArmyUnitTypes";

type TranslatedUnit = UnitDetails<Unit> & {
  displayUnit?: string;
  displayEquipmentOptions?: string;
  displaySpecialRules?: string;
};

type Translation = keyof typeof translations;

function test(key: Translation): string {
    return translations[key] as string;
}

export function t(key: Translation): string {
  if (!key) return "";
  return (translations as any)[key] ?? key;
}

/*export function translateEquipmentOptions(equipmentOptions: string): string {
  if (!equipmentOptions) return "";
  const parts = equipmentOptions
    .split(/[-_ ]|(?=[A-Z])|(?<=\d)(?=[A-Za-z])/) // split camelCase, spaces, underscores
    .map((p) => p.trim())
    .filter(Boolean);

  return parts.map((p) => t(p)).join(" ");
}

export function translateSpecialRules(rules: string[] = []): string {
  return rules.map((r) => t(r)).join(", ");
}

export function translateUnitForDisplay(unit: UnitDetails<Unit>): TranslatedUnit {
  return {
    ...unit,
    displayUnit: t(unit.unit),
    displayEquipmentOptions: translateEquipmentOptions(unit.equipmentOptions),
    displaySpecialRules: translateSpecialRules(unit.specialRules || []),
  };
}*/

export default { t, /*translateEquipmentOptions, translateSpecialRules, translateUnitForDisplay*/ };
