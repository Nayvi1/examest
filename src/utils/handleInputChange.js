function handleInputChange(e, index, setState) {
  const { name, value } = e.target;

  setState((prev) => {
    if (name === "name") {
      return {
        ...prev,
        name: value,
      };
    } else if (name === "question") {
      const updatedQuestions = [...prev.questions]; // Create a copy of questions array
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        question: value, // Update the question property
      };

      return {
        ...prev,
        questions: updatedQuestions, // Update the questions array
      };
    } else {
      const updatedOptions = [...prev.questions];

      updatedOptions[index].options[parseInt(name)] = {
        ...updatedOptions[index].options[parseInt(name)],
        option: value,
      };

      return {
        ...prev,
        questions: updatedOptions,
      };
    }
  });
}

export default handleInputChange;
