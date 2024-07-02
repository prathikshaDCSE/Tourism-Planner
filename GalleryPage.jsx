import React from 'react';

const GalleryPage = () => {
    // Static list of images
    const images = [
        {
            url: 'https://tse3.mm.bing.net/th?id=OIP.iIaazkA4fmeG3nOlnC8oTQHaE8&pid=Api&P=0&h=180',
            title: 'Taj Mahal, Agra',
            description: 'Iconic white marble mausoleum, a symbol of eternal love and architectural masterpiece',
        },
        {
            url: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcStbGdAeh3jre949eMO6wPrlmDMi6DdhP7XZI4n5fpJ4f7YITcxq71d66ZSS6Y2OdWPg9-l5ATD238OiXOlMRzzAlWibtZA54Aid9FW0Q',
            title: 'Jaipur, Rajasthan',
            description: 'Vibrant Pink City known for its majestic forts, palaces, and rich cultural heritage.',
        },
        {
            url: 'https://tse2.mm.bing.net/th?id=OIP.4Q5vPwNUUrg17Yvb2WVv8QHaE8&pid=Api&P=0&h=180',
            title: 'Varanasi, Uttar Pradesh',
            description: 'Spiritual city on the banks of the Ganges River, famous for its ghats and religious ceremonies.',
        },
        {
            url: 'https://tse1.mm.bing.net/th?id=OIP.4SejA--qjcR-4F6Frsdq_gHaEj&pid=Api&P=0&h=180',
            title: 'Shimla, Himachal Pradesh',
            description: 'Picturesque hill station with colonial architecture, surrounded by snow-capped mountains.',
        },

        {
            url: 'https://tse2.mm.bing.net/th?id=OIP.wqxQ1JGc5TfE3pSPyQFBQwHaEK&pid=Api&P=0&h=180',
            title: 'Rishikesh, Uttarakhand',
            description: 'Yoga capital of the world, nestled in the Himalayas along the Ganges River.',
        },


    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="p-2 border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <img 
                            src={image.url} 
                            alt={image.title} 
                            className="w-full h-48 object-cover rounded" 
                        />
                        <h2 className="mt-2 text-xl font-bold">{image.title}</h2>
                        <p className="text-gray-700">{image.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
