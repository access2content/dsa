function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  const setList = new Set(wordList);

  let transformations = -1;
  const queue: string[] = [beginWord];

  while (queue.length) {
    const currentLength = queue.length;
    transformations += 1;

    for (let i = 0; i < currentLength; i += 1) {
      const currentWord = queue.shift()!;
      if (currentWord === endWord) {
        return transformations + 1;
      }

      for (const candidate of getCandidates(currentWord)) {
        if (setList.has(candidate)) {
          setList.delete(candidate);
          queue.push(candidate);
        }
      }
    }
  }

  return 0;
}

const getCandidates = (word: string): string[] => {
  const candidates: string[] = [];

  for (let i = 0; i < word.length; i += 1) {
    for (let j = 0; j < 26; j += 1) {
      candidates.push(
        word.substring(0, i) +
          String.fromCharCode("a".charCodeAt(0) + j) +
          word.substring(i + 1),
      );
    }
  }

  return candidates;
};

const output = ladderLength("hit", "cog", [
  "hot",
  "dot",
  "dog",
  "lot",
  "log",
  "cog",
]);
console.log(output);
