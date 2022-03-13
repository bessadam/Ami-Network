import PhilBalchin from "../images/Phil-Balchin.jpg"
import AlexGaynor from "../images/Alex.jpg"
import JinnFox from "../images/Jinn-Fox.jpg";
import JohnMcGrath from "../images/John-McGrath.jpeg";
import Wilmore from "../images/Wilmore.jpg";
import BenStraub from "../images/Ben-Straub.jpg"
import WillianFernandes from "../images/Willian-Fernandes.jpg";

export const MockPosts = [
  {
    category: "News",
    date: "23/02/2022",
    avatar: AlexGaynor,
    login: "Alex Gaynor",
    title: "«Платежная система Wise уходит из России — аккаунты скоро закроют принудительно",
    text: "Система международных переводов Wise перестает обслуживать клиентов из России. Сообщения с соответствующим содержанием 10 марта начали получать пользователи сервиса из страны-агрессора. Предполагается, что аккаунты закроют через 60 дней, причем в принудительном порядке. ",
    loggedIn: false,
    visibility: "Everyone",
    like: 14,
    heart: 5
  },
  {
    category: "Front-end",
    date: "22/02/2022",
    avatar: PhilBalchin,
    login: "Phil Balchin",
    title: "Как TypeScript связан с JavaScript?",
    text: "TypeScript — это синтаксическое надмножество JavaScript с открытым исходным кодом, которое компилируется в JavaScript. Все оригинальные библиотеки и синтаксис JavaScript по-прежнему работают, но TypeScript добавляет дополнительные параметры синтаксиса и функции компилятора, которых нет в JavaScript. TypeScript также может взаимодействовать с большинством тех же технологий, что и JavaScript, такими как Angular и jQuery.",
    loggedIn: true,
    visibility: "Everyone",
    like: 12,
    heart: 1
  },
  {
    category: "Front-end",
    date: "15/02/2022",
    avatar: AlexGaynor,
    login: "Alex Gaynor",
    title: "«Профессионала от новичка отличает качество разработки»: 7 принципов чистого и читаемого кода на JavaScript",
    text: "Я считаю, недостаточно только того, чтобы код работал. Часто на курсах по JavaScript учат, как использовать возможности языка и реализовывать тот или иной функционал, верстать дизайн. Но профессионала от новичка или самоучки отличает именно качество кода. Когда другим разработчикам просто не к чему придраться во время код-ревью, потому что все понятно, нет дублирования и других погрешностей. Чистый код легко поддерживать в дальнейшем.",
    loggedIn: false,
    visibility: "Everyone",
    like: 32,
    heart: 12
  },
  {
    category: "Back-end",
    date: "18/01/2022",
    avatar: JinnFox,
    login: "Jinn Fox",
    title: "Как я разгоняю интернет-магазины до сверхзвуковой скорости и вывожу в топ Google",
    text: "Не мне вам объяснять, что оптимизация сайта — это очень важно. От того, насколько качественно она настроена, зависит, понравится ли пользователю взаимодействовать с сайтом. Интернет-магазины с низкой производительностью и медленными страницами получат низкие коэффициенты конверсии в поисковой выдаче. В результате бизнес обгонят конкуренты.",
    loggedIn: true,
    visibility: "Everyone",
    like: 7,
    heart: 5
  },
  {
    category: "Mobile-app",
    date: "12/01/2022",
    avatar: JohnMcGrath,
    login: "John McGrath",
    title: "Дизайн-система в три раза повышает эффективность разработки: что это и как с ней работать",
    text: "Насколько систематизирован UI в вашем текущем проекте? Как часто вам приходилось уточнять полученный мокап (от англ. mock-up — макет — прим.) у дизайнеров? Или делать похожий на существующий скрин, но с модификациями?",
    loggedIn: false,
    visibility: "Everyone",
    like: 41,
    heart: 22
  },
  {
    category: "Books",
    date: "25/12/2021",
    avatar: Wilmore,
    login: "Wilmore",
    title: "Выйти на новый уровень: 7 главных книг IT-менеджеров",
    text: "Как стать менеджером? Это не то же самое, что освоить новый язык программирования, поэтому без рекомендаций тех, кто уже прошел этот путь, не обойтись.",
    loggedIn: true,
    visibility: "Everyone",
    like: 17,
    heart: 22
  },
  {
    category: "Theory",
    date: "23/12/2021",
    avatar: PhilBalchin,
    login: "Phil Balchin",
    title: "Objective-C: введение в наследование",
    text: "Одним из наиболее важных понятий в объектно-ориентированном программировании является наследование. Наследование позволяет нам определить класс в терминах другого класса, что облегчает создание и сопровождение приложения. Это также дает возможность повторного использования функциональности кода и ускоряет время проектирования приложений.",
    loggedIn: true,
    visibility: "Everyone",
    like: 65,
    heart: 44
  },
  {
    category: "Tasks",
    date: "18/12/2021",
    avatar: JohnMcGrath,
    login: "John McGrath",
    title: "Любимчик фронтендеров: дорожная карта для изучения React в 2022 году",
    text: "React — самый популярный JavaScript-фреймворк, который зарекомендовал себя как мощный инструмент для создания UI. А как освоить его или прокачать имеющиеся навыки?",
    loggedIn: false,
    visibility: "Everyone",
    like: 77,
    heart: 53
  },
  {
    category: "Testing",
    date: "17/12/2021",
    avatar: Wilmore,
    login: "Wilmore",
    title: "Как тестировать правильно.",
    text: "Техники тест-дизайна — это правила и подходы, которые помогают создавать грамотные тест-кейсы. Они помогают нам тестировать, не просто переходя со страницы на страницу, а объясняют, почему мы вводим определенные значения и какие конкретно значения нужно вводить.",
    loggedIn: true,
    visibility: "Everyone",
    like: 81,
    heart: 54
  },
  {
    category: "Hardware's",
    date: "15/12/2021",
    avatar: BenStraub,
    login: "Ben Straub",
    title: "«Что такое Web USB от Google: как из микроконтроллера сделать джойстик для онлайн-игры",
    text: "На YouTube-канале блогера Senior Software Vlogger появилось новое видео. В нем автор канала рассказал про малоизвестный стандарт Web USB — или возможность управлять USB-устройствами прямо из браузера.",
    loggedIn: true,
    visibility: "Everyone",
    like: 55,
    heart: 22
  },
  {
    category: "Interviews",
    date: "11/12/2021",
    avatar: BenStraub,
    login: "Ben Straub",
    title: "«Идти к психологу обязательно для каждого?!»",
    text: "Еще несколько лет назад ходить к психологу не считалось чем-то обыденным. Но сегодня айтишники все больше задумываются о терапии из-за выгорания, синдрома самозванца и других проблем. А некоторые — и вовсе сами становятся психологами.",
    loggedIn: true,
    visibility: "Everyone",
    like: 94,
    heart: 75
  },
  {
    category: "Others",
    date: "10/12/2021",
    avatar: WillianFernandes,
    login: "Willian Fernandes",
    title: "«Такого рекрутеры не видели никогда»: джуниор-разработчиков на React стали нанимать на зарплату $6500?",
    text: "На фоне дефицита сотрудников IT-компании готовы на многое в борьбе за специалистов – в сети появилась информация, что некоторые из них «осыпают» тысячами долларов молодых разработчиков. Что думаете по этому поводу?",
    loggedIn: false,
    visibility: "Everyone",
    like: 105,
    heart: 129
  },
];


export const postCategories = [
  "News" ,
  "Front-end",
  "Back-end",
  "Mobile-app",
  "Books",
  "Theory",
  "Tasks",
  "Testing",
  "Hardware's",
  "Interviews",
  "Others",
];

export const postViewers = [
  "Everyone", 
  "Only Authorized Users"
]; 