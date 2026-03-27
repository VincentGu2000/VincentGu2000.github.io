/**
 * Junwen Gu's Personal Website
 * Internationalization Core Module
 */

const I18n = (function() {
    // 当前语言
    let currentLang = 'en';
    
    // 默认语言
    const defaultLang = 'en';
    
    // 支持的语言列表
    const supportedLangs = ['en', 'zh'];
    
    // localStorage键名
    const STORAGE_KEY = 'preferred_lang';
    
    /**
     * 初始化国际化模块
     */
    function init() {
        // 获取保存的语言偏好，如果没有则使用默认语言
        const savedLang = localStorage.getItem(STORAGE_KEY);
        currentLang = savedLang && supportedLangs.includes(savedLang) ? savedLang : defaultLang;
        
        // 应用翻译
        applyTranslations();
        
        // 更新语言切换按钮状态
        updateLangSwitchUI();
        
        console.log('i18n initialized, current language:', currentLang);
    }
    
    /**
     * 设置语言
     * @param {string} lang - 语言代码 ('en' 或 'zh')
     */
    function setLanguage(lang) {
        if (!supportedLangs.includes(lang) || lang === currentLang) {
            return;
        }
        
        currentLang = lang;
        
        // 保存到localStorage
        localStorage.setItem(STORAGE_KEY, currentLang);
        
        // 应用翻译
        applyTranslations();
        
        // 更新语言切换按钮状态
        updateLangSwitchUI();
        
        console.log('Language set to:', currentLang);
    }
    
    /**
     * 切换语言（保留用于兼容性）
     */
    function switchLanguage() {
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        setLanguage(newLang);
    }
    
    /**
     * 获取当前语言
     * @returns {string} 当前语言代码
     */
    function getCurrentLang() {
        return currentLang;
    }
    
    /**
     * 应用翻译到页面
     */
    function applyTranslations() {
        const langData = translations[currentLang];
        if (!langData) {
            console.error('Translation not found for language:', currentLang);
            return;
        }
        
        // 处理普通文本内容
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                el.textContent = langData[key];
            }
        });
        
        // 处理包含HTML的内容
        document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-html');
            if (langData[key]) {
                el.innerHTML = langData[key];
            }
        });
        
        // 更新页面标题
        document.title = langData.name || 'Junwen Gu | 顾俊文';
        
        // 更新html标签的lang属性
        document.documentElement.lang = currentLang;
    }
    
    /**
     * 更新语言切换按钮UI状态
     */
    function updateLangSwitchUI() {
        document.querySelectorAll('.lang-switch .lang-option').forEach(function(el) {
            const lang = el.getAttribute('data-lang');
            if (lang === currentLang) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }
    
    /**
     * 获取翻译文本
     * @param {string} key - 翻译键名
     * @returns {string} 翻译后的文本
     */
    function t(key) {
        const langData = translations[currentLang];
        return langData && langData[key] ? langData[key] : key;
    }
    
    // 公开API
    return {
        init: init,
        setLanguage: setLanguage,
        switchLanguage: switchLanguage,
        getCurrentLang: getCurrentLang,
        t: t
    };
})();
