const CHAR_CODE_A = "a".charCodeAt(0);

function checkInclusion(s1: string, s2: string): boolean {
  //  0: Validate Inputs
  if (s1.length > s2.length) {
    return false;
  }

  //  1: Set the initial frequencies
  const requiredFrequency = createFrequencies(s1, s1.length);
  const currentFrequency = createFrequencies(s2, s1.length);

  //  2: Verify if initial window is fine
  if (frequenciesMatch(requiredFrequency, currentFrequency)) {
    return true;
  }

  for (let start = 0, end = s1.length; end < s2.length; start += 1, end += 1) {
    //  1: Reduce the frequency of start
    currentFrequency[s2[start].charCodeAt(0) - CHAR_CODE_A] -= 1;

    //  2: Increase the frequency of end
    currentFrequency[s2[end].charCodeAt(0) - CHAR_CODE_A] += 1;

    //  3: Check if match found
    if (frequenciesMatch(currentFrequency, requiredFrequency)) {
      return true;
    }
  }

  return false;
}

const createFrequencies = (input: string, size: number) => {
  const frequencies = new Array(26).fill(0);
  for (let i = 0; i < size; i += 1) {
    frequencies[input[i].charCodeAt(0) - CHAR_CODE_A] += 1;
  }

  return frequencies;
};

const frequenciesMatch = (input1: number[], input2: number[]): boolean => {
  let found = true;
  for (let i = 0; i < 26; i += 1) {
    if (input1[i] !== input2[i]) {
      return false;
    }
  }

  return found;
};
