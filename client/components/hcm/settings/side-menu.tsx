// Site settings page

const sampleData = [
    {
        category: 'General',
        items: [
            {
                name: 'Site Information',
                link: '/hcm/settings/site-information',
                icon: 'info'
            },
            {
                name: 'Site Settings',
                link: '/hcm/settings/site-settings',
                icon: 'settings'
            }
        ]
    }
]

export default function SettingsSideMenu() {
    return (
        <aside className="p-2.5 h-screen ">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    {sampleData.map((category, index) => (
                        <div key={index} className="">
                            <h2 className="text-4xl font-bold mb-2.5">{category.category}</h2>
                            <ul>
                                {category.items.map((item, index) => (
                                    <li key={index} className="">
                                        <a href={item.link}>
                                            <span className="material-icons">{item.icon}</span>
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
  }
  