import logo from '../assets/images/logo.png';
const Navbar=()=>{
    return(
        <div className="Navbar">
            <div className="col-2">
                <img src={logo} alt="logo" />
            </div>
            <div className="col-6">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                </div>
            </div>
        </div>
    );
}

export default  Navbar