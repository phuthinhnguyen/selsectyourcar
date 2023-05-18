const {useState ,useEffect,createContext, useContext,useRef, useCallback,useMemo } = React;

const App = () => {
  const carList = ["Mescedes S600", "Toyota Camry", "Audi A8"]
  const colorList = ["black","gray","white"]
  const  [selectedCar, setSelectedCar] = useState({car:carList[0],color:colorList[0]})
  const handleChange=(e)=>{
    setSelectedCar({...selectedCar, [e.target.name]:e.target.value})
  }
  return (
    <div>
      <label>Select a car</label>
      <select onChange={handleChange} name="car">
        {carList.map((car,index)=>
          <option key={index} value={car}>{car}</option>
        )}
      </select>
      <label>Select a color</label>
      <select onChange={handleChange} name="color">
        {colorList.map((color,index)=>
          <option key={index} value={color}>{color}</option>
        )}
      </select>
      <h2>You selected a {selectedCar.color} - {selectedCar.car}</h2>
    </div>
  );
  }

  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);