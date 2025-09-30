// "use client";

// import { useState } from "react";

// export default function NewEventsPage() {
//   const [formData, setFormData] = useState({
//     eventType: "",
//     organizer: "Tech Club",
//     title: "",
//     mode: "online",
//     description: "",
//     poster: null,
//     startDate: "",
//     endDate: "",
//     venue: "",
//     registrationEnabled: false,
//   });

//   // Handle text input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle file upload
//   const handleFileChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       poster: e.target.files[0],
//     }));
//   };

//   // Handle toggle for registration
//   const handleToggle = () => {
//     setFormData((prev) => ({
//       ...prev,
//       registrationEnabled: !prev.registrationEnabled,
//     }));
//   };

//   // Handle submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Event Created:", formData);
//     alert("Event Created Successfully!");
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
//       <h1 className="text-2xl font-bold mb-6">New Event</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
        
//         {/* Event Type */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Event Type</label>
//           <input
//             type="text"
//             name="eventType"
//             value={formData.eventType}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             placeholder="Enter event type"
//           />
//         </div>

//         {/* Organizer */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Organizer</label>
//           <input
//             type="text"
//             name="organizer"
//             value={formData.organizer}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             disabled
//           />
//         </div>

//         {/* Title */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Event Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             placeholder="Enter event title"
//           />
//         </div>

//         {/* Mode */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Event Mode</label>
//           <div className="flex gap-4">
//             {["online", "offline", "both"].map((mode) => (
//               <label key={mode} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="mode"
//                   value={mode}
//                   checked={formData.mode === mode}
//                   onChange={handleChange}
//                 />
//                 {mode.charAt(0).toUpperCase() + mode.slice(1)}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Event Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             rows={3}
//             placeholder="Enter event description"
//           />
//         </div>

//         {/* Poster Upload */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Event Poster</label>
//           <input type="file" accept="image/*" onChange={handleFileChange} />
//           {formData.poster && (
//             <p className="text-sm mt-1 text-gray-600">
//               Selected: {formData.poster.name}
//             </p>
//           )}
//         </div>

//         {/* Date & Time */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Start Date & Time</label>
//             <input
//               type="datetime-local"
//               name="startDate"
//               value={formData.startDate}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">End Date & Time</label>
//             <input
//               type="datetime-local"
//               name="endDate"
//               value={formData.endDate}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//             />
//           </div>
//         </div>

//         {/* Venue */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Venue</label>
//           <input
//             type="text"
//             name="venue"
//             value={formData.venue}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             placeholder="Enter venue details"
//           />
//         </div>

//         {/* Enable Registration */}
//         <div className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={formData.registrationEnabled}
//             onChange={handleToggle}
//           />
//           <span>Enable Registration Forms</span>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//         >
//           Create Event
//         </button>
//       </form>
//     </div>
//   );
// }
