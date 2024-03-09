import Link from "next/link";
const Links = () => {
    const links = [
        {
            title: "Board",
            path: "/",
        },
        {
            title: "Register",
            path: "/register",
        },
        {
            title: "Forgot-password",
            path: "/forgot-password",
        },
        {
            title: "Login",
            path: "/login",
        },
    ];
    return (
        <div>
            {links.map((link) => (
                <Link href={link.path} key={link.title}>
                    {link.title}
                </Link>
            ))}
        </div>
    );
};

export default Links;
