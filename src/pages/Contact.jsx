import { useState } from "react";
import { dataApi } from "../api/data"; // Changed

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dataApi.sendContact(form); // No need to pass an object with method/body
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };
  // ... rest of the JSX remains exactly the same
}