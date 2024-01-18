import { Link } from "react-router-dom";

export default function ErrorPage() {

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, I think you're lost, Go <span><Link to={'auth/signup'}>Home</Link></span> .</p>
    </div>
  );
}