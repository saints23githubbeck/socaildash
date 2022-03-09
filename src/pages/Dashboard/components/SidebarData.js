import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
    {
        title: 'Admin',
        icon: <FaIcons.FaUser />,
        path: "#",
        cName: '.navText',
        children:[
            {
                title: 'Dashboard',
                path: '/admin/dashboard',
                icon: <MdIcons.MdDashboard />,
                cName: '.navText',
            },
            {
                title: 'Users',
                path: '/admin/users',
                icon: <FaIcons.FaUser />,
                cName: '.navText',
            },
                {
                title: 'Plan',
                path: '/admin/plans',
                icon: <AiIcons.AiOutlineSchedule/>,
                cName: '.navText',
            },
            {
                title: 'Coupons',
                path: '/admin/coupons',
                icon: <FaIcons.FaCoins />,
                cName: '.navText',
            },
            {
                title: 'Order',
                path: '/admin/orders',
                icon: <FaIcons.FaCreditCard />,
                cName: '.navText',
            },
           
            {
                title: 'Settings',
                path: '/admin/settings',
                icon: <AiIcons.AiFillSetting />,
                cName: '.navText',
            },
        ]
    },
    {
        title: 'User Page',
        path: "#",
        icon: <MdIcons.MdGroups />,
        cName: '.navText',
        children:[
            {
                title: 'User Dashboard',
                path: '/user/Dashboard',
                icon: <FaIcons.FaUser />,
                cName: '.navText',
            },
        ]
    },
    {
        title: 'Socials',
        path: "#",
        icon: <BsIcons.BsFillChatFill />,
        cName: '.navText',
        children:[
            {
                title: 'Facebook',
                path: '/socials/facebook',
                icon: <BsIcons.BsFacebook />,
                cName: '.navText',
            },
            {
                title: 'Twitter',
                path: '/socials/twitter',
                icon: <BsIcons.BsTwitter />,
                cName: '.navText',
            },
            {
                title: 'Linkedin',
                path: '/socials/linkedin',
                icon: <BsIcons.BsLinkedin />,
                cName: '.navText',
            },
            {
                title: 'Youtube',
                path: '/socials/youtube',
                icon: <BsIcons.BsYoutube />,
                cName: '.navText',
            },
            {
                title: 'Instagram',
                path: '/socials/instagram',
                icon: <BsIcons.BsInstagram />,
                cName: '.navText',
            },
        ]
    },
    {
        title: 'Ads',
        path: "#",
        icon: <FcIcons.FcAdvertising />,
        cName: '.navText',
        children:[
            {
                title: 'Facebook Ads',
                path: '/ads/facebook',
                icon: <BsIcons.BsFacebook />,
                cName: '.navText',
            },
            {
                title: 'Twitter Ads',
                path: '/ads/twitter',
                icon: <BsIcons.BsTwitter />,
                cName: '.navText',
            },
            {
                title: 'Linkedin Ads',
                path: '/ads/linkedin',
                icon: <BsIcons.BsLinkedin />,
                cName: '.navText',
            },
            {
                title: 'Youtube Ads',
                path: '/ads/youtube',
                icon: <BsIcons.BsYoutube />,
                cName: '.navText',
            },
            {
                title: 'Google Ads',
                path: '/ads/google',
                icon: <BsIcons.BsGoogle />,
                cName: '.navText',
            },
            {
                title: 'Instagram Ads',
                path: '/ads/instagram',
                icon: <BsIcons.BsInstagram />,
                cName: '.navText',
            },
        ]
    },
    {
        title: 'Integration',
        path: '/integration',
        icon: <FaIcons.FaPlug />,
        cName: '.navText',
    },
    
    
      
]