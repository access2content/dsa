function letterCasePermutation(s: string): string[] {
  const output: string[] = [];

  const dfs = (index: number, path: string) => {
    if (index === s.length) {
      output.push(path);
      return;
    }

    if (/[a-zA-Z]/.test(s[index])) {
      dfs(index + 1, path + s[index].toLowerCase());
      dfs(index + 1, path + s[index].toUpperCase());
    } else {
      dfs(index + 1, path + s[index]);
    }
  };

  dfs(0, "");

  return output;
}
