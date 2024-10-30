export function pluralToSingular(word: string): string {
  const pluralRules = new Intl.PluralRules('en', { type: 'cardinal' });
  const pluralRule = pluralRules.select(1);

  if (pluralRule === 'one') {
    return word;
  }

  return word.slice(0, -1);
}
