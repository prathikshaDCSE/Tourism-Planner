import React, { useState } from 'react';

const ProceedToCheckoutPage = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    // Dummy function for checkout (replace it with actual checkout logic)
    const handleCheckout = () => {
        // Implement your checkout logic here
        alert('Checkout completed successfully!');
    };

    // Function to call the user
    const handleCallUser = () => {
        // Sanitize phone number to ensure proper format
        let sanitizedPhoneNumber = phoneNumber.trim();

        // Ensure phone number starts with a single '+'
        if (!sanitizedPhoneNumber.startsWith('+')) {
            sanitizedPhoneNumber = `+${sanitizedPhoneNumber}`;
        } else if (sanitizedPhoneNumber.startsWith('++')) {
            sanitizedPhoneNumber = `+${sanitizedPhoneNumber.slice(2)}`;
        }

        // Validate phone number
        const phoneRegex = /^\+\d+$/;
        if (!phoneRegex.test(sanitizedPhoneNumber)) {
            alert('Please enter a valid phone number with the correct country code.');
            return;
        }

        // Initiate the call
        window.location.href = `tel:${sanitizedPhoneNumber}`;
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Proceed to Checkout</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                        Phone Number:
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                        Address:
                    </label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        placeholder="Enter your address"
                        rows="3"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex items-center mb-4">
                    <button
                        onClick={handleCallUser}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md mr-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16.299 17.6c-1.647 1.573-3.717 2.472-5.941 2.472s-4.294-.899-5.941-2.472C3.087 15.477 2 12.878 2 10c0-2.878 1.087-5.477 2.358-7.6a.75.75 0 011.299.399v.001a7.932 7.932 0 002.497 3.795 9.931 9.931 0 012.163 2.395c.145.25.137.561-.02.798l-.827.827a14.133 14.133 0 01-1.608 1.322c-.233.165-.403.365-.505.582l-.272.623c-.388.887-.712 2.337-.488 3.247.188.717.696 1.283 1.391 1.55.605.246 1.413.366 2.273.366 1.848 0 4.32-.755 6.927-2.277 2.68-1.558 4.498-3.63 5.258-5.87a.75.75 0 01.798-.505l.623.272c.216.094.417.264.582.498l.828.827c.237.237.549.225.798.08a9.931 9.931 0 012.395-2.163 7.932 7.932 0 003.795-2.497h.001c.155-.274.388-.467.661-.521.384-.083.789-.002 1.07.279C22.912 4.523 24 7.122 24 10c0 2.878-1.087 5.477-2.358 7.6a.75.75 0 01-1.299-.399v-.001a14.133 14.133 0 01-1.322-1.608 10.413 10.413 0 01-.582-.505l-.827-.827c-.237-.237-.251-.548-.08-.798a9.931 9.931 0 012.163-2.395 7.932 7.932 0 002.497-3.795.75.75 0 00-.399-1.299h-.002A10.12 10.12 0 0022 10c0-2.296-.784-4.41-2.086-6.1C19.615 2.392 17.47 1 14.642 1c-1.824 0-4.261.739-6.854 2.213C5.367 4.761 4 7.26 4 10c0 2.74 1.367 5.239 3.788 7.787.384.416.572 1.015.512 1.604l-.175 1.586c-.037.336.098.67.359.922l2.25 2.25c.252.252.586.396.922.359l1.586-.175c.589-.06 1.188.128 1.604.512 2.548 2.421 5.047 3.788 7.787 3.788 2.74 0 5.239-1.367 7.787-3.788a1.319 1.319 0 00.922-.359l2.25-2.25c.26-.252.395-.586.359-.922l-.175-1.586c-.06-.589.128-1.188.512-1.604C22.633 17.202 24 14.701 24 11.96c0-1.716-.567-3.321-1.554-4.631z"
                            />
                        </svg>
                        Call
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProceedToCheckoutPage;
