import IHobbies from "@/modules/about/types/IHobbies";
import {FaBookOpenReader} from "react-icons/fa6";
import {MdOutlineGames} from "react-icons/md";
const size = 32;

const getHobbiesData = async (lang: string) => lang === "en" ? en : es;

const es: IHobbies[] = [
    {
        name: "Lectura",
        icon: <FaBookOpenReader size={size} />,
        description: "Soy un lector apasionado, fascinado principalmente por la filosofía. \nDesde los estoicos Marco Aurelio y Séneca hasta los absurdistas Kafka y Camus, disfruto de autores que inspiran reflexión y despiertan la imaginación."},
    {
        name: "Video Juegos",
        icon: <MdOutlineGames size={size}/>,
        description: "Soy un apasionado de los videojuegos desde temprana edad. Aunque ahora juego con menos frecuencia que antes, sigo disfrutando plenamente de esta pasión que me acompaña desde siempre." }
]

const en: IHobbies[] = [
    {
        name: "Reading",
        icon: <FaBookOpenReader size={size} />,
        description: "I am a passionate reader, primarily fascinated by philosophy. \nFrom the Stoics Marcus Aurelius and Seneca to the absurdists Kafka and Camus, I enjoy authors who inspire reflection and ignite the imagination."
    },
    {
        name: "Video Games",
        icon: <MdOutlineGames size={size} />,
        description: "I have been passionate about video games since an early age. Although I now play less frequently than before, I still thoroughly enjoy this lifelong passion."
    }
]

export default getHobbiesData;