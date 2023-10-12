import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Link } from 'react-router-dom';

const ResturantMain = () => {
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
            {/* News Feed */}
            <div className="panel">
                <div className="flex justify-between">
                    <div className="font-semibold text-lg dark:text-white mb-5">Resturants</div>
                    <Link to="add-new">
                        <button className="btn btn-gradient !mb-5  border-0 uppercase text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500">
                            Add New Resturants
                        </button>
                    </Link>
                </div>

                <div>
                    <div id="example12">
                        <ReactSortable list={newsFeed} setList={setNewsFeed} animation={200} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                            {newsFeed.map((item) => {
                                return (
                                    <div className="mb-2.5" key={item.id}>
                                        <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5">
                                            <div className="py-sm-2.5 sm:flex block ltr:md:text-left rtl:md:text-right text-center items-md-center">
                                                <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                                    <div className="font-semibold md:my-0 my-3">
                                                        <div className="text-pink-500 text-3xl flex justify-center  text-center dark:text-[#bfc9d4] text-base">{item.name}</div>
                                                        {/* <div className="text-white-dark text-xs">11 hours ago</div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                                <div className="font-semibold md:my-0 my-3 flex">
                                                    {/* <div className='text-pink-400 dark:text-[#bfc9d4] text-base'>Plan : &nbsp;</div> */}
                                                    <div className=" text-xl text-blue-400 dark:text-[#bfc9d4] text-base">{item.plan}</div>
                                                </div>
                                            </div>
                                            <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                                <div className="font-semibold md:my-0 my-3 flex">
                                                    <div className="text-pink-400 dark:text-[#bfc9d4] text-base">Contact Person : &nbsp;</div>

                                                    <div className="text-blue-400 dark:text-[#bfc9d4] text-base">{item.cname}</div>
                                                </div>
                                            </div>

                                            <div className="py-5 border-b border-b-[#f1f2f3] dark:border-b-dark mb-4">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation.
                                            </div>

                                            <div className="md:flex items-center flex-wrap">
                                                <div className="ltr:md:text-left rtl:md:text-right text-center xl:flex-1">
                                                    <button className="text-white dark:text-primary btn btn-gradient !mb-5  border-0 uppercase bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500">
                                                        View More
                                                    </button>
                                                </div>
                                                <div className="ltr:md:text-right rtl:md:text-left text-center">
                                                    <span className="text-sm text-white-dark lg:pt-0 pt-2 block">
                                                        {/* <button className="text-danger dark:text-primary font-semibold text-sm mr-1">Vincent, Mary</button> */}
                                                        Created date:- 11-10-2023
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </ReactSortable>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResturantMain;
