import { createContext } from "react"


function QuestionContext() {

    const Questions = createContext()

  return (
    <Questions.Provider>QuestionContext</Questions.Provider>
  )
}

export default QuestionContext