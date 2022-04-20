import { useState } from "react";
import Favorite from "./componets/Favorite";

export default function App() {
  const [contact, setContact] = useState({
    firstName: "Marcelo",
    lastName: "Schneider",
    phone: "+39 (349) 796-6478",
    email: "marcelo.d.schneider@gmail.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((contact) => ({
      ...contact,
      isFavorite: !contact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img src="./images/avatar.svg" className="card--image" alt="avatar" />
        <div className="card--info">
          <Favorite isFavorite={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
