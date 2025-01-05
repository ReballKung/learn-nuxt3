export default defineEventHandler((event) => {
    // โยน Error 500 แบบ Custom
    throw createError({
        statusCode: 500,
        statusMessage: 'Server Error: Something went wrong!',
    })
})
