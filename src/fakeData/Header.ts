export const Header = {
    code: 'main_menu',
    menuItems: [
        {
            itemType: 'content',
            linkText: 'Appliances',
            path: 'appliances',
            id: 269,
            children: [
                {
                    itemType: 'category',
                    linkText: 'Laundry',
                    path: 'appliances/laundry',
                    id: 274,
                    children: [
                        {
                            itemType: 'category',
                            linkText: 'Washing Machines',
                            path: 'appliances/laundry/washing-machines',
                            id: 275,
                            children: [
                                {
                                    itemType: 'category',
                                    linkText: 'Freestanding Washing Machines',
                                    path:
                                        'appliances/laundry/washing-machines/freestanding-washing-machines',
                                    id: 276,
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            itemType: 'content',
            linkText: 'TV & Entertainment',
            path: 'tv-and-entertainment',
            id: 270,
            children: [],
        },
        {
            itemType: 'content',
            linkText: 'Mobiles',
            path: 'mobiles',
            id: 271,
            children: [],
        },
        {
            itemType: 'content',
            linkText: 'Smart Tech',
            path: 'smart-technology',
            id: 272,
            children: [],
        },
        {
            itemType: 'content',
            linkText: 'Computing',
            path: 'computing',
            id: 273,
            children: [],
        },
    ],
    name: 'Main menu',
    locale: 'en_GB',
}
