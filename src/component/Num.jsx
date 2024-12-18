
import React, { useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player'
const Num = () => {
    const [number, setNumber] = useState("");
  // State to store the output message
  const [message, setMessage] = useState("");

  // Function to handle input changes
  const handleChange = (event) => {
    const value = event.target.value;

    // Check if the input is a valid number
    if (!/^-?\d*$/.test(value)) {
      return; // If not a valid number, do nothing
    }

    setNumber(value);

    // If the input is empty, clear the message
    if (value === "") {
      setMessage("");
      return;
    }

    // Convert the input value to a number
    const num = parseInt(value, 10);

    // Check if the number is negative
    if (num < 0) {
      setMessage("Enter a positive value.");
    } else if (num % 2 === 0) {
      // Even number: calculate next 3 even numbers
      setMessage(
        `Next 3 even numbers: ${num + 2}, ${num + 4}, ${num + 6}`
      );
    } else {
      // Odd number: calculate next 3 odd numbers
      setMessage(
        `Next 3 odd numbers: ${num + 2}, ${num + 4}, ${num + 6}`
      );
    }
}
  return (
    <section >
      <div className="container h-full px-6 mt-2  ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between  ">
        
        <div className="card-box bg-gray-1500 rounded-lg  border-4 shadow-2xl p-6  dark:border  dark:bg-gray-700 dark:border-gray-200 ">

  <div className="inner-card-box bg-gray-10 rounded-lg border-gray-500 border-4 p-4">
    <div className="card">
    
      <div className="card-image mb-4 flex justify-center">
        <Player
          src="https://lottie.host/bcedae99-1765-4784-88e9-e5e8a38be0df/NZfqiTKmOY.json"
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay
        />
      </div>

     
      <div className="card-content bg-white text-black shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Number Handler</h2>
        <p className="text-sm">
        Check Number Type and Predict Next Values: Negative Warning, Even or Odd Sequences
        </p>
      </div>
    </div>
  </div>
</div>

          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-50 rounded-lg border-gray-50 border-4 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700 dark:border-gray-200 shadow-2xl">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "25px", color: "white" }}>Number Checker</h1>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "200px",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "16px", color: "white" }} >{message}</p>
    </div>
               
          </div>
        </div>
        </div>
        </div>
        </div>
       </section>
  )
}

export default Num;
