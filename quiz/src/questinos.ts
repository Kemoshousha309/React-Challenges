export type Question = {
    readonly title: string,
    readonly options: string[],
    selected: number | null,
    answer: number
}


export const initQuestions: Question[] = [
    {
        title: "Who sang the title song for the latest Bond film, No Time to Die?",
        options: ["Adele","Sam Smith", "Billie Eilish"],
        selected: null,
        answer: 2
    },
    {
        title: "Which flies a green, white, and orange (in that order) tricolor flag?",
        options: ["Ireland","Ivory Coast", "Italy"],
        selected: null,
        answer: 0
    },
    {
        title: "What company makes the Xperia model of smartphone?",
        options: ["Samsung","Sony", "Nokia"],
        selected: null,
        answer: 1
    },
    {
        title: "Which city is home to the Brandenburg Gate?",
        options: ["Vienna","Zurich", "Berlin"],
        selected: null,
        answer: 2
    },
    {
        title: "Which of the following is NOT a fruit?",
        options: ["Rhubarb","Tomatoes", "Avocados"],
        selected: null,
        answer: 0
    },
    {
        title: "Where was the first example of paper money used?",
        options: ["China","Turkey", "Greece"],
        selected: null,
        answer: 0
    },
    {
        title: " Who is generally considered the inventor of the motor car?",
        options: ["Henry Ford","Karl Benz", "Henry M. Leland"],
        selected: null,
        answer: 1
    },
    {
        title: "If you were looking at Iguazu Falls, on what continent would you be?",
        options: ["Asia","Africa", "South America"],
        selected: null,
        answer: 2
    },
    {
        title: "What number was the Apollo mission that successfully put a man on the moon for the first time in human history? ",
        options: ["Apollo 11","Apollo 12", "Apollo 13"],
        selected: null,
        answer: 0
    },
    {
        title: "Which of the following languages has the longest alphabet?",
        options: ["Greek","Russian", "Arabic"],
        selected: null,
        answer: 1
    },
    {
        title: "Who was the lead singer of the band The Who?",
        options: ["Roger Daltrey","Don Henley", "Robert Plant"],
        selected: null,
        answer: 0
    },
    {
        title: "What spirit is used in making a Tom Collins?",
        options: ["Vodka","Rum", "Gin"],
        selected: null,
        answer: 2
    },
    {
        title: "What was the name of the Franco-British supersonic commercial plane that operated from 1976-2003?",
        options: ["Accord","Concorde", "Mirage"],
        selected: null,
        answer: 1
    },
    {
        title: "Which horoscope sign is a fish?",
        options: ["Aquarius","Cancer", "Pisces "],
        selected: null,
        answer: 2
    },
    
] 