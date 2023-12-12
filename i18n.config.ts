import fr_translate from './lang/fr.mjs';
import en_translate from './lang/en.mjs';
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'fr',
    messages: {
        en: en_translate,
        // Traduction francais
        fr: fr_translate,
    }
}))