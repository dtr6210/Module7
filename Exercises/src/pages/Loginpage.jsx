import LoginForm from "../components/LoginForm";
import { UserProvider } from "../context/UserContext";

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <h1>Login</h1>
      <UserProvider>
        <LoginForm />
      </UserProvider>
    </div>
  );
}
