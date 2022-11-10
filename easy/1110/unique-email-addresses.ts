function numUniqueEmails(emails: string[]): number {
  const sets: Set<string> = new Set<string>();
  emails.forEach((email) => {
    const parts: string[] = email.split('@');
    const newEmail: string = parts[0].split('+')[0].split('.').join('') + '@' + parts[1];
    sets.add(newEmail);
  });
  return sets.size;
}

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ]),
);
console.log(numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']));
