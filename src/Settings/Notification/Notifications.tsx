import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconX from '../../components/Icon/IconX';
import IconDownload from '../../components/Icon/IconDownload';
import IconEye from '../../components/Icon/IconEye';
import IconSend from '../../components/Icon/IconSend';
import IconSave from '../../components/Icon/IconSave';

const Notifications = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Invoice Add'));
    });

    const [items, setItems] = useState<any>([
        {
            id: 1,
            title: '',
            description: '',
            rate: 0,
            quantity: 0,
            amount: 0,
        },
    ]);

    const [yearlyPrice, setYearlyPrice] = useState<any>(false);

    return (
        <>
            <div className="flex xl:flex-row flex-col gap-2.5 mb-10">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="text-lg ml-3">Email</div>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-5">
                            <div>
                                <label htmlFor="inputDefault"> Mail From Name</label>
                                <input id="inputDefault" type="text" placeholder="Enter  Mail From Name" className="form-input" />
                            </div>
                            <div>
                                <label htmlFor="inputDefault">Mail From Email</label>
                                <input id="inputDefault" type="text" placeholder="Enter Mail From Email" className="form-input" />
                            </div>
                            <div>
                                <label htmlFor="inputDefault">Mail From Email</label>
                                <select className="form-select text-white-dark">
                                    <option>Select Email Queue</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-5">
                            <div>
                                <label htmlFor="inputDefault">Mail Driver</label>
                                <select className="form-select text-white-dark">
                                    <option>Select Email Queue</option>
                                    <option>SMTP</option>
                                    <option>TCP</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="inputDefault"> Mail Port</label>
                                <input id="inputDefault" type="text" placeholder="Enter Mail Port" className="form-input" />
                            </div>
                            <div>
                                <label htmlFor="inputDefault">Mail Encryption</label>
                                <select className="form-select text-white-dark">
                                    <option>Select Email Encryption</option>
                                    <option>ssl</option>
                                    <option>TCP</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 m-5">
                            <div>
                                <label htmlFor="inputDefault"> Mail Host</label>
                                <input id="inputDefault" type="text" placeholder="Enter Mail Host" className="form-input" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-5">
                            <div>
                                <label htmlFor="inputDefault"> Mail Username</label>
                                <input id="inputDefault" type="text" placeholder=" Mail Username" className="form-input" />
                            </div>

                            <div>
                                <label htmlFor="inputDefault"> Mail Password</label>
                                <input id="inputDefault" type="text" placeholder="Mail Password" className="form-input" />
                            </div>
                        </div>
                    </form>

                    <div className="mt-8">
                        <div className="flex justify-end sm:flex-row flex-col mt-6 px-4">
                            <div className="sm:mb-0 mb-6">
                                <Link to="#">
                                    <button
                                        type="button"
                                        className="btn btn-gradient !mb-5  border-0 uppercase text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500"
                                    >
                                        Update
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="text-lg ml-3">FMC</div>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 m-5">
                        <div>
                            <label htmlFor="inputDefault"> Server Secret</label>
                            <input id="inputDefault" type="text" placeholder=" Server Secret" className="form-input" />
                        </div>

                        <div>
                            <label htmlFor="inputDefault"> Server Key</label>
                            <input id="inputDefault" type="text" placeholder="Server Key" className="form-input" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex justify-end sm:flex-row flex-col mt-6 px-4">
                            <div className="sm:mb-0 mb-6">
                                <Link to="#">
                                    <button
                                        type="button"
                                        className="btn btn-gradient !mb-5  border-0 uppercase text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500"
                                    >
                                        Update
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notifications;
