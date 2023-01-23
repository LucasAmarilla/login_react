import Input from "./Input"
export default function Login(props) {
  return(
  <form className="form">
        <Input type="text" place="Username"/>
        <Input type="password" place="Password" />
        {props.isRegistered && <Input type="password" place="Confirme Password" />}
        <button type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
    </form>)
}