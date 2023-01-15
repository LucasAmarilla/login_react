import Input from "./Input"
export default function Login() {
  return(
  <form className="form">
        <Input type="text" place="Username"/>
        <Input type="password" place="Password" />
        <button type="submit">Login</button>
    </form>)
}