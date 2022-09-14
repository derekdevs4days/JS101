function shortLongShort(str1, str2) {
  const s1Length = str1.length;
  const s2Length = str2.length;
  return s1Length < s2Length ? `${str1}${str2}${str1}` : `${str2}${str1}${str2}`;
}