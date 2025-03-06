export default function Card({person}) {
    return (
      <li key={person.id} className="person-item">
          <div>
            <img src={person.image.src} alt={person.image.alt} />
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.hobby}</h3>
          </div>
      </li>
    );
  }
  