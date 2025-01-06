export default defineEventHandler((event) => {
    const { slug } = event.context.params || {}
    return { message: `You requested: ${slug}` }
})
