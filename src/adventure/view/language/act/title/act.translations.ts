const actTranslations: Record<string, string> = {
  act1: 'Akt 1',
  act2: 'Akt 2',
  act3: 'Akt 3',
  act4: 'Akt 4',
  act5: 'Akt 5',
};

export function getActTranslation(value: string) {
  return actTranslations[value] || 'Akt ?';
}
