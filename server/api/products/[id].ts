export default defineEventHandler(async (event) => {
    // ดึงพารามิเตอร์ ID จาก URL
    const id = getRouterParam(event, 'id')

    // ตรวจสอบว่ามี ID ส่งเข้ามาหรือไม่
    if (!id) {
        // โยนข้อผิดพลาด 400 - Bad Request
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid product ID provided',
        })
    }

    // ดึงข้อมูลตัวอย่างจาก Mock Database
    const products = [
        { id: '1', name: 'Product A', price: 100 },
        { id: '2', name: 'Product B', price: 200 },
    ]

    // ค้นหาสินค้าในฐานข้อมูล
    const product = products.find((p) => p.id === id)

    // ถ้าไม่พบสินค้า
    if (!product) {
        // โยนข้อผิดพลาด 404 - Not Found
        throw createError({
            statusCode: 404,
            statusMessage: 'Product not found',
        })
    }

    // ส่งข้อมูลสินค้า
    return product
})
