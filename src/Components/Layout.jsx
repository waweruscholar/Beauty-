import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Scholar's Beauty Palour</NavLink>
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/" end>Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/services">Services</NavLink>
            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
            <NavLink className="nav-link" to="/testimonials">Testimonials</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
      <main className="container py-4">
        <Outlet />
      </main>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        © 2026 Scholar's Beauty Palour. All rights reserved.
      </footer>
    </>
  );
}