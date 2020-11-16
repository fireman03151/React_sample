export default function borderColorPicker(isDonating, isTopContributor) {
  if (isDonating && isTopContributor) return 'purple-border';
  else if (isTopContributor) return 'blue-border';
  else if (isDonating) return 'gold-border';
  else return 'default-border';
}
