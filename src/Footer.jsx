import Order from "./Order";
export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're closed. We will be happy to serve you between {openHour}:00 and
          {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
