import { Suspense, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import './scss/style.scss';
import './App.css'
import AuthRouter from './navigation/AuthRouter';
import { useColorModes } from '@coreui/react';
import { useSelector } from 'react-redux';

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state: any) => state.theme)

  useEffect(() => {
    const urlParams: any = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <HashRouter>
      <Suspense
      // fallback={
      //   <div className="pt-3 text-center">
      //     <CSpinner color="primary" variant="grow" />
      //   </div>
      // }
      >
        <AuthRouter />
      </Suspense>
    </HashRouter>
  );
}

export default App;
