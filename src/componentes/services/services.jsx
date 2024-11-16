import './services.css'
import React from "react";

export default function Services(){
    const [visible, setvesible] = React.useState(false);
    const [visible2, setvesible2] = React.useState(false);
    const [mensaje, setmensaaje] = React.useState('show more');
    const [mensaje2, setmensaaje2] = React.useState('show more');

    function mostrar() {
        setvesible(!visible);

        if (visible) {
            setmensaaje('show more');
        }
        else {
            setmensaaje('show less');
        }
    }

    function mostrar2() {
        setvesible2(!visible2);

        if (visible2) {
            setmensaaje2('show more');
        }
        else {
            setmensaaje2('show less');
        }
    }

    return (
        <>
            <div className="content">

                <div className="card2">

                    <div className="content">

                        <h1>Services & produts</h1>

                        <div className="row">
                            <div className="cards">
                                <div style={{margin: 0, width: '80%', height: '100%', padding: 0}}>
                                    <h3>account linking</h3>
                                    <hr/>
                                    <div className="colun">
                                        <div className="caracteristica">
                                            <img src="si.png" alt="logo" style={{width: '15px', height: 'auto'}}/>
                                            <h6>linking multiple accounts</h6>
                                        </div>
                                        <div className="caracteristica">
                                            <img src="si.png" alt="logo" style={{width: '15px', height: 'auto'}}/>
                                            <h6>statistics of each</h6>
                                        </div>
                                        <div className="caracteristica">
                                            <img src="si.png" alt="logo" style={{width: '15px', height: 'auto'}}/>
                                            <h6>management of each</h6>
                                        </div>
                                        {visible?
                                            <div className="caracteristica">
                                                <img src="si.png" alt="logo" style={{width: '15px', height: 'auto'}}/>
                                                <h6>Delet account</h6>
                                            </div>: null}
                                    </div>
                                </div>
                                <button
                                    onClick={() =>
                                        mostrar()
                                }
                                > {mensaje}</button>
                            </div>

                            <div className="cards">
                                <div style={{margin: 0, width: '80%', height: '100%', padding: 0}}>
                                    <h3>Transfer</h3>
                                    <hr/>
                                    <div className="colun">
                                        <div className="caracteristica">
                                            <img src="si.png" alt="logo" style={{width: '15px', height: 'auto'}}/>
                                            <h6>Transfer money</h6>
                                        </div>
                                        <div className="caracteristica">
                                            <img src="si.png" alt="logo" style={{width: '15px', height: 'auto'}}/>
                                            <h6>Transfer record</h6>
                                        </div>
                                        <div className="caracteristica">
                                            <img src="si.png" alt="logo" style={{width: '15px', height: 'auto'}}/>
                                            <h6>International transfers</h6>
                                        </div>
                                        {visible2 ?
                                            <div className="caracteristica">
                                                <img src="si.png" alt="logo" style={{width: '15px', height: 'auto'}}/>
                                                <h6>fast transfers</h6>
                                            </div> : null}
                                    </div>
                                </div>
                                <button
                                    onClick={() =>
                                        mostrar2()
                                    }
                                > {mensaje2}</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}