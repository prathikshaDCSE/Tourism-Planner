import React from 'react';

const activities = [
    {
        title: "Hiking",
        description: "Experience the beauty of nature with our guided hiking tours through breathtaking landscapes.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_r1eM4_lQbi_tIONYMD_i3xwR4koFdGR9zA&usqp=CAU",
        altText: "Hiking"
    },
    {
        title: "Kayaking",
        description: "Paddle through serene waters and enjoy the tranquility of nature on our kayaking adventures.",
        imgSrc: "https://media.npr.org/assets/img/2022/07/28/lower-p06-100495_custom-6a58991be7c39edb3e694dd3b4e7d1a63ad22748.jpg",
        altText: "Kayaking"
    },
    {
        title: "Rock Climbing",
        description: "Challenge yourself with our rock climbing experiences, suitable for all skill levels.",
        imgSrc: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/33/fd.jpg",
        altText: "Rock Climbing"
    },
    {
        title: "Scuba Diving",
        description: "Explore the underwater world and discover vibrant marine life with our scuba diving tours.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDUoOlg0mm65sLTgo-UqKy438vQ34fo7nWg&usqp=CAU",
        altText: "Scuba Diving"
    },
    {
        title: "Skydiving",
        description: "Feel the ultimate rush as you freefall from thousands of feet in our skydiving adventures.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavzwa8kD-OP92gGwIrhgAplvpHmnP5Auz9A&usqp=CAU",
        altText: "Skydiving"
    },
    {
        title: "Safari",
        description: "Embark on a thrilling safari and get up close with wildlife in their natural habitat.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQLdsPfW-MmioQueLOyKJwJA_smEUIK-1CXI75nuA917ZiIjyeY9sZL-SwkvQrk-xO18&usqp=CAU",
        altText: "Safari"
    },
    {
        title: "Bungee Jumping",
        description: "Leap off a bridge and experience the exhilaration of bungee jumping with our expert guides.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6biAU9epOiS41ZpjJd0jKO3dA8S4an_57vg&usqp=CAU",
        altText: "Bungee Jumping"
    },
    {
        title: "Paragliding",
        description: "Soar through the skies and enjoy breathtaking aerial views with our paragliding adventures.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNM6OEzimOjl5zuOEJeRQynThLiSNOW2rJGw&usqp=CAU",
        altText: "Paragliding"
    }
];

const ActivityCard = ({ title, description, imgSrc, altText }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeInLeft activity-card transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <img src={imgSrc} alt={altText} className="w-full h-64 object-cover" />
        <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <div className="mt-4">
                <a href="#" className="text-blue-500 font-semibold hover:text-blue-700">Book Now</a>
            </div>
        </div>
    </div>
);

const ActivitiesPage = () => (
    <div className="bg-gradient-to-b from-blue-200 to-blue-500 min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-12 custom-header animate__animated animate__fadeInDown">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold">Embark on Your Adventure</h1>
                <p className="mt-4 text-lg">"Life is either a daring adventure or nothing at all." - Helen Keller</p>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {activities.map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))}
                </div>
            </div>
        </main>

        {/* Footer */}
        <footer className="py-6 custom-footer">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 TrekTrove. All rights reserved.</p>
            </div>
        </footer>
    </div>
);

export default ActivitiesPage;
