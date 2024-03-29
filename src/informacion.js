import imgCard1 from './img/galeria2.jpg';
import imgCard2 from './img/galeria6.jpg';
import imgCard3 from './img/galeria4.jpg';
import imgCard4 from './img/galeria1.jpg';
import imgCard5 from './img/galeria5.jpg';
import imgCard6 from './img/galeria3.jpg';
import imgCard7 from './img/galeria7.jpg';
import imgCard8 from './img/galeria8.jpg';
import imgCard9 from './img/galeria9.jpg';
import imgCard10 from './img/galeria10.jpg';
import imgCard11 from './img/galeria11.jpg';
import imgCard12 from './img/galeria12.jpg';
import bgCard1 from './img/talleres1dark.png';
import bgCard2 from './img/talleres2dark.png';

const data = {
  dataLink: [
    {
      id: 1,
      enlace: "/",
      name: "Inicio",
    },
    {
      id: 2,
      enlace: "/talleres",
      name: "Talleres",
    },
    {
      id: 3,
      enlace: "/aboutus",
      name: "Qué Hacemos",
    },
    {
      id: 4,
      enlace: "/gallery",
      name: "Galería",
    },
    {
      id: 5,
      enlace: "/contact",
      name: "Contacto",
    },
  ],
  titulos: {
    titulo1: "taller de teatro",
    titulo2: "talleres",
    titulo3: "contacto",
    titulo4: "qué hacemos?",
    titulo5: "galería",
  },
  iconos: [
    {
      id: 1,
      iconoClass: "fab fa-facebook-f",
      iconoLink: "https://www.facebook.com/TallerHaceTeatro/",
    },
    {
      id: 2,
      iconoClass: "fab fa-instagram",
      iconoLink: "https://www.instagram.com/taller_hace_teatro/",
    },
    {
      id: 3,
      iconoClass: "far fa-envelope",
      iconoLink: "/contact",
    },
  ],
  cardHome: [
    {
      id: 1,
      icono: "fab fa-whatsapp",
      text: "0341 - 156835438",
    },
    {
      id: 2,
      icono: "fas fa-map-marker-alt",
      text: "TEATRO ODISEO - San Lorenzo 1329 - Rosario",
    },
  ],
  textos: {
    texto1: "Para Jóvenes Y Adultos",
    texto2: "Coordina: María Cecilia Borri",
    texto3: "El Taller es un espacio de entrenamiento actoral orientado a la creación escénica. Un espacio de expresión, diversión, trabajo en grupo, desarrollo de la imaginación y formación actoral. Un espacio para experimentar: lo único que hace falta es animarse, decidirse a probar, arriesgarse a poner la imaginación en juego y el cuerpo en el escenario: actuar, crear junto con otros. ",
    texto4: "Hacé Teatro!",
    texto5: "Taller de Teatro para Jóvenes y Adultos",
    texto6: "El taller propone un espacio de experimentación para indagar el lugar del actor/actriz en el proceso creativo. Es un espacio de reflexión y producción, con el objetivo de que cada participante pueda transitar una mirada propia sobre el hecho teatral y sobre el rol del actor/actriz. Se propone, mediante una aproximación práctica al oficio de la actuación, que los participantes lleven a escena un breve montaje surgido a partir del trabajo en el taller. ",
    texto7: "Para realizar del taller no es necesario tener experiencia previa en artes escénicas. Tanto artistas como público en general están invitados a participar. ",
    texto8: "El taller propone una clase semanal que parte de dos áreas de trabajo: entrenamiento actoral y producción de obras. Cada clase se organiza en dos momentos: una primera hora de entrenamiento, ejercicios para experimentar y aprender a manejar el cuerpo, la voz, la máscara, la energía, el miedo, el ridículo, la emoción, la forma, la creatividad… en el escenario, para aprender a improvisar. Para entender las reglas del juego que es el teatro. Luego, una segunda parte: producción, se aprende a hacer teatro haciendo, por lo que desde el comienzo se encara una producción colectiva, con vistas a exponerla hacia fin de año. ",
    texto9: "Conocé nuestro trabajo!",
    texto10: "Grupo Chatarra de Osamentas Teatro",
    texto11: "El Taller es un espacio de entrenamiento actoral orientado a la creación escénica. Un espacio de expresión, diversión, trabajo en grupo, desarrollo de la imaginación y formación actoral. Un espacio para experimentar: lo único que hace falta es animarse, decidirse a probar, arriesgarse a poner la imaginación en juego y el cuerpo en el escenario: actuar, crear junto con otros.",

  },
  talleres: [
    {
      id: 1,
      titulo: "Iniciales e Intermedios",
      img: bgCard1,
      horario1: "Lunes de 20:30 a 22:30 hs",
      horario2: "Miércoles de 20:30 a 22:30 hs",
      horario3: "Jueves de 20:30 a 22:30 hs",
      horario4: "Sábados de 10:00 a 12:00 hs",
    },
    {
      id: 2,
      titulo: "Avanzados",
      img: bgCard2,
      horario1: "Martes de 20:30 a 22:30 hs",
    },
    // {
    //   id: 3,
    //   titulo: "Adultos Mayores",
    //   img: imgCard3,
    //   horario1: "Jueves de 16:00 a 18:00 hs",
    // },
  ],
  formulario: {
    form1: {
      label: "Nombre:",
      placeHolder: "Ingresá tu nombre de pila",
      helpText: "",
    },
    form2: {
      label: "Dirección de e-mail:",
      placeHolder: "Ingresá tu e-mail",
      helpText: "No compartiremos tu e-mail",
    },
    form3: {
      label: "Dejá tu mensaje:",
      placeHolder: "Tu consulta es bienvenida!",
      helpText: "",
    },
  },
  linkAbout: {
    link1: {
      enlace:"https://www.youtube.com/user/ChatarraDeOsamentas",
      name:"Canal de Youtube",
    },
    link2: {
      enlace:"https://www.facebook.com/chatarradeosamentasteatro/",
      name:"Facebook",
    },
  },
  galeria: [
    {
      id: 1,
      index: 0,
      img: imgCard1,
      alt: "Imagen 1",
    },
    {
      id: 2,
      index: 1,
      img: imgCard2,
      alt: "Imagen 2",
    },
    {
      id: 3,
      index: 2,
      img: imgCard3,
      alt: "Imagen 3",
    },
    {
      id: 4,
      index: 3,
      img: imgCard4,
      alt: "Imagen 4",
    },
    {
      id: 5,
      index: 4,
      img: imgCard5,
      alt: "Imagen 5",
    },
    {
      id: 6,
      index: 5,
      img: imgCard6,
      alt: "Imagen 6",
    },
    {
      id: 7,
      index: 6,
      img: imgCard7,
      alt: "Imagen 7",
    },
    {
      id: 8,
      index: 7,
      img: imgCard8,
      alt: "Imagen 8",
    },
    {
      id: 9,
      index: 8,
      img: imgCard9,
      alt: "Imagen 9",
    },
    {
      id: 10,
      index: 9,
      img: imgCard10,
      alt: "Imagen 10",
    },
    {
      id: 11,
      index: 10,
      img: imgCard11,
      alt: "Imagen 11",
    },
    {
      id: 12,
      index: 11,
      img: imgCard12,
      alt: "Imagen 12",
    },
  ],
}

export default data;