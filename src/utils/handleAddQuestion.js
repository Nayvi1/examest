function handleAddQuestion(e, setState){
    e.preventDefault();

    setState((prev) => {
      return {
        ...prev,
        questions: [
          ...prev.questions,
          {
            id: Math.floor(Math.random() * 99999),
            question: "",
            options: [
              {
                option: "",
                isTrue: true,
              },
              {
                option: "",
                isTrue: false,
              },
              {
                option: "",
                isTrue: false,
              },
              {
                option: "",
                isTrue: false,
              },
            ],
          },
        ],
      };
    });
}

export default handleAddQuestion