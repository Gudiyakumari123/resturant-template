import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));

// Authentication 
const Login = lazy(() => import('../auth/Login'));
const ForgotPassword = lazy(() => import('../auth/ForgotPassword'));
const OtpValidate = lazy(() => import('../auth/otpValidate'));
const ResetPassword = lazy(() => import('../auth/ResetPassword'));

// ResturantMain Pages 

const ResturantMain = lazy(() => import('../Resturants/ResturantMain'));
const AddNewResturant = lazy(() => import('../Resturants/AddNewResturant'));


// Packages Pages 

const Packages = lazy(() => import('../Packages/Packages'));
const NewPackages = lazy(() => import('../Packages/NewPackages'));


// Administration

const Administration = lazy(() => import('../Administration/Administration'));



// Settings

const GeneralSettings = lazy(() => import('../Settings/GeneralSettings'));
const UserType = lazy(() => import('../Settings/UserType'));
const NewUser = lazy(() => import('../Settings/UserType/NewUser'));


const EmailSettings = lazy(() => import('../Settings/EmailSettings'));
const PublicSite = lazy(() => import('../Settings/PublicSite'));
const Notifications = lazy(() => import('../Settings/Notification/Notifications'));
const SmsGateway = lazy(() => import('../Settings/SmsGateway'));




const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
        layout: 'default',
    },

   


     //Authentication
    {
        path: '/login',
        element: <Login />,
        layout: 'blank',
    },

    {
        path: '/forgot-password',
        element: <ForgotPassword />,
        layout: 'blank',
    },
    
    {
        path: '/otp',
        element: <OtpValidate />,
        layout: 'blank',
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
        layout: 'blank',
    },

     //resturants
     {
        path: '/resturants',
        element: <ResturantMain />,
        layout: 'default',
    },
    {
        path: '/resturants/add-new',
        element: <AddNewResturant />,
        layout: 'default',
    },

     //packages
     {
        path: '/packages',
        element: <Packages />,
        layout: 'default',
    },
    {
        path: '/packages/newpackages',
        element: <NewPackages />,
        layout: 'default',
    },

      //Administration
      {
        path: '/administration',
        element: <Administration />,
        layout: 'default',
    },


     //Settings
     {
        path: '/general-settings',
        element: <GeneralSettings />,
        layout: 'default',
    },
    {
        path: '/settings/user-type',
        element: <UserType />,
        layout: 'default',
    },
    {
        path: '/new-user',
        element: <NewUser />,
        layout: 'default',
    },
    
    {
        path: '/email-settings',
        element: <EmailSettings />,
        layout: 'default',
    },
    {
        path: '/settings',
        element: <GeneralSettings />,
        layout: 'default',
    },
    {
        path: '/public-sites',
        element: <PublicSite />,
        layout: 'default',
    }, {
        path: '/settings/notifications',
        element: <Notifications />,
        layout: 'default',
    }, {
        path: '/sms-gateways',
        element: <SmsGateway />,
        layout: 'default',
    },


];

export { routes };
