import quotes from "../../server/files/quotes.json";

export default defineEventHandler((event) => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return {
        api: quotes[randomNumber],
    }
})