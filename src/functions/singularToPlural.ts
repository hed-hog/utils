export function singularToPlural(word: string): string {
  const pluralRules = new Intl.PluralRules('en', { type: 'cardinal' });
  const pluralRule = pluralRules.select(2);

  if (pluralRule === 'one') {
    return word;
  }

  return word + 's';
}
