export function useAuth() {
    const user = ref<{ name: string } | null>(null)

    // ฟังก์ชันจำลองการเข้าสู่ระบบ
    const login = (username: string) => {
        user.value = { name: username } // จำลองผู้ใช้เข้าสู่ระบบ
    }

    // ฟังก์ชันออกจากระบบ
    const logout = () => {
        user.value = null
    }

    // คืนค่าผู้ใช้และฟังก์ชัน
    return { user, login, logout }
}
