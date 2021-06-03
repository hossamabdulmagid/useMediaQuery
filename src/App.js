import { useMediaQuery } from 'react-responsive'
import './App.css'
import BigScreen from './components/bigScreen/bigScreen.component'
import Desktop from './components/desktop/desktop.component'
import Laptop from './components/laptop/laptop.component'
import Mobile from './components/mobile/mobile.component'
import TabletMobile from './components/tablet-mobile/tabletMobile.component'



const App = () => {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });
  return (
    <div>
      <h1>React Responsive - a guide</h1>
      <>
        { isMobileDevice && <Mobile />}
        {isTabletDevice && <TabletMobile />}
        {isDesktop && <Desktop />}
        {isLaptop && <Laptop />}
        {isBigScreen && <BigScreen />}
      </>
    </div >


  )
}

export default App;