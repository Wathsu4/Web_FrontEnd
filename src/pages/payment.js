import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardType, setCardType] = useState("visa");
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();

    // Validate card number and CVV
    const cardNumberIsValid = /^\d{16}$/.test(cardNumber);
    const cvvIsValid = /^\d{3}$/.test(cvv);

    if (!cardNumberIsValid || !cvvIsValid) {
      setErrors({
        cardNumber: !cardNumberIsValid ? "Card number must be 16 digits." : "",
        cvv: !cvvIsValid ? "CVV must be 3 digits." : "",
      });
      return;
    }

    setErrors({});
    setShowConfirm(true);
  };

  const confirmPayment = () => {
    // Add actual payment processing logic here
    console.log("Payment successful!");
    setShowConfirm(false);
    navigate("/"); // Redirect to the home page
  };

  const cancelPayment = () => {
    setShowConfirm(false);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 16) {
      setCardNumber(value);
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="pt-[150px] flex justify-center font-serif items-center pb-[100px] min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Payment Gateway
          </h2>
          <form onSubmit={handlePayment}>
            <div className="mb-4">
              <label className="block text-gray-700">Card Number</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                required
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Expiry Date</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value={cvv}
                onChange={handleCvvChange}
                placeholder="123"
                required
              />
              {errors.cvv && (
                <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Card Type</label>
              <select
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
                required
              >
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="amex">American Express</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600"
            >
              Do Payment
            </button>
          </form>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Confirm Payment</h2>
            <p className="mb-4">
              Are you sure you want to proceed with the payment?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelPayment}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmPayment}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Payment;
