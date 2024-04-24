import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login  from './pages/Login.jsx'
import Newaccount from './pages/Newaccount.jsx'
import Home from './pages/Home.jsx'
import PollandQues from './pages/PollandQues.jsx'
import Poll from './pages/Poll.jsx'
import Question from './pages/Question.jsx'
import AnswerPoll from './pages/AnswerPoll.jsx'
import AnswerQuestion from './pages/AnswerQuestion.jsx'
import PollHome from './pages/PollHome.jsx'
import QuestionHome from './pages/QuestionHome.jsx'
import CreatedPoll from './pages/CreatedPoll.jsx'
import CreatedQuestion from './pages/CreatedQuestion.jsx'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='NEW' element={<Newaccount></Newaccount>}></Route>
      <Route path='HOME' element={<Home></Home>}></Route>
      <Route path='Choice' element={<PollandQues></PollandQues>}></Route>
      <Route path='Poll' element={<Poll></Poll>}></Route>
      <Route path='Question' element={<Question></Question>}></Route>
      <Route path='AnswerPoll' element={<AnswerPoll></AnswerPoll>}></Route>
      <Route path='AnswerQuestion' element={<AnswerQuestion></AnswerQuestion>}></Route>
      <Route path='PollHome' element={<PollHome></PollHome>}></Route>
      <Route path='QuestionHome' element={<QuestionHome></QuestionHome>}></Route>
      <Route path='CreatedQuestion' element={<CreatedQuestion></CreatedQuestion>}></Route>
      <Route path='CreatedPoll' element={<CreatedPoll></CreatedPoll>}></Route>
    </Routes>
  )
}

export default App