
import GroupIcon from '@mui/icons-material/Group';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';

import livingImg from '../imegs/tabole.jpg';
import huImg from '../imegs/hu.jpg';
import journey from '../imegs/joope.jpg';
import doaer from '../imegs/doaer.jpg';
import home from '../imegs/home.jpg';
import laete from '../imegs/laete.jpg';
import livengs from '../imegs/livengs.jpg';
import waitgh from '../imegs/waitgh.jpg';

export const data = [{
    id: 1,
    title: "1500",
    description: "Satisfied clients",
    icon: <GroupIcon/>
},
{
    id: 2,
    title: "3000",
    description: "Projects done",
    icon: <MapsHomeWorkIcon/>
},
{
    id: 3,
    title: "10",
    description: "Years of experience",
    icon: <HourglassTopIcon/>
}
];

export const Services = [
    {
        id: 1,
        title: "Interior design from scratch ",
        description: "Transform your space into a personalized masterpiece with our comprehensive interior design services. From conceptualization to execution, we'll work closely with you to bring your vision to life, ensuring every detail reflects your unique style and personality.",
        icon: <ArrowForwardIosIcon/>,
        img: livingImg
    },
    {
        id: 2,
        title: "Redesign your house ",
        description: "Revitalize your existing space with our expert interior redesign services. Whether you're looking to update a single room or transform your entire home, we'll breathe new life into your surroundings, maximizing functionality and aesthetic appeal.",
        icon: <ArrowForwardIosIcon/>,
        img: huImg
    },
    {
        id: 3,
        title: "Free consultation",
        description: "Begin your design journey with a complimentary consultation. Let's discuss your ideas, goals, and budget, and explore how our services can help you achieve the home of your dreams. No obligations, just expert advice tailored to your needs.",
        icon: <ArrowForwardIosIcon/>,
        img: journey
    },
]

export const Reviews = [
    {
        id: 1,
        img: doaer,
    },
    {
        id: 2,
        img: home,
    },
    {
        id: 3,
        img: laete,
    },
    {
        id: 4,
        img: livengs,
    },
    {
        id: 5,
        img: waitgh,
    }
]

export const customerReviews = [
    {
        id : 1,
        title : "Sarah and John",
        description: "Stephanie's consultation was invaluable. Her insightful advice and recommendations helped us kickstart our home renovation project with confidence. We're thrilled with the outcome!"
    },
    {
        id : 2,
        title : "Alex Parker",
        description: "Working with Stephanie was a breeze! Her professionalism and expertise made the entire design process seamless. Our office now exudes creativity and productivity."
    },
    {
        id : 3,
        title : "Emily and David",
        description: "Stephanie's design transformed our house into a home. Her attention to detail and keen eye for aesthetics created a space that truly reflects our style and personality. We couldn't!"
    },
]

export const Asked = [
    {
        id: 1,
        title: "How much does your interior design service cost?",
        description: "I offer unqiue solutions based on the scope and scale of your project. During your free consultation, we'll discuss your budget and design goals to provide a tailored estimate.",
        icon: <QuestionMarkIcon/>
    },
    {
        id: 2,
        title: "What is the typical timeline for completing a design project?",
        description: "The timeline varies depending on the size and complexity of the project. I'll work closely with you to establish a realistic timeline and keep you informed at every stage.",
        icon: <QuestionMarkIcon/>
    },
    {
        id: 3,
        title: "Do you offer virtual design consultations?",
        description: "Yes, understanding the importance of flexibility, especially in today's digital age, I offer virtual consultations to accommodate clients who prefer remote communication.",
        icon: <QuestionMarkIcon/>
    },
    {
        id: 4,
        title: "Can you assist with purchasing furniture and decor for my space?",
        description: "Absolutely! I have established relationships with trusted vendors and can assist you in selecting furniture, decor, and accessories that align with your design vision and budget.",
        icon: <QuestionMarkIcon/>
    },
]

export const footerData = [{
    id: 1,
    title: "Contacts",
    description: "support@hello.com",
    Info: "+1-202-555-0127",
    icon: <PhoneAndroidIcon/>
},
{
    id: 2,
    title: "Location",
    description: "3961 Small Street",
    Info: "New York, NY 10001",
    icon: <LocationOnIcon/>
},
{
    id: 3,
    title: "Available hours",
    description: "Monday to Friday",
    Info: "10 am to 7 pm",
    icon: <QueryBuilderOutlinedIcon/>
}
];