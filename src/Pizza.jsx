export default function Pizza({ name, ingredients, photoName, price }) {
  return (
    <li className='pizza'>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p className='price'>{price.toFixed(2)}€</p>
      </div>
    </li>
  );
}
