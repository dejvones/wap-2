import { useState } from 'react';
import './styles/main.css';
import './styles/button.css'
import { Canvas } from './components/Canvas';
import { SelectBox } from './components/SelectBox';
import { DetailBox } from './components/DetailBox';
import { Size } from './models/IGraphic';
import { PlayBox } from './components/PlayBox';
import { Graphic } from './models/Graphic';
import { OperationType } from './models/enums';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const [status, setStatus] = useState<boolean>(false);
    const [operation, setOperation] = useState<OperationType>(0);
    const [selectedGraphic, setSelectedGraphic] = useState<Graphic | null>(null);
    const [removeTrigger, setRemoveTrigger] = useState<boolean>(false);
    const [size, setSize] = useState<Size>({width: 10, height: 10});

    return (
        <div>
            <div>
            <div className="row main">
                <div className="side">
                    <SelectBox
                        operation={operation}
                        setOperation={setOperation}
                        status={status}/>
                </div>
                <div>
                <PlayBox setStatus={setStatus} status={status} operation={operation}/>
                <Canvas
                    operation={operation}
                    callSelected={setSelectedGraphic}
                    removeTrigger={removeTrigger}
                    selectedSize={size}
                    status={status}
                    setStatus={setStatus}/>
                
                </div>


                <div className="right-side">
                    <DetailBox
                        operation={operation}
                        selectedGraphic={selectedGraphic}
                        removeClicked={() => setRemoveTrigger(!removeTrigger)}
                        setSize={setSize}
                        size={size}/>
                </div>
            </div>
            </div>
            <ToastContainer/>
        </div>
    );

}

export default App;
