
const Login = () => {
    const handleLogin = () =>{
        console.log("Login Button clicked")
    }
    return (
        <div style={{textAlign: "center", margin: "50px"}}>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;