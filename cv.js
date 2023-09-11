const shows = [
    {
        year: 2023,
        title: "(Forthcoming) Virtu,",
        location: "Romance Info, Pittsburg, PA"
    },
    {
        year: 2023,
        title: "Scrap Yard Screenings,",
        location: "Sara's, New York, NY"
    },
    {
        year: 2023,
        title: "American Girl Diagnostics,",
        location: "Mery Gates, Brooklyn NY"
    },
    {
        year: 2023,
        title: "BYOUSB,",
        location: "Rhizome & Do Not Research, Queens, NY"
    },
    {
        year: 2022,
        title: "** Bishop71936,",
        location: "A+E Lab, Historic Dockyard Chatham, UK"
    },
    {
        year: 2022,
        title: "Steal My Sunshine Invitational,",
        location: "Mery Gates, Brooklyn, NY"
    },
    {
        year: 2022,
        title: "The Patriot,",
        location: "O'Flaherty's, New York, NY"
    },
    {
        year: 2021,
        title: "Sundae,",
        location: "Mcg21xoxo, Matsudo, Japan"
    },
    {
        year: 2021,
        title: "Do Not Research, Fall Issue,",
        location: "online"
    },
    {
        year: 2020,
        title: "Behind the Times,",
        location: "Alyssa Davis Gallery with Underground Flower, online"
    },
    {
        year: 2020,
        title: "** Office Luck & Bounty,",
        solo: true,
        location: "Offsite, Santa Monica, CA"
    },
    {
        year: 2019,
        title: "Strange Prayer",
        location: "Mery Gates, Brooklyn, NY"
    },
    {
        year: 2019,
        title: "Find Me In The Basement, I Will Perform Just For You",
        location: "Hillsdale, NY"
    },
    {
        year: 2019,
        title: "Jazz,",
        location: "Club Cringe, NY"
    },
    {
        year: 2019,
        title: "Staying Near You,",
        location: "Lubov, New York, NY"
    },
];
const resWorkshops = [
    {
        year: 2022,
        title: "Wave Field Synthesis Residency,",
        location: "A+E Lab & Game of Life Foundation, Historic Dockyard, Chatham, UK"
    },
    {
        year: 2019,
        title: "Crowley House Residency,",
        location: "Copake, NY"
    },
];
const press = [
    {
        year: 2023,
        title: "Three Short Blocks,",
        author: "Kay, Hannah Sage",
        location: "Screen Slate, September 1, 2023"
    },
    {
        year: 2023,
        title: "American Girl Diagnostics,",
        author: "Murray, Julia",
        location: "Office Magazine, August 6, 2023"
    },
    {
        year: 2022,
        title: "DNR 2021-2022,",
        location: "Rhizome Book Launch, New Museum, NY"
    },
    {
        year: 2022,
        title: "Multisystem Organ Failure,",
        location: "Animal Blood Magazine, Issue 3"
    },
    {
        year: 2020,
        author: "Tzvetnik.Online",
        title: "Solo Show: Chapter 5 / Behind the Times,",
        location: "Tzvetnik, August 1, 2020"
    },
    {
        year: 2019,
        author: "Hahn, Rachel",
        title: "​Café Forgot's New Pop-Up Brings Artful Fashion Into a Chinatown Gallery,",
        location: "Vogue, August 2, 2019"
    }
];

const sections = [
    {
        title: "Exhibitions",
        legend: "(**solo)",
        items: shows,
    },
    {
        title: "Residencies / Workshops",
        items: resWorkshops
    },
    {
        title: "Publications / Press",
        items: press
    }
];


const sortByYear = (items) => {
    const byYear = items.reduce((acc, item) => {
        acc[item.year] = acc[item.year] || [];
        acc[item.year].push(item);
        return acc
    }, {})
    return byYear;
}

const createYearList = (section) => {
    const listContainer = document.createElement('ol');
    listContainer.classname = "cv-section";
    const byYear = sortByYear(section.items);
    Object.keys(byYear).forEach(year => {
        const yearSection = document.createElement('li');
        yearSection.className = 'year-section';
        const header = document.createElement('h3');
        header.textContent = year;
        yearSection.appendChild(header);
        const itemSection = document.createElement('ol');
        const items = byYear[year];
        items.forEach((item) => {
            const itemContainer = document.createElement('li');
            itemContainer.className = "item";
            const title = document.createElement('span');
            title.className = "title";
            title.textContent = item.title;
            const location = document.createElement('span');
            location.className = "location";
            location.textContent = item.location;
            itemContainer.appendChild(title);
            itemContainer.appendChild(location);
            if (item.author) {
                const author = document.createElement('span');
                author.className= "author";
                author.textContent = item.author;
                itemContainer.prepend(author);
            }
            itemSection.append(itemContainer);
        })
        yearSection.appendChild(itemSection);
        listContainer.prepend(yearSection);
    })
    return listContainer;
}

const renderCV = () => {
    const container = document.getElementById('cv-js');
    sections.forEach(section => {
        const sectionContainer = document.createElement('section');
        sectionContainer.className = "cv-section";
        const header = document.createElement('h2');
        header.className = 'section-header';
        header.textContent = section.title;
        if (section.legend) {
            const legend = document.createElement('span');
            legend.className = "legend";
            legend.textContent = section.legend;
            legend.style = "margin-left: 0.5rem;";
            header.appendChild(legend)
        }
        header.className = "cv-header";
        sectionContainer.appendChild(header);
        sectionContainer.appendChild(createYearList(section));
        container.appendChild(sectionContainer);
    })
};

renderCV();


