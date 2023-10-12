import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Link } from 'react-router-dom';

const NewUser = () => {
    return (
        <div> <div className="panel">
               <h1 className='font-semibold text-lg dark:text-white mb-5'>Add User Type</h1>

            <div className=" text-center">
                <div className="relative inline-flex align-middle flex-col items-start justify-center">
                <form className="block space-y-5 max-w-sm w-200 p-10 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex sm:flex-row flex-col">
                        <input id="horizontalPassword" type="password" placeholder="Enter Name" className="form-input flex-1" />
                    </div>
                    
                    <div className="flex sm:flex-row flex-col">
                        <label className="inline-flex mb-0 cursor-pointer">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-white-dark">Settings</span>
                        </label>
                    </div>
                    <div className="flex sm:flex-row flex-col">
                        <label className="inline-flex mb-0 cursor-pointer">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-white-dark">Resturants</span>
                        </label>
                    </div>{' '}
                    <div className="flex sm:flex-row flex-col">
                        <label className="inline-flex mb-0 cursor-pointer">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-white-dark">Salon</span>
                        </label>
                    </div>
                   
                    <button className="btn btn-gradient !mb-5  border-0 uppercase text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500">Add User</button>
                </form>
            </div>
                </div>
            </div>


            
        </div>
    );
};

export default NewUser;
