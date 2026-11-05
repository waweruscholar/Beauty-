import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataApi } from "../api/data";

export default function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    dataApi.getServices().then((data) => setServices(data.results || data));
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1 className="display-4">Welcome to Scholar's Beauty Palour</h1>
        <p className="lead">Where beauty meets expertise. Specializing in protective styles and elegant braids.</p>
        <Link to="/contact" className="btn btn-dark btn-lg">Book an Appointment</Link>
      </div>

      {/* Featured Services */}
      <h2 className="text-center mb-4">Our Signature Services</h2>
      <div className="row g-4">
        {services.slice(0, 4).map((s) => (
          <div className="col-md-3" key={s.id}>
            <div className="card h-100">
              {s.image_url && <img src={s.image_url} className="card-img-top" alt={s.name} style={{ height: 200, objectFit: "cover" }} />}
              <div className="card-body">
                <h5 className="card-title">{s.name}</h5>
                <p className="card-text">{s.description.slice(0, 80)}…</p>
                <p className="fw-bold">${s.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link to="/services" className="btn btn-outline-dark">View All Services →</Link>
      </div>
    </>
  );
}