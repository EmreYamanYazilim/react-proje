import './App.css'
import Header from './components/Header/Header';
import { certificatesData } from "./components/Certificates/Data";
import Certificates from './components/Certificates/Certificates';
import './components/Certificates/Certificates.css'

function App() {

  return (
    <div>
        <Header />
      <div className='certificates-main'>
        {
          certificatesData?.map((certifica, index) => (
            <Certificates key={index} cer={certifica} />
          ))
        }
      </div>

    </div>
  )
}

export default App
