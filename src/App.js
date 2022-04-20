import { useState } from "react";

export default function App() {
  const [contact, setContact] = useState({
    firstName: "Marcelo",
    lastName: "Schneider",
    phone: "+39 (349) 796-6478",
    email: "marcelo.d.schneider@gmail.com",
    isFavorite: false
})

  let starIcon = contact.isFavorite ? "star-filled.svg" : "star-empty.svg";

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
          <img
            src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
            alt="star"
          />
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
