export default function Pizza({
  name,
  ingredients,
  photoName,
  price,
  soldOut,
}) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p className='price'>{soldOut ? "SOLD OUT" : `${price.toFixed(2)}€`}</p>
      </div>
    </li>
  );
}
