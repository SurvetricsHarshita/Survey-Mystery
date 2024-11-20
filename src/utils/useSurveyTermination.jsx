let terminationReason = "";

function useSurveyTermination() {
  function isTerminate(question, answer, terminationCodes, storedData = {}) {
    const questionHandlers = {
      S1: () => radioHandler(answer, terminationCodes),
      S3: () => radioHandler(answer, terminationCodes),
      S4a: () => radioHandler(answer, terminationCodes),
      S4b: () => radioHandler(answer, terminationCodes),
      S4c: () => handleS4c(answer),
      S7b: () => handleS7b(answer),
      S7g: () => radioHandler(answer, terminationCodes),
      S9c: () => radioHandler(answer, terminationCodes),
      S9d: () => handleS9d(answer, terminationCodes, storedData),
      S9g: () => radioHandler(answer, terminationCodes),
      S10a: () => radioHandler(answer, terminationCodes),
      S10b: () => radioHandler(answer, terminationCodes),
      QP1: () => radioHandler(answer, terminationCodes),
      QP2: () => radioHandler(answer, terminationCodes),
    };

    const handler = questionHandlers[question];
    if (handler) {
      const result = handler();
      if (result) {
        terminationReason = `Survey terminated for ${question} with answer: ${answer}`;
      }
      return result;
    }

    return false;
  }

  // Default handler for simple termination code checks for radio
  function radioHandler(answer, terminationCodes) {
    return terminationCodes.includes(answer);
  }

  // Custom handler for S4c (numerical range restriction)
  function handleS4c(answer) {
    return answer < 25 || answer > 45;
  }

  // Custom handler for S7b (specific condition)
  function handleS7b(answer) {
    return !answer.includes("1");
  }

  // Custom handler for S9d (dependent on storedData)
  function handleS9d(answer, terminationCodes, storedData) {
    const s9cValue = storedData["S9c"] || "";
    return s9cValue === "7" || s9cValue === "6";
  }

  return { isTerminate, terminationReason };
}

export default useSurveyTermination;
