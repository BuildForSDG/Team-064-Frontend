import { isAuthUserType } from './services/Auth'

const customer =  {
  items: [
    {
      name: 'My Account',
      url: '/account',
      icon: 'icon-speedometer',
    },
    {
      name: 'Order',
      url: '/dashboard',
      icon: 'icon-pencil',
    },
    {
      name: 'Community',
      url: '/community',
      icon: 'icon-pencil',
    },
    {
      name: 'History',
      url: '/history',
      icon: 'icon-pencil',
    },
    {
      name: 'Support',
      url: '/support',
      icon: 'icon-pencil',
    },
    {
      name: 'About',
      url: '/about',
      icon: 'icon-pencil',
    },
  ],
};

const agent =  {
  items: [
    {
      name: 'My Account',
      url: '/account',
      icon: 'icon-speedometer',
    },
    {
      name: 'Pickups',
      url: '/pickups',
      icon: 'icon-star',
      children: [
        {
          name: 'New',
          url: '/pickups/new',
          icon: 'icon-star',
        },
        {
          name: 'Pending',
          url: '/pickups/pending',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'History',
      url: '/history',
      icon: 'icon-pencil',
    },
    {
      name: 'Support',
      url: '/support',
      icon: 'icon-pencil',
    },
  ],
};

const admin =  {
  items: [
    {
      name: 'My Account',
      url: '/account',
      icon: 'icon-speedometer',
    },
    {
      name: 'Agents',
      url: '/agent',
      icon: 'icon-star',
      children: [
        {
          name: 'Add',
          url: '/agent/edit',
          icon: 'icon-star',
        },
        {
          name: 'Review',
          url: '/agent/review',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Communty',
      url: '/communty',
      icon: 'icon-star',
      children: [
        {
          name: 'Add',
          url: '/community/edit',
          icon: 'icon-star',
        },
        {
          name: 'Review',
          url: '/community',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Customer',
      url: '/customer',
      icon: 'icon-pencil',
    },
  ],
};


let nav;
switch (isAuthUserType()){
  case 'customer':
    nav = customer;
    break;
  case 'agent':
    nav = agent;
    break;
  case 'admin':
    nav = admin;
    break;
  default:
    nav = {};
    break;
}

export default nav;

// export default {
//   items: [
//     {
//       name: 'Order',
//       url: '/order',
//       icon: 'icon-speedometer',
//       badge: {
//         variant: 'info',
//         text: 'NEW',
//       },
//     },
//     {
//       title: true,
//       name: 'Sample Header',
//       wrapper: {            // optional wrapper object
//         element: '',        // required valid HTML5 element tag
//         attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
//       },
//       class: ''             // optional class names space delimited list for title item ex: "text-center"
//     },
//     {
//       name: 'Order',
//       url: '/order',
//       icon: 'icon-drop',
//     },
//     {
//       name: 'History',
//       url: '/history',
//       icon: 'icon-pencil',
//     },
//     {
//       title: true,
//       name: 'Header',
//       wrapper: {
//         element: '',
//         attributes: {},
//       },
//     },
//     {
//       name: 'Community',
//       url: '/community',
//       icon: 'icon-star',
//       children: [
//         {
//           name: 'Add',
//           url: '/community/edit',
//           icon: 'icon-star',
//         },
//         {
//           name: 'Review',
//           url: '/community',
//           icon: 'icon-star',
//           badge: {
//             variant: 'secondary',
//             text: '4.7',
//           },
//         },
//       ],
//     },
//     {
//       divider: true,
//     },
//     {
//       title: true,
//       name: 'Extras',
//     },
//     {
//       name: 'Support',
//       url: '/support',
//       icon: 'icon-star',
//     },
//     {
//       name: 'Disabled',
//       url: '/dashboard',
//       icon: 'icon-ban',
//       attributes: { disabled: true },
//     },
//   ],
// };
