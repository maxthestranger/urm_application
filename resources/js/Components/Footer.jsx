export default function Footer() {
    return (
        <footer className="w-full bg-white p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h2>
            <p className="text-gray-500 text-sm mb-1">Email: <a href="mailto:info@urm-app.com">info@urm-app.com</a></p>
            <p className="text-gray-500 text-sm mb-1">Phone: <a href="tel:+1-803-000-0000">+234-803-000-0000</a></p>
            <p className="text-gray-500 text-sm mt-4">
                &copy; {new Date().getFullYear()}. URM Application. All rights reserved
            </p>
        </footer>
    )
}
