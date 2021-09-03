import { BrowserRouter, Route } from "react-router-dom"
import LoginCreate from "./LoginCreate"
import LoginForm from "./LoginForm"
import LoginPasswordLost from "./LoginPasswordLost"
import LoginPassWordReset from "./LoginPassWordReset"


const Login = () => {
  return (
    <>
      <div>Login</div>
      <BrowserRouter>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
        <Route path="/perdeu" element={<LoginPasswordLost />} />
        <Route path="/resetar" element={<LoginPassWordReset />} />
      </BrowserRouter>
    </>
  )
}

export default Login