export function useCounter() {
    // สร้างตัวแปร state สำหรับเก็บค่า count
    const count = ref(0)

    // ฟังก์ชันเพิ่มค่า count
    const increment = () => {
        count.value++
    }

    // ฟังก์ชันลดค่า count
    const decrement = () => {
        count.value--
    }

    // คืนค่า state และฟังก์ชันกลับไปให้ Component เรียกใช้
    return { count, increment, decrement }
}