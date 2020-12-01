import './App.css';
import './css/tailwind.css';

import {useState} from 'react';

function load (visble){
    if(visble === false){
      return <p className='p-4'>Right now this section is small so there is not scrollbar. once we click on button, it will load a big dynamic content. Scrollbar will appear but it will not disturb other section.</p>;
    }else{

      return <div className='p-4 bg-blue-400 flex flex-col'>
      <span className='p-1 mt-4 rounded bg-red-200'>Afghanistan</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Albania</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Algeria</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Andorra</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Angola</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Antigua and Barbuda</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Argentina</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Armenia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Australia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Austria</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Austrian Empire</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Azerbaijan</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Baden*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Bahamas, The</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Bahrain</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Bangladesh</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Barbados</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Bavaria*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Belarus</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Belgium</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Belize</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Benin (Dahomey)</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Bolivia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Bosnia and Herzegovina</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Botswana</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Brazil</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Brunei</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Brunswick and Lüneburg</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Bulgaria</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Burkina Faso (Upper Volta)</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Burma</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Burundi</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Cabo Verde</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Cambodia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Cameroon</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Canada</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Cayman Islands, The</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Central African Republic</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Central American Federation*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Chad</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Chile</span>
      <span className='p-1 mt-4 rounded bg-red-200'>China</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Colombia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Comoros</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Congo Free State, The</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Costa Rica</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Cote d’Ivoire (Ivory Coast)</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Croatia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Cuba</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Cyprus</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Czechia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Czechoslovakia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Democratic Republic of the Congo</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Denmark</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Djibouti</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Dominica</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Dominican Republic</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Duchy of Parma, The*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>East Germany (German Democratic Republic)</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Ecuador</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Egypt</span>
      <span className='p-1 mt-4 rounded bg-red-200'>El Salvador</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Equatorial Guinea</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Eritrea</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Estonia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Eswatini</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Ethiopia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Federal Government of Germany (1848-49)*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Fiji</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Finland</span>
      <span className='p-1 mt-4 rounded bg-red-200'>France</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Gabon</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Gambia, The</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Georgia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Germany</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Ghana</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Grand Duchy of Tuscany, The*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Greece</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Grenada</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Guatemala</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Guinea</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Guinea-Bissau</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Guyana</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Haiti</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Hanover*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Hanseatic Republics*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Hawaii*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Hesse*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Holy See</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Honduras</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Hungary</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Iceland</span>
      <span className='p-1 mt-4 rounded bg-red-200'>India</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Indonesia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Iran</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Iraq</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Ireland</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Israel</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Italy</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Jamaica</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Japan</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Jordan</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Kazakhstan</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Kenya</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Kingdom of Serbia/Yugoslavia*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Kiribati</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Korea</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Kosovo</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Kuwait</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Kyrgyzstan</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Laos</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Latvia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Lebanon</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Lesotho</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Lew Chew (Loochoo)*</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Liberia</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Libya</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Liechtenstein</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Lithuania</span>
      <span className='p-1 mt-4 rounded bg-red-200'>Luxembourg</span>
    </div>


    }

}
function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{height: `100vh`}} className="flex flex-col">
      <header className='flex-none'>
          <div style={{height: 80}} className='text-gray-50 text-xl text-center bold p-4 bg-indigo-900'>This is a Header</div>
      </header>
      <div style={{height: 0}} className='flex-grow flex'>
          <div style={{width: 70}} className='p-4 bg-yellow-900 flex flex-col items-center justify-between flex-none'>
            <div className='flex flex-col'>
              <span>☀</span>
              <span>☁</span>
              <span>☂</span>
              <span>☯</span>
            </div>
            
            <div className='flex flex-col'>
              <span>☄</span>
              <span>★</span>            
            </div>
            
          </div>  
          <div className='flex-grow flex'>
            <div style={{width: 270}}  className='p-4 flex-none bg-yellow-200'>
              <h1>Your Profile</h1>
              <img alt="User" className="p-4 rounded-full" src="https://media2.giphy.com/media/3o84U7IeOoPUfi0SCQ/giphy.gif" style={{width: 200}}></img>
            </div>  

            <div className='flex-grow flex flex-col bg-red-400 p-4'>
              <div className='p-2 text-white bg-gray-600'>List of few Countries
                <button onClick={()=>{
                  setVisible(true)
                }} className='ml-4 border p-2 bg-blue-600 rounded focus:outline-none hover:text-white hover:bg-blue-900 text-gray-200'>Click here to Load</button>
              </div>
              <div className='bg-blue-400 flex-grow overflow-auto'>
                {
                  load(visible)
                }
              </div>
            </div>  


          </div>
        
      </div>
    </div>
  );
}

export default App;
