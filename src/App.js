import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
      firstName: "Jennifer",
      lastName: "Smith",
      text: "Free dinner for 4 guests",
      valid: true,
      instructions: "To use your coupon, click the button below.",
    }
  );

  return (
    <div style={{padding: "40px", margin: "0 auto"}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      
    </div>
  )
}

