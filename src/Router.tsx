import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Details } from './pages/Details';



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} /> 
        <Route path="/post/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}