import { useEffect, useState } from "react";
import { dataApi } from "../api/data"; // Changed from ../api/client

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dataApi.getServices()
      .then(setServices)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading services...</p>;

  return (
    <>
      <h1>Our Services</h1>
      <div className="row g-4 mt-2">
        {services.map((s) => (
          <div className="col-md-6" key={s.id}>
            <div className="card h-100 flex-row">
              {s.image_url && (
                <img src={s.image_url} alt={s.name} style={{ width: 180, objectFit: "cover" }} />
              )}
              <div className="card-body">
                <h4>{s.name}</h4>
                <p>{s.description}</p>
                <p className="mb-1"><strong>Price:</strong> ${s.price}</p>
                <p><strong>Duration:</strong> {s.duration_minutes} mins</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}