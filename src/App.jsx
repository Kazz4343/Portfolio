import "./App.css";

import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar.jsx";


const App = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    })

    return (
        <div className={`app ${isLoaded ? "loaded" : ""}`}>
            <Navbar />         

            <Hero />
            <Projects />
            <Contact />

            <motion.footer
                className="footer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p>&copy; 2026 Kritsada Rodrit. All rights reserved.</p>
            </motion.footer>
        </div>
    )
}

export default App;