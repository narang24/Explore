// // app/about/page.js
// import Link from "next/link";

// export default function AboutUs() {
//   return (
//     <div className="min-h-screen bg-[#F7F2EB] flex flex-col">
//       {/* Main Content */}
//       <main className="flex-grow px-6 sm:px-12 lg:px-24 py-12">
//         {/* Title */}
//         <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
//           About Us
//         </h1>

//         {/* Why Xplore Section */}
//         <section className="mb-16">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
//             Why Xplore?
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 title: "Always Together",
//                 desc: "Stay connected with your college community.",
//               },
//               {
//                 title: "Smart Notifications",
//                 desc: "Get timely updates about events and activities.",
//               },
//               {
//                 title: "Your Needs First",
//                 desc: "Personalized features designed just for you.",
//               },
//               {
//                 title: "Simplify the Routine",
//                 desc: "One place to manage all your campus life.",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#0b1957] p-6 rounded-xl shadow hover:shadow-lg transition text-center"
//               >
//                 <h3 className="font-bold text-lg mb-2 text-white text-shadow-white">
//                   {item.title}
//                 </h3>
//                 <p className="text-white text-sm">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Our Story */}
//         <section className="mb-12 max-w-4xl mx-auto text-center sm:text-left">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
//             Our Story
//           </h2>
//           <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//             Xplore started with a vision to connect students and streamline
//             campus activities. From finding events to joining clubs, our
//             platform makes college life more engaging and organized.
//           </p>
//         </section>

//         {/* Our Mission */}
//         <section className="mb-12 max-w-4xl mx-auto text-center sm:text-left">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
//             Our Mission
//           </h2>
//           <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//             Our mission is to empower students and organizations with tools that
//             foster collaboration and simplify everyday routines. With Xplore, we
//             aim to make campus life smarter, easier, and more connected.
//           </p>
//         </section>

//         {/* Team Section */}
//         <section>
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
//             Our Team
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               { name: "Teddy", role: "CEO", img: "/team/teddy.png" },
//               { name: "Bear", role: "COO", img: "/team/bear.png" },
//               { name: "Club Logo", role: "Admin", img: "/team/logo.png" },
//             ].map((member, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
//               >
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
//                 />
//                 <h3 className="font-bold text-gray-800">{member.name}</h3>
//                 <p className="text-gray-600 text-sm">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[#0b1957] text-white py-8 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
//           {/* Logo / Info */}
//           <div>
//             <h3 className="font-bold text-lg mb-2">Xplore</h3>
//             <p className="text-sm text-purple-100">
//               Connecting students and simplifying campus life.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold mb-2">Quick Links</h4>
//             <ul className="space-y-1 text-sm">
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="hover:underline">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/events" className="hover:underline">
//                   Events
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-semibold mb-2">Contact</h4>
//             <p className="text-sm">support@xplore.com</p>
//             <div className="flex justify-center sm:justify-start gap-3 mt-3">
//               <a href="#" className="hover:underline">
//                 Twitter
//               </a>
//               <a href="#" className="hover:underline">
//                 LinkedIn
//               </a>
//               <a href="#" className="hover:underline">
//                 Instagram
//               </a>
//             </div>
//           </div>
//         </div>
//         <p className="text-center text-xs mt-6 text-purple-200">
//           © 2025 Xplore. All Rights Reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

// app/about/page.js
import Link from "next/link";
import { Users, Bell, Heart, CalendarCheck } from "lucide-react"; // icons

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F7F2EB] flex flex-col">
      {/* Main Content */}
      <main className="flex-grow px-6 sm:px-12 lg:px-24 py-12">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
          About Us
        </h1>

        {/* Why Xplore Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
            Why Xplore?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Always Together",
                desc: "Stay connected with your college community.",
                icon: <Users size={28} className="text-white" />,
              },
              {
                title: "Smart Notifications",
                desc: "Get timely updates about events and activities.",
                icon: <Bell size={28} className="text-white" />,
              },
              {
                title: "Your Needs First",
                desc: "Personalized features designed just for you.",
                icon: <Heart size={28} className="text-white" />,
              },
              {
                title: "Simplify the Routine",
                desc: "One place to manage all your campus life.",
                icon: <CalendarCheck size={28} className="text-white" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b1957] p-6 rounded-xl shadow hover:shadow-lg transition text-center flex flex-col items-center"
              >
                <div className="mb-4 bg-[#1e2a78] p-3 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-white text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-12 max-w-4xl mx-auto text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Xplore started with a vision to connect students and streamline
            campus activities. From finding events to joining clubs, our
            platform makes college life more engaging and organized.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-12 max-w-4xl mx-auto text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Our mission is to empower students and organizations with tools that
            foster collaboration and simplify everyday routines. With Xplore, we
            aim to make campus life smarter, easier, and more connected.
          </p>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Kevin",
                role: "senior developer",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Lauren",
                role: "marketing head",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Matthew",
                role: "Admin",
                img: "https://randomuser.me/api/portraits/men/75.jpg",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover mb-4 rounded-full"
                />
                <h3 className="font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b1957] text-white py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          {/* Logo / Info */}
          <div>
            <h3 className="font-bold text-lg mb-2">Xplore</h3>
            <p className="text-sm text-purple-100">
              Connecting students and simplifying campus life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm">support@xplore.com</p>
            <div className="flex justify-center sm:justify-start gap-3 mt-3">
              <a href="#" className="hover:underline">
                Twitter
              </a>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs mt-6 text-purple-200">
          © 2025 Xplore. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
