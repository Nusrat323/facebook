import React from 'react';
import imageCat from '../../assets/download.jpg'
import Messi from '../../assets/messi.jpg'
import Biriyani from '../../assets/biriyani.jpg'
import Rolex from '../../assets/rolex.jpg'
import Haha from '../../assets/icons8-haha-emoji-50.png'
import Like from '../../assets/icons8-facebook-like-24.png'
import Love from '../../assets/icons8-love-circled-50.png'
import Likebtn from '../../assets/icons8-like-48.png'
import Comment from '../../assets/icons8-comment-50.png'
import Send from '../../assets/icons8-messenger-50.png'
import Share from '../../assets/icons8-share-24.png'
import Feed from '../../assets/icons8-home-48.png'
import Tv from '../../assets/icons8-tv-50.png'
import Marketplace from '../../assets/icons8-marketplace-50.png'
import Group from '../../assets/icons8-group-32.png'
import Notification from '../../assets/icons8-notification-50.png'
import Menu from '../../assets/icons8-menu-50.png'
import Angry from '../../assets/icons8-angry-emoji-50.png'
import Dot from '../../assets/icons8-ellipsis-50.png'
import Close from '../../assets/icons8-close-48.png'

const Home = () => {
    return (
        <div className="mx-auto px-3 sm:px-6">
            <nav className="my-4 flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-600">Facebook</h1>
                <div className="flex gap-4 sm:gap-6">
                    <img width="20" height="20" src="https://img.icons8.com/android/24/plus.png" alt="plus" />
                    <img width="24" height="24" src="https://img.icons8.com/android/24/search.png" alt="search" />
                    <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/facebook-messenger--v1.png" alt="messenger" />
                </div>
            </nav>

            <div className="flex flex-col sm:flex-row justify-between my-7 border-b border-solid border-gray-400 pb-4">
                <div className="flex  gap-2 items-center mb-4">
                    <img className="w-12 sm:w-16 border border-solid border-blue-400 rounded-full object-cover" src={imageCat} />
                    <p className="text-sm sm:text-md text-gray-500">Whats on your mind ?</p>
                </div>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 border-b border-solid border-gray-400 pb-4">
                <img className=" border-1 border-solid border-blue-300 rounded-xl  h-[200px]" src={Messi} />
                <img className=" border-1 border-solid border-yellow-300 rounded-xl  h-[200px]" src={Biriyani} />
                <img className=" border-1 border-solid border-green-300 rounded-xl  h-[200px]" src={Rolex} />
            </div>

            <div className="mt-5 flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex   justify-between">
                    <div className='flex gap-4'>
                    <img className="w-12 sm:w-16 rounded-lg object-cover" src={imageCat} />
                    <div>
                        <h1 className="text-sm sm:text-md font-bold">Labid Khan</h1>
                        <p className="text-xs sm:text-sm text-gray-500">Now</p>
                        
                    </div>
                    </div>
                    <div className='flex gap-2'>
                    <img className='w-5' src={Dot}></img>
                    <img className='w-4' src={Close}></img>

                    </div>
                    
                </div>
            </div>

            <div className="mt-4 w-full h-60 bg-black ">
                <p className="text-white text-base sm:text-xl font-bold text-center py-20 leading-relaxed">
                    ও একটা ফেসবুক দিয়ে হয় না তোমার, <br />এখন আরো একটা ফেসবুক চালাতে হবে?
                    <img className='w-10 mx-44 mt-3' src={Angry}></img>
                </p>
                
            </div>

            <div className="flex justify-between px-1 sm:px-2 mt-2">
                <div className="flex gap-1">
                    <img className="w-5 sm:w-6" src={Haha} />
                    <img className="w-5 sm:w-6" src={Like} />
                    <img className="w-5 sm:w-6" src={Love} />
                    <p className="text-xs sm:text-sm text-gray-600 pt-0.5">6</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">16 Comments</p>
            </div>

            <div className="pb-3 flex flex-wrap gap-9 sm:gap-7 px-1 sm:px-2 mt-8 border-b border-solid border-gray-400">
                <div className="flex gap-1 items-center">
                    <img className="w-6 sm:w-7" src={Likebtn} />
                    <p className="text-xs sm:text-sm text-gray-600">Like</p>
                </div>
                <div className="flex gap-1 items-center">
                    <img className="w-6 sm:w-7" src={Comment} />
                    <p className="text-xs sm:text-sm text-gray-600">Comment</p>
                </div>
                <div className="flex gap-1 items-center">
                    <img className="w-6 sm:w-7" src={Send} />
                    <p className="text-xs sm:text-sm text-gray-600">Send</p>
                </div>
                <div className="flex gap-1 items-center">
                    <img className="w-6 sm:w-7" src={Share} />
                    <p className="text-xs sm:text-sm text-gray-600">Share</p>
                </div>
            </div>

            <div className="border-t border-solid border-gray-400 mt-12 mb-3 ">
                <div className="flex justify-around items-center gap-4 sm:gap-8 mt-3">
                    <img className="w-5" src={Feed} />
                    <img className="w-5" src={Tv} />
                    <img className="w-5" src={Marketplace} />
                    <img className="w-5" src={Group} />
                    <img className="w-5" src={Notification} />
                    <img className="w-5" src={Menu} />
                </div>
            </div>
        </div>
    );
};

export default Home;
