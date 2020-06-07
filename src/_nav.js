export default {
  items: [
    {
      name: 'Order',
      url: '/order',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Sample Header',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Order',
      url: '/order',
      icon: 'icon-drop',
    },
    {
      name: 'History',
      url: '/history',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Header',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Community',
      url: '/community',
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
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
      ],
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Support',
      url: '/support',
      icon: 'icon-star',
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
  ],
};
