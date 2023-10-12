import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import IconX from '../components/Icon/IconX';
import IconDownload from '../components/Icon/IconDownload';
import IconEye from '../components/Icon/IconEye';
import IconSend from '../components/Icon/IconSend';
import IconSave from '../components/Icon/IconSave';

const AddNewResturant = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Invoice Add'));
    });
    const currencyList = ['USD - US Dollar', 'GBP - British Pound', 'IDR - Indonesian Rupiah', 'INR - Indian Rupee', 'BRL - Brazilian Real', 'EUR - Germany (Euro)', 'TRY - Turkish Lira'];

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

    const addItem = () => {
        let maxId = 0;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;

        setItems([...items, { id: maxId + 1, title: '', description: '', rate: 0, quantity: 0, amount: 0 }]);
    };

    const removeItem = (item: any = null) => {
        setItems(items.filter((d: any) => d.id !== item.id));
    };

    const changeQuantityPrice = (type: string, value: string, id: number) => {
        const list = items;
        const item = list.find((d: any) => d.id === id);
        if (type === 'quantity') {
            item.quantity = Number(value);
        }
        if (type === 'price') {
            item.amount = Number(value);
        }
        setItems([...list]);
    };
    const [yearlyPrice, setYearlyPrice] = useState<any>(false);

    return (
        <div className="flex xl:flex-row flex-col gap-2.5">
            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                <div className="text-lg ml-3">Add Resturants Details</div>

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="mt-8 px-4">
                    <div className="flex justify-between lg:flex-row flex-col">
                        <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                            <div className="mt-4 flex items-center">
                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Resturants Name
                                </label>
                                <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter Name" />
                            </div>
                            <div className="flex items-center mt-4">
                                <label htmlFor="acno" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Contact Person
                                </label>
                                <input id="acno" type="text" name="acno" className="form-input flex-1" placeholder="Enter Account Number" />
                            </div>
                            <div className="mt-4 flex items-center">
                                <label htmlFor="reciever-number" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Phone Number
                                </label>
                                <input id="reciever-number" type="text" name="reciever-number" className="form-input flex-1" placeholder="Enter Phone number" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="mt-4 flex items-center">
                                <label htmlFor="reciever-email" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Vendar Email
                                </label>
                                <input id="reciever-email" type="email" name="reciever-email" className="form-input flex-1" placeholder="Enter Email" />
                            </div>
                            <div className="mt-4 flex items-center">
                                <label htmlFor="reciever-address" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Vendar Password
                                </label>
                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter Address" />
                            </div>

                            <div className="mt-4 flex items-center">
                                <label htmlFor="reciever-number" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    No Of Branch
                                </label>
                                <input id="reciever-number" type="text" name="reciever-number" className="form-input flex-1" placeholder="Enter Phone number" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Select Packages</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*  Toggle */}
                                <div style={{ boxShadow: 'none' }} className="panel">
                                    <div className="flex items-center justify-between mb-5"></div>
                                    <div className="mb-5">
                                        <div className="max-w-[320px] md:max-w-[1140px] mx-auto dark:text-white-dark">
                                            <div className="mt-5 md:mt-10 text-center flex justify-center space-x-4 rtl:space-x-reverse font-semibold text-base">
                                                <span className={`${!yearlyPrice ? 'text-primary' : 'text-white-dark'}`}>Monthly</span>

                                                <label className="w-12 h-6 relative">
                                                    <input
                                                        id="custom_switch_checkbox1"
                                                        type="checkbox"
                                                        className="custom_switch absolute ltr:left-0 rtl:right-0 top-0 w-full h-full opacity-0 z-10 cursor-pointer peer"
                                                        onChange={() => setYearlyPrice(!yearlyPrice)}
                                                    />
                                                    <span className="outline_checkbox bg-icon border-2 border-[#ebedf2] dark:border-white-dark block h-full rounded-full before:absolute ltr:before:left-1 rtl:before:right-1 before:bg-[#ebedf2] dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center ltr:peer-checked:before:left-7 rtl:peer-checked:before:right-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-primary peer-checked:before:bg-primary before:transition-all before:duration-300"></span>
                                                </label>
                                                <span className={`relative ${yearlyPrice ? 'text-primary' : ' text-white-dark'}  `}>
                                                    Yearly
                                                    <span className="badge bg-success rounded-full absolute ltr:left-full rtl:right-full whitespace-nowrap ltr:ml-2 rtl:mr-2 my-auto hidden">
                                                        20% Off
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="md:flex space-y-4 md:space-y-0 mt-5 md:mt-16 text-white-dark">
                                                <div className="p-4 lg:p-9 border ltr:md:border-r-0 rtl:md:border-l-0 border-white-light dark:border-[#1b2e4b] rounded-md ltr:md:rounded-r-none rtl:md:rounded-l-none transition-all duration-300 hover:shadow-[0_0_15px_1px_rgba(113,106,202,0.20)]">
                                                    <h3 className="text-xl mb-5 font-semibold text-black dark:text-white-light">Package 1</h3>
                                                    <p>cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.</p>
                                                    <div className="my-7 p-2.5 text-center text-lg">
                                                        <strong className="text-[#3b3f5c] dark:text-white-light text-xl lg:text-3xl">$25</strong> / monthly
                                                    </div>
                                                    <div className="mb-6">
                                                        <strong className="text-black dark:text-white-light text-[15px] mb-3 inline-block">VPS Hosting Features</strong>
                                                        <ul className="space-y-3">
                                                            <li>Single Domain</li>
                                                            <li>50 GB SSD</li>
                                                            <li>1 TB Premium Bandwidth</li>
                                                        </ul>
                                                    </div>
                                                    <button type="button" className="btn bg-blue-400 text-white w-full">
                                                        Buy Now
                                                    </button>
                                                </div>
                                                <div className="relative p-4 pt-14 lg:p-9 border border-white-light dark:border-[#1b2e4b] transition-all duration-300 rounded-t-md">
                                                    <div className="absolute top-0 md:-top-[30px] inset-x-0 bg-pink-400 text-white h-10 flex items-center justify-center text-base rounded-t-md">
                                                        Most Popular
                                                    </div>
                                                    <h3 className="text-xl mb-5 font-semibold text-black dark:text-white-light">Package 2</h3>
                                                    <p>cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM.</p>
                                                    <div className="my-7 p-2.5 text-center text-lg">
                                                        <strong className="text-primary text-xl lg:text-4xl">$70</strong> / monthly
                                                    </div>
                                                    <div className="mb-6">
                                                        <strong className="text-black dark:text-white-light text-[15px]  mb-3 inline-block">VPS Hosting Features</strong>
                                                        <ul className="space-y-3">
                                                            <li>5 Domains</li>
                                                            <li>100 GB SSD</li>
                                                            <li>2 TB Premium Bandwidth</li>
                                                        </ul>
                                                    </div>
                                                    <button type="button" className="btn bg-pink-400 w-full text-white">
                                                        Buy Now
                                                    </button>
                                                </div>
                                                <div className="p-4 lg:p-9 border ltr:md:border-l-0 rtl:md:border-r-0 border-white-light dark:border-[#1b2e4b] rounded-md ltr:md:rounded-l-none rtl:md:rounded-r-none transition-all duration-300 hover:shadow-[0_0_15px_1px_rgba(113,106,202,0.20)]">
                                                    <h3 className="text-xl mb-5 font-semibold text-black dark:text-white-light">Package 3</h3>
                                                    <p>cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM.</p>
                                                    <div className="my-7 p-2.5 text-center text-lg">
                                                        <strong className="text-[#3b3f5c] dark:text-white-light text-xl lg:text-3xl">$115</strong> / monthly
                                                    </div>
                                                    <div className="mb-6">
                                                        <strong className="text-black dark:text-white-light text-[15px]  mb-3 inline-block">Business Hosting Features</strong>
                                                        <ul className="space-y-3">
                                                            <li>Unlimited Domains</li>
                                                            <li>1 TB SSD</li>
                                                            <li>5 TB Premium Bandwidth</li>
                                                        </ul>
                                                    </div>
                                                    <button type="button" className="btn bg-blue-400 text-white w-full">
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end sm:flex-row flex-col mt-6 px-4">
                        <div className="sm:mb-0 mb-6">
                            <Link to="/resturants">
                            <button type="button" className="btn btn-gradient !mb-5  border-0 uppercase text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500" >
                                Add Resturant
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewResturant;
