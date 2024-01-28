export const makePayment = async () => {
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }
  const data = await fetch("/api/razorpay", {
    method: "POST",
    headers: {
      // Authorization: 'YOUR_AUTH_HERE'
    },
    
  }).then((t) => t.json());

  var options = {
    key: process.env.RAZORPAY_KEY,
    name: "Dope Kicks",
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    description: "Thankyou for your test donation",
    //   image: "https://example.com/in/logo.png",
    handler: function (response: any) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "John Doe",
      email: "johndoe@test.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};
