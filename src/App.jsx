import WeatherCard from './Components/WeatherCard.tsx';
import Fetcher from './Components/Fetcher.tsx';

function App() {
  return (
    <>
     <div className='flex flex-col items-center w-screen'>
      <h1 className='font-black '>Weather Above Ground</h1>
      <Fetcher />
    <WeatherCard/>
    </div>
    </>
  );
}

export default App;
