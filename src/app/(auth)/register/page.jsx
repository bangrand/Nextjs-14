import BoardLogo from "@/components/BoardLogo";
import Link from "next/link";
import "../../globals.css";

const Register = () => {
    return (
        <div className="card">
            <div className="login-header-board">
                <BoardLogo />
            </div>
            <div className="login-header-text">
                <h6 className="login-text">Sign Up to continue</h6>
            </div>
            <form className="login-form form-add-task">
                <div className="user-box">
                    <input type="text" required />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="text" required />
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input type="text" required />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input type="text" required />
                    <label htmlFor="">Language</label>
                </div>
                <button className="button-submit">
                    Login
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                </button>
            </form>
            <p className="text-color-1">
                Already have a Board account? <Link href="login">Log in</Link>
            </p>
        </div>
    );
};

export default Register;
