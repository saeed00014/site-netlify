import program1 from './images/program1.jpg'
import program2 from './images/program2.jpg'
import program3 from './images/program3.jpg'
import program4 from './images/program4.jpg'


import value1 from './images/value1.jpg'
import value2 from './images/value2.jpg'
import value3 from './images/value3.jpg'
import value4 from './images/value4.jpg'
import value5 from './images/value5.jpg'




import shop1 from './images/shop1.jpg'
import shop2 from './images/shop2.jpg'
import shop3 from './images/shop3.jpg'


import ava1 from "./images/avatar1.jpg"
import ava2 from "./images/avatar2.jpg"
import ava3 from "./images/avatar3.jpg"
import ava4 from "./images/avatar4.jpg"
import ava5 from "./images/avatar5.jpg"



import package1 from "./images/silver.jpg"
import package2 from "./images/gold.jpg"
import package3 from "./images/bronze.jpg"



import Trainer1 from './images/trainer1.jpg'
import Trainer2 from './images/trainer2.jpg'
import Trainer3 from './images/trainer3.jpg'
import Trainer4 from './images/trainer4.jpg'
import Trainer5 from './images/trainer5.jpg'
import Trainer6 from './images/trainer6.jpg'




export const links = [
    {
        id:1,
        name: "Home",
        path: '/'
    },
    {
        id:2,
        name: "About",
        path: '/about'
    },{
        id:4,
        name: "Plans",
        path: '/plans'
    },
    {
        id:5,
        name: "Trainers",
        path: '/trainers'
    }
]







export const programs = [
    {
        id: 1,
        image: program1,
        info: "Are You New and just want to Get Started",
        path: "plans/programs/111"
    },
    {
        id: 2,
        image: program2,
        info: "You Are New but You Want to Try Hard",
        path: "plans/programs/222"
    },
    {
        id: 3,
        image: program3,
        info: "You Are Exprienced and Need to Stay Shaped",
        path: "plans/programs/333"
    },
    {
        id: 4,
        image: program4,
        info: "You Want to Become a Legend",
        path: "plans/programs/321433"
    }
]


    export const plans = [
        {
            id: 1,
            title: 'Bronze Package',
            image: package3,
            dis: 'This package is perfect for beginners who need constant help',
            price: 29.99,
            features: [
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fifth Feature', available: true},
                {feature: 'Fifth Feature Plus', available: false},
                {feature: 'Sixth Feature', available: false},
                {feature: 'Seventh Feature', available: false},
                {feature: 'Seventh Feature Plus', available: false},
                {feature: 'Eighth Feature', available: false},
                {feature: 'Ninth Feature', available: false},
                {feature: 'Tenth Feature', available: false},
            ]
        },
        {
            id: 2,
            title: 'Silver Package',
            image: package1,
            dis: 'This is the perfect package for beginners',
            price: 49.99,
            features: [
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fifth Feature', available: true},
                {feature: 'Fifth Feature Plus', available: true},
                {feature: 'Sixth Feature', available: true},
                {feature: 'Seventh Feature', available: true},
                {feature: 'Seventh Feature Plus', available: true},
                {feature: 'Eighth Feature', available: false},
                {feature: 'Ninth Feature', available: false},
                {feature: 'Tenth Feature', available: false},
            ]
        },
        {
            id: 3,
            title: 'Gold Package',
            image: package2,
            dis: 'This package is perfect for more exprienced athletes',
            price: 89.99,
            features: [
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fifth Feature', available: true},
                {feature: 'Fifth Feature Plus', available: true},
                {feature: 'Sixth Feature', available: true},
                {feature: 'Seventh Feature', available: true},
                {feature: 'Seventh Feature Plus', available: true},
                {feature: 'Eighth Feature', available: true},
                {feature: 'Ninth Feature', available: true},
                {feature: 'Tenth Feature', available: true},
            ]
        }
    ]




export const values = [
    {
        id: 1,
        image: value1,
        title: "",
        desc: ""
    },
    {
        id: 2,
        image: value2,
        title: "",
        desc: ""
    },
    {
        id: 3,
        image: value3,
        title: "",
        desc: ""
    },
    {
        id: 4,
        image: value4,
        title: "",
        desc: ""
    },
    {
        id: 5,
        image: value5,
        title: "",
        desc: ""
    }
]






export const shop = [
    {
        id: '1',
        image: shop1,
        dis: '1.5kg gain weight powder',
        title: "Suger Protein Powder",
        price: "39.99",
        size: "12x8x5 Inch (Pack of 1)",
        color: "black"
    },
    {
        id: '2',
        image: shop2,
        dis: "3kg pre wokout powder",
        title: "Pre Workout Powder",
        price: "22.99",
        size: "12x8x5 Inch (Pack of 1)",
        color: "black"
    },
    {
        id:'shop5',
        image: shop3,
        dis: "500gr vitamin pills",
        title: "Multi Vitamin",
        price: "9.99",
        size: "12x8x5 Inch (Pack of 1)",
        color: "black"
    },
]


export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]




    export const testimonials = [
        {
            id: 1,
            name: "Diana Ayi",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
            job: "Student",
            avatar: ava1
        },
        {
            id: 2,
            name: "Daniel Vinyo",
            quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
            job: "Software Egineer",
            avatar: ava2
        },
        {
            id: 3,
            name: "Edem Quist",
            quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
            job: "University Lecturer",
            avatar: ava3
        },
        {
            id: 4,
            name: "Grace Lavoe",
            quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
            job: "Talking Parrot",
            avatar: ava4
        },
        {
            id: 5,
            name: "Nana Yaa Dankwa",
            quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
            job: "Pharmacist",
            avatar: ava5
        }
    ]

       
        export const trainers = [
            {
                id: 1,
                image: Trainer1,
                name: 'John Doe',
                job: 'Aerobic Trainer',
                followers: '9k',
                students: '2359',
                year: '13',
                socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
            },
            {
                id: 2,
                image: Trainer2,
                name: 'Daniel vinyo',
                job: 'Speed Trainer',
                followers: '2k',
                students: '1359',
                year: '10',
                socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
            },
            {
                id: 3,
                image: Trainer3,
                name: 'Edem Quist',
                job: 'Flexibility Trainer',
                followers: '1k',
                students: '59',
                year: '1',
                socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
            },
            {
                id: 4,
                image: Trainer4,
                name: 'Shatta Wale',
                job: 'Body Composition Trainer',
                followers: '8k',
                students: '1459',
                year: '7',
                socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
            },
            {
                id: 5,
                image: Trainer5,
                name: 'Diana Ayi',
                job: 'Circuit Trainer',
                followers: '2k',
                students: '459',
                year: '3',
                socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
            },
            {
                id: 6,
                image: Trainer6,
                name: 'Wayne Carter',
                job: 'Physical Intelligence Trainer',
                followers: '4k',
                students: '359',
                year: '2',
                socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
            }
        ]
    
