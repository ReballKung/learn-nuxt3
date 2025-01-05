// ฟังก์ชันสำหรับดึงข้อมูลจาก API
export async function useFetchData(url: string) {
    // เก็บสถานะการโหลดข้อมูล
    const data = ref(null)
    const error = ref<string | null>(null)
    const loading = ref(true)

    try {
        // ดึงข้อมูลจาก API
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        data.value = await response.json()
    } catch (err) {
        // จัดการข้อผิดพลาด
        error.value = (err as Error).message
    } finally {
        // ปิดสถานะการโหลด
        loading.value = false
    }

    // คืนค่าออกไปใช้งาน
    return { data, error, loading }
}
