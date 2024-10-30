export function singularToPlural(word: string): string {
  if (word.endsWith('y')) {
    return word.slice(0, -1) + 'ies';
  } else if (word.endsWith('s') && !word.endsWith('ss')) {
    return word + 'es';
  }

  if (word === 'child') {
    return 'children';
  } else if (word === 'person') {
    return 'people';
  } else if (word === '') {
    // handle empty string case if needed
  }

  return word + 's';
}
