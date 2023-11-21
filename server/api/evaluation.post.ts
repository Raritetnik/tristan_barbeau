import Mail from "~/server/mail.mjs";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return JSON.stringify({result: await new Mail().sendEvaluation(body.email, body.name, body.phone, body.adresse)})
})