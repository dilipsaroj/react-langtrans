import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from '../src/locales/en/translationEn.json';
import translationFN from '../src/locales/fn/translationFn.json';

// the translation
const resources ={
    
    en:{
        translation:translationEN
    },
    fn:{
        translation:translationFN
    }
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng:'en',
    keySeparator:false,

    interpolation:{
        escapeValue:false
    }
    
});

export default i18n;