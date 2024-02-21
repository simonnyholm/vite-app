import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav className="p-2">
          <NavLink to="/" className="p-3 text-[28px}">
            Hjem
          </NavLink>
          <NavLink to="/kontakt" className="p-3 text-[28px}">
            Kontakt
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
