function capitalizeTitle(title: string): string {
  const words: string[] = title.split(' ');
  return words
    .map((s) => {
      if (s.length <= 2) {
        return s.toLowerCase();
      }

      return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
    })
    .join(' ');
}
