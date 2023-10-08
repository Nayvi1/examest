function handleInputDelete(e, id, setState){
    e.preventDefault();
    console.log();

    setState((prev) => {
      const allTheQuestions = [...prev.questions];
      const filteredQuestions = allTheQuestions.filter((question) => {
        return question.id !== id;
      });
      return {
        ...prev,
        questions: filteredQuestions,
      };
    });
}

export default handleInputDelete