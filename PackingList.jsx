
import React from 'react';

const PackingListCard = ({ title, imageUrl, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
      <div className="bg-gradient-to-br from-pink-200 to-purple-200 px-4 py-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="px-4 py-2">
        <ul className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <li key={index} className="flex items-center justify-between py-2">
              <span className="text-gray-800">{item.name}</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PackingList = () => {
  const importantThingsItems = [
    { name: 'Money and payment methods (cash, cards)' },
    { name: 'Travel documents' },
    { name: 'Hotel/hostel reservation confirmations' },
    { name: 'Clothing appropriate for the destination and activities' },
    { name: 'Medications and prescriptions' },
    { name: 'Personal hygiene products' },
    { name: 'Mobile phone and charger' },
    { name: 'First aid kit (bandages, antiseptic wipes, pain relievers)' },
    { name: 'Power bank/portable charger' },
    { name: 'Face masks and hand sanitizer' },
    { name: 'Emergency contact information (family, embassy/consulate, travel insurance)' },
  ];

  const beachVacationItems = [
    { name: 'Swimsuit' },
    { name: 'Sunscreen' },
    { name: 'Sunglasses' },
    { name: 'Sun Hat' },
    { name: 'Beach Towels' },
    { name: 'Beach Bag' },
    { name: 'Sun Shade' },
    { name: 'Waterproof Phone Case' },
    { name: 'First Aid Kit' },
    { name: 'Reusable Bags' },
  ];

  const businessTripItems = [
    { name: 'Formal Attire' },
    { name: 'Laptop' },
    { name: 'Laptop Accessories' },
    { name: 'Important documents (itinerary, tickets, reservations)' },
    { name: 'Mobile phone and charger' },
    { name: 'Business Cards' },
    { name: 'Wallet or purse' },
  ];

  const adventurousTripItems = [
    { name: 'Backpack' },
    { name: 'Hiking boots' },
    { name: 'Compass or GPS device' },
    { name: 'Map of the area' },
    { name: 'Lightweight, quick-dry clothing' },
    { name: 'Multi-tool or Swiss army knife' },
    { name: 'Flashlight or headlamp with extra batteries' },
    { name: 'Emergency whistle' },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-100 to-pink-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Packing Lists</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PackingListCard
            title="Important Things"
            imageUrl="https://i.pinimg.com/564x/d3/07/8d/d3078ddf03ed5decdd1e22cfbbc3a573.jpg"
            items={importantThingsItems}
          />
          <PackingListCard
            title="Beach Vacation"
            imageUrl="https://i.pinimg.com/236x/ed/d6/62/edd662ec960d4104e0ab97b404a14684.jpg"
            items={beachVacationItems}
          />
          <PackingListCard
            title="Business Trip"
            imageUrl="https://i.pinimg.com/236x/cb/d6/4e/cbd64ed1e91aeefdda3c42e4fafd0a7a.jpg"
            items={businessTripItems}
          />
          <PackingListCard
            title="Adventurous Trip"
            imageUrl="https://i.pinimg.com/236x/a8/1b/a8/a81ba89de63bd0d6e436f508f3656ba3.jpg"
            items={adventurousTripItems}
          />
        </div>
      </div>
    </div>
  );
};

export default PackingList;
