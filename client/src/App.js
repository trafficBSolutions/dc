import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Dashboard,Register,Landing,Error,Blog,Event,Past,Company,CP } from "./pages";

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/landing" element={<Landing/>}/>
    <Route path="/error" element={<Error/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/events" element={<Event/>}/>
    <Route path="/past-events" element={<Past/>}/>
    <Route path="/companies" element={<Company/>}/>
    <Route path="/company-page" element={<CP/>}/>
  </Routes>
</BrowserRouter>

  );
}

export default App;
