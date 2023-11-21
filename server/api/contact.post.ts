import Mail from "~/server/mail.mjs";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return JSON.stringify({result: await new Mail().sendContact(body.email, body.message, body.name, body.phone, body.dispos)})
})