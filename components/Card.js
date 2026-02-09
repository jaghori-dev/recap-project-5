export default function Card({ title, description, children }) {
  return (
    <div>
      {children}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
