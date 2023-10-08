import { createContext, useContext } from "react"


const Questions = createContext();

function useQuestions() {

  const questions = useContext(Questions)
    return questions
  
}

export {useQuestions, Questions}
