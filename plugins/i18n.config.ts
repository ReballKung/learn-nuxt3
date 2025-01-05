import en from '~/locales/en.json'
import th from '~/locales/th.json'

export default defineI18nConfig(() => ({
    locales: ['en', 'th'], // ภาษาที่รองรับ: อังกฤษและไทย
    defaultLocale: 'en', // ภาษาเริ่มต้น
    legacy: false, // ใช้ Composition API
    messages: {
        en,
        th
    }
}))
