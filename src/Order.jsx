export default function Order({ openHour, closeHour }) {
  return (
    <div className='order'>
      <p>
        We are open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className='btn'>Order now</button>
    </div>
  );
}
