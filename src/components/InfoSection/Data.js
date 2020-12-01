import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Premium Bank",
    headline: "Unlimited Transictions with zero fees",
    description: `Get access to our exclusive app that allows you
    to send unlimited trnsactions without getting charged any fees.`,
    buttonLabel: 'Get started',
    imgStart: false,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    img: svg1
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Unlimited Access",
    headline: "Login to your account at any time",
    description: `We have you covered no matteer where you are located. All
    you need is an internet connection and a phone or computer.`,
    buttonLabel: 'Learn More',
    imgStart: true,
    alt: 'Piggy',
    dark: false,
    primary: false,
    darkText: true,
    img: svg2
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Join Our Team",
    headline: "Creating an account is extremly easy",
    description: `Get everything set up and ready under 10 minutes. All
    you need to do is add your information and you're ready to go.`,
    buttonLabel: 'Start Now',
    imgStart: false,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    img: svg3
}