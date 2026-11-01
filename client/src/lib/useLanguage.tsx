import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa kiểu dữ liệu cho ngôn ngữ: chỉ chấp nhận 'vi' hoặc 'en'
type Language = 'vi' | 'en';

// Định nghĩa kiểu dữ liệu cho Context
interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

// Tạo Context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Component Provider để bao bọc ứng dụng
export function LanguageProvider({ children }: { children: ReactNode }) {
    // Mặc định là tiếng Việt ('vi')
    const [language, setLanguage] = useState<Language>('vi');

    // Hàm chuyển đổi qua lại giữa VI và EN
    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'vi' ? 'en' : 'vi'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Hook tùy chỉnh để các component khác dễ dàng sử dụng
export function useLanguage() {
    const context = useContext(LanguageContext);

    // Kiểm tra xem hook có được gọi bên trong Provider chưa
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }

    return context;
}