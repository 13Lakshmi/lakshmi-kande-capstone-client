import "./Signup.scss";

function Signup(){
    return(
        <div>
            <div className="form__signup">
                <h2 className="signup__title">Signup</h2>
                <div className="form__input-box">
                <input
                    className="form__input"
                    type="text"
                    placeholder="Username"
                />
                </div>
                <div className="form__input-box">
                <input
                    className="form__input"
                    type="password"
                    placeholder="Password"
                />
                </div>
                <button className="signup__button" >Signup</button>
            </div>
        </div>
            
    );
}

export default Signup;