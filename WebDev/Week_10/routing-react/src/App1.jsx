import { useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
function App() {
  const inputRef = useRef();
  function focus(){
    inputRef.current.focus()
  }
  return (
    <div>
      {/* <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet" element={<Class11Program />} />
            <Route path="/upsc" element={<UpscProgram />} />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      Signup
      <input ref={inputRef} autoFocus id="name" type="text" />
      <input type="text" />
      <button onClick={focus} >Submit</button>
    </div>
  );
}

function Header() {
  return (
    <div>
      <Link to="/">Allen</Link> | .<Link to="/neet">NEET</Link> | .
      <Link to="/upsc">UPSC</Link> |.
      <Link to="/no-content-page">404</Link>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Outlet />
      <br />
      <br />
      <br />
      Footer
    </div>
  );
}

function Class11Program() {
  return <div>Class 11 Prog Neet</div>;
}
function ErrorPage() {
  return <div>Sorry no content for this</div>;
}
function UpscProgram() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }
  return (
    <div>
      Class 12 UPSC Program
      <br />
      <button onClick={redirectUser}>Go back to Landing Page</button>
    </div>
  );
}
function Landing() {
  return <div>Welcome to Allen</div>;
}

export default App;
