const menuIcon = document.querySelector('#menuIcon');
const closeMenu = document.querySelector('#closeMenu');
const menuDisplay = document.querySelector('#menuDisplay');
const homeIcon = document.querySelector('#homeIcon');
const Home = document.querySelector('#Home');
const aboutIcon = document.querySelector('#aboutIcon');
const About = document.querySelector('#About');
const skillsIcon = document.querySelector('#skillsIcon');
const Skills = document.querySelector('#Skills');
const projectsIcon = document.querySelector('#projectsIcon');
const Projects = document.querySelector('#Projects');
const contactIcon = document.querySelector('#contactIcon');
const Contact = document.querySelector('#Contact');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.add('hidden');
    closeMenu.classList.remove('hidden');
    menuDisplay.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
    menuIcon.classList.remove('hidden');
    closeMenu.classList.add('hidden');
    menuDisplay.classList.add('hidden');
});

homeIcon.addEventListener('click', () => {
    homeIcon.classList.add('active-link');
    aboutIcon.classList.remove('active-link');
    skillsIcon.classList.remove('active-link');
    projectsIcon.classList.remove('active-link');
    contactIcon.classList.remove('active-link');
});

Home.addEventListener('click', () => {
    Home.classList.add('active-link');
    About.classList.remove('active-link');
    Skills.classList.remove('active-link');
    Projects.classList.remove('active-link');
    Contact.classList.remove('active-link');
});

aboutIcon.addEventListener('click', () => {
    homeIcon.classList.remove('active-link');
    aboutIcon.classList.add('active-link');
    skillsIcon.classList.remove('active-link');
    projectsIcon.classList.remove('active-link');
    contactIcon.classList.remove('active-link');
});

About.addEventListener('click', () => {
    Home.classList.remove('active-link');
    About.classList.add('active-link');
    Skills.classList.remove('active-link');
    Projects.classList.remove('active-link');
    Contact.classList.remove('active-link');
});

skillsIcon.addEventListener('click', () => {
    homeIcon.classList.remove('active-link');
    aboutIcon.classList.remove('active-link');
    skillsIcon.classList.add('active-link');
    projectsIcon.classList.remove('active-link');
    contactIcon.classList.remove('active-link');
});

Skills.addEventListener('click', () => {
    Home.classList.remove('active-link');
    About.classList.remove('active-link');
    Skills.classList.add('active-link');
    Projects.classList.remove('active-link');
    Contact.classList.remove('active-link');
});

projectsIcon.addEventListener('click', () => {
    homeIcon.classList.remove('active-link');
    aboutIcon.classList.remove('active-link');
    skillsIcon.classList.remove('active-link');
    projectsIcon.classList.add('active-link');
    contactIcon.classList.remove('active-link');
});

Projects.addEventListener('click', () => {
    Home.classList.remove('active-link');
    About.classList.remove('active-link');
    Skills.classList.remove('active-link');
    Projects.classList.add('active-link');
    Contact.classList.remove('active-link');
});

contactIcon.addEventListener('click', () => {
    homeIcon.classList.remove('active-link');
    aboutIcon.classList.remove('active-link');
    skillsIcon.classList.remove('active-link');
    projectsIcon.classList.remove('active-link');
    contactIcon.classList.add('active-link');
});

Contact.addEventListener('click', () => {
    Home.classList.remove('active-link');
    About.classList.remove('active-link');
    Skills.classList.remove('active-link');
    Projects.classList.remove('active-link');
    Contact.classList.add('active-link');
});