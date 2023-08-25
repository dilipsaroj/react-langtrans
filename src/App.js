import './App.css';
import Header from './component/Header';
import {useTranslation} from 'react-i18next';

function App() {
  const [t] = useTranslation();
  return (
    <div className="wrapper">
          <Header />
          <div style={{textAlign:'center'}}>
            <h1>{t('welcome')}</h1>
            <h3>{t('greet')}</h3>
          </div>
    </div>
  );
}

export default App;
