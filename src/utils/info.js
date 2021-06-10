import DefaultTable from '../assets/images/tables/deafult.png'
import wheelsTable1 from '../assets/images/wheels/wheelstable1.png'
import wheels1 from '../assets/images/wheels/wheels1.png'
import wheels2 from '../assets/images/wheels/wheels2.png'
import wheels3 from '../assets/images/wheels/wheels3.png'
import wheels4 from '../assets/images/wheels/wheels4.png'
import wheels5 from '../assets/images/wheels/wheels5.png'
import truck1 from '../assets/images/trucks/truck1.png'
import truck2 from '../assets/images/trucks/truck2.png'
import truck3 from '../assets/images/trucks/truck3.png'
import truck4 from '../assets/images/trucks/truck4.png'
import truck5 from '../assets/images/trucks/truck5.png'
import table1 from '../assets/images/tables/tabla1.png'
import table2 from '../assets/images/tables/tabla2.png'
import table3 from '../assets/images/tables/tabla3.png'
import table4 from '../assets/images/tables/tabla4.png'
import table5 from '../assets/images/tables/tabla5.png'
import table1Mini from '../assets/images/tables/tabla1mini.png'
import table2Mini from '../assets/images/tables/tabla2mini.png'
import table3Mini from '../assets/images/tables/tabla3mini.png'
import table4Mini from '../assets/images/tables/tabla4mini.png'
import table5Mini from '../assets/images/tables/tabla5mini.png'
import sandPaper1 from '../assets/images/sandpaper/lija1.png' 
import sandPaper2 from '../assets/images/sandpaper/lija2.png'
import sandPaper3 from '../assets/images/sandpaper/lija3.png' 
import sandPaper4 from '../assets/images/sandpaper/lija4.png'  
import sandPaper5 from '../assets/images/sandpaper/lija5.png' 
import TruckDefault from '../assets/images/trucks/truck.png'
import TableDefault from '../assets/images/tables/defaultable.png'
import SandPaperDefault from '../assets/images/sandpaper/sandpaper.png'

const categories = [
    {
        name:"wheels",
        title:"Escoge tus ruedas",
        default:DefaultTable,
        products:[{
            name:"Black Core 85A",
            price:70000,
            tableImage:wheelsTable1,
            image:wheels1
        },
        {
            name:"Simple Co Black",
            price:90000,
            tableImage:wheelsTable1,
            image:wheels2
        },
        {
            name:"Jesse The Hardest",
            price:120000,
            tableImage:wheelsTable1,
            image:wheels3
        },
        {
            name:"Animal Co Art",
            price:70000,
            tableImage:wheelsTable1,
            image:wheels4
        },
        {
            name:"OJ Super Juice",
            price:150000,
            tableImage:wheelsTable1,
            image:wheels5
        },
    ]
    },
    {
        name:"trucks",
        title:"Escoge tus trucks",
        default:TruckDefault,
        products:[{
            name:"Trucks Tracker Black",
            price:190000,
            tableImage:wheelsTable1,
            image:truck1
        },
        {
            name:"LiteZooed Blue",
            price:120000,
            tableImage:wheelsTable1,
            image:truck2
        },
        {
            name:"Animal Co Powder",
            price:110000,
            tableImage:wheelsTable1,
            image:truck3
        },
        {
            name:"Animal Co Raw",
            price:110000,
            tableImage:wheelsTable1,
            image:truck4
        },
        {
            name:"LiteZooed Cyan",
            price:150000,
            tableImage:wheelsTable1,
            image:truck5
        },
    ]
    },
    {
        name:"tables",
        title:"Escoge la tabla",
        default:TableDefault,
        products:[{
            name:"Pegatina Criolla",
            price:140000,
            tableImage:wheelsTable1,
            image:table1
        },
        {
            name:"Animal Co",
            price:140000,
            tableImage:wheelsTable1,
            image:table2
        },
        {
            name:"Baekkel Swamp",
            price:230000,
            tableImage:wheelsTable1,
            image:table3
        },
        {
            name:"Baekkel Swamp",
            price:250000,
            tableImage:wheelsTable1,
            image:table4
        },
        {
            name:"Wilkins Infinite",
            price:330000,
            tableImage:wheelsTable1,
            image:table5
        },
    ]
    },
    {
        name:"sandpaper",
        title:"Escoge la lija",
        default:SandPaperDefault,
        products:[{
            name:"Tortugas Ninja",
            price:45000,
            tableImage:wheelsTable1,
            image:sandPaper1
        },
        {
            name:"Animal Co Elefantes",
            price:25000,
            tableImage:wheelsTable1,
            image:sandPaper2
        },
        {
            name:"Animal Co Gato",
            price:25000,
            tableImage:wheelsTable1,
            image:sandPaper3
        },
        {
            name:"Mob Grip High",
            price:40000,
            tableImage:wheelsTable1,
            image:sandPaper4
        },
        {
            name:"Grip Motorhead",
            price:40000,
            tableImage:wheelsTable1,
            image:sandPaper5
        },
    ]
    }
];

export default {categories}