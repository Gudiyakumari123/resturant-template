import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Link } from 'react-router-dom';

const Packages = () => {
    const items3 = [
        {
            id: 2,
            text: 'Meeting with client',
            name: ' Thalapakkati Resturants',
            cname: ' John Yadav',
            plan: ' Silver',
        },
        {
            id: 1,
            text: 'Need to be approved',
            name: 'Silver Spoons Resturants',
            cname: 'John Yadav',
            plan: 'Gold',
        },
        {
            id: 3,
            text: 'Project Detail',
            name: 'The Bison Resturants',
            cname: 'John Yadav',
            plan: 'Platinum',
        },
        {
            id: 4,
            text: 'Edited Post Apporval',
            name: 'The Capital Grille Resturants',
            cname: 'John Yadav',
            plan: 'Gold',
        },
    ];
    const [newsFeed, setNewsFeed] = useState(items3);

    return (
        <div>
            <div className="panel">
                <div className="flex justify-between">
                    <div className="font-semibold text-lg dark:text-white mb-5">Packages Lists</div>
                    <Link to="newpackages">
                        <button className="btn btn-gradient !mb-5  border-0 uppercase text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500">
                            Add New Packages
                        </button>
                    </Link>
                </div>
                <div className="mb-5">
                    <div className="max-w-[1140px] mx-auto mt-20 dark:text-white-dark">
                        <div className="md:flex justify-between space-y-14 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
                            <div className="border border-white-light dark:border-[#1b2e4b] rounded transition-all duration-300 group">
                                <div className="border-b border-white-light dark:border-[#1b2e4b] p-5 pt-0">
                                    <span className="bg-white dark:bg-black text-[#3b3f5c] dark:text-white-light border-2 border-pink-400 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px]">
                                        $49
                                    </span>
                                    <h3 className="text-xl lg:text-2xl mt-4 mb-2.5">Freelancer</h3>
                                    <p className="text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <div className="p-5">
                                    <ul className="space-y-2.5 mb-5 font-semibold">
                                        <li>Support forum</li>
                                        <li>Free hosting</li>
                                        <li>2 hours of support</li>
                                        <li>5GB of storage space</li>
                                    </ul>
                                    <button type="button" className="btn text-white bg-blue-400 w-full">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                            <div className="border border-white-light dark:border-[#1b2e4b] rounded transition-all duration-300 group">
                                <div className="border-b border-white-light dark:border-[#1b2e4b] p-5 pt-0">
                                    <span className="bg-white dark:bg-black text-[#3b3f5c] dark:text-white-light border-2 border-pink-400 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px]">
                                        $89
                                    </span>
                                    <h3 className="text-xl lg:text-2xl mt-4 mb-2.5">Small business</h3>
                                    <p className="text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <div className="p-5">
                                    <ul className="space-y-2.5 mb-5 font-semibold">
                                        <li>Unlimited calls</li>
                                        <li>Free hosting</li>
                                        <li>10 hours of support</li>
                                        <li>10GB of storage space</li>
                                    </ul>
                                    <button type="button" className="btn text-white bg-blue-400 w-full">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                            <div className="border border-white-light dark:border-[#1b2e4b] rounded transition-all duration-300 group">
                                <div className="border-b border-white-light dark:border-[#1b2e4b] p-5 pt-0">
                                    <span className="bg-white dark:bg-black text-[#3b3f5c] dark:text-white-light border-2 border-pink-400 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px]">
                                        $129
                                    </span>
                                    <h3 className="text-xl lg:text-2xl mt-4 mb-2.5">Larger business</h3>
                                    <p className="text-[15px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <div className="p-5">
                                    <ul className="space-y-2.5 mb-5 font-semibold">
                                        <li>Unlimited calls</li>
                                        <li>Free hosting</li>
                                        <li>Unlimited hours of support</li>
                                        <li>1TB of storage space</li>
                                    </ul>
                                    <button type="button" className="btn text-white bg-blue-400 w-full">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;
