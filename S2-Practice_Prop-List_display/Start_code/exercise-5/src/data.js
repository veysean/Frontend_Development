/* Your data here */
import Ling from './assets/Ling.jpg';
import Namtan from './assets/Namtan.jpg';
import Film from './assets/Film.jpg';
import Orm from './assets/Orm.jpg';
export const Data = [
  {
    id: 1,
    name: "Ling",
    age: 29,
    hobby: "Gym",
    image:{
        src: Ling,
        alt: "A person lifting weights at the gym."
    },
  },
  {
        id: 2,
        name: "Orm",
        age: 22,
        hobby: "Play game",
        image:{
            src: Orm,
            alt: "A person playing with toys."
        },
    },
    {
        id: 3,
        name: "Namtan",
        age: 29,
        hobby: "Reading",
        image:{
            src: Namtan,
            alt: "A person smiling at the camera."
        },
    },
    {
        id: 4,
        name: "Film",
        age: 24,
        hobby: "Sing",
        image:{
            src: Film,
            alt: "A person singing into a microphone."
        },
    },
]