// import React from 'react'

// const Review = () => {

//     const [rating, setRating] = useState(0)
//     const [feedback, setFeedback] = useState<string[]>([]);

//     const handleFeedbackSubmit = () => {
//         if (feedback.length === 0) {
//             alert("Please select at least one feedback option.")
//             return
//         }
//         if (rating === 0) {
//             alert("Please select a rating.")
//             return
//         }

//         if (feedback.includes('leave-a-comment')) {
//             if (commentRef.current.trim().length < 10) {
//                 alert("Comment must be at least 10 characters long.");
//                 return;
//             }
//         }

//         console.log("Feedback submitted:", { feedback, comment: commentRef.current, rating })
//         setIsFeedbackModal(false)
//         setFeedbackReceivedModal(true)
//         setRating(0)
//         setHoveredRating(0)
//         commentRef.current = '';
//         // Here you can add logic to save the feedback
//     }

//     return (
//         <div className='flex flex-col items-center gap-3 justify-center text-center p-4'>

//             <h4 className="text-lg font-normal text-[#222222] mb-2">How was your experience?</h4>

//             {/* Star Rating */}
//             <div className="flex justify-center gap-1 mb-2 border-b border-transparent w-full">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                     <button
//                         key={star}
//                         className="p-1 cursor-pointer "
//                         onMouseEnter={() => setHoveredRating(star)}
//                         onMouseLeave={() => setHoveredRating(0)}
//                         onClick={() => setRating(star)}
//                     >
//                         <StarIcon
//                             className={`w-8 h-8 stroke-none ${star <= (hoveredRating || rating) ? "fill-[#FACC15] text-[#e8b931]" : "text-[#ededed] fill-gray-100"
//                                 }`}
//                         />
//                     </button>
//                 ))}
//             </div>
//             <div className='border-0  border-t w-full py-4'>
//                 <h4 className="text-md font-normal text-[#222222] mb-6">Leave feedback</h4>
//                 <div className='flex flex-wrap items-center gap-3 mb-4'>
//                     {shortFeedbackOptions.map((option) => (
//                         <button
//                             key={option.id}
//                             className={`border rounded-full flex items-center gap-2 py-2 px-4 cursor-pointer ${feedback.includes(option.id) ? "bg-[#E6F8F4]/40 border-[#85C9C3] text-app-black" : "text-gray-500 bg-transparent hover:bg-[#F9F9F9] hover:text-app-black"
//                                 }`}
//                             onClick={() => {
//                                 setFeedback((prev) =>
//                                     prev.includes(option.id)
//                                         ? prev.filter((id) => id !== option.id)
//                                         : [...prev, option.id]
//                                 );
//                             }}
//                         >
//                             {option.icon}
//                             <span className='text-xs md:text-sm'>{option.title}</span>
//                         </button>
//                     ))}


//                     <Textarea defaultValue="" onChange={(e) => { commentRef.current = e.target.value }} rows={7} id="comment" placeholder="Leave a comment" className={feedback.includes('leave-a-comment') ? "" : "hidden"} />


//                 </div>
//             </div>
//             <Button onClick={handleFeedbackSubmit} disabled={feedback.length === 0} variant="primary" className='w-full py-6 px-6'>Submit</Button>
//             {/* Product Info */}
//             <div className="w-full flex items-center gap-3 p-3 bg-[#f9fafb] rounded-lg mt-2">
//                 <Image
//                     src="/assets/giver-items/Frame 2087328010-2.png"
//                     width={400}
//                     height={400}
//                     alt="Vintage Desk Lamp"
//                     className="w-20 h-16 rounded-lg object-cover"
//                 />
//                 <div className="text-left grid gap-1">
//                     <div className="font-medium text-[#222222]">Vintage Desk Lamp</div>
//                     <div className="text-sm text-[#878686]">Picked up by Sarah Johnson</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Review