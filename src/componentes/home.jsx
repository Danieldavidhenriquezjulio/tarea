import './layout.css'
import {useNavigate} from "react-router-dom";
export default function Home(){
    const navigate = useNavigate();
    return (
        <>
            <div className="content">
                <br/>
                <br/>
                <h1>HASSLEFREEPAY</h1>
                <p>Hassleyfreepay is a virtual wallet capable of managing several cards and making transfers from it</p>
                <br/>
                <br/>
                <div className="row">
                    <div className="card">
                        <div style={{margin: 0, width: '80%', height: '100%'}}>
                            <div className="imgen"></div>
                            <button
                                onClick={() => {navigate('/about_us')}}
                            >About us</button>
                        </div>
                    </div>
                    <div className="card">
                        <div style={{margin: 0, width: '80%', height: '100%'}}>
                            <div className="imgen2"></div>
                            <button
                                onClick={() => {navigate('/team')}}
                            >Our team</button>
                        </div>
                    </div>
                    <div className="card">
                        <div style={{margin: 0, width: '80%', height: '100%'}}>
                            <div className="imgen3"></div>
                            <button
                                onClick={() => {navigate('/services')}}
                            >Services & products</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}