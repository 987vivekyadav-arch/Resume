import React from "react";
import "./App.css";

function App() {

    const projects = [

        {
            title: "Amazon Clone",
            tech: "React • JavaScript • CSS",
            description:
                "Responsive e-commerce frontend built using React with product display and cart functionality.",
            github:
                "https://github.com/987vivekyadav-arch/amazon-clone",
            demo:
                "https://amazon-clone-theta-lime.vercel.app/"
        },

        {
            title: "Expense Tracker",
            tech: "React • JavaScript • CSS",
            description:
                "Expense tracking application for managing income, expenses and balance using React state.",
            github:
                "https://github.com/987vivekyadav-arch/Expense-tracker-2",
            demo:
                "https://expense-tracker-2-phi.vercel.app/"
        },

        {
            title: "Weather App",
            tech: "React • API • CSS",
            description:
                "Weather application using an API with city search, loading and error handling.",
            github:
                "https://github.com/987vivekyadav-arch/newest-weather-app",
            demo:
                "https://newest-weather-app.vercel.app/"
        },

        {
            title: "Movie Search",
            tech: "React • API • CSS",
            description:
                "Movie search application using the OMDb API with dynamic search results.",
            github:
                "https://github.com/987vivekyadav-arch/big-movie-app",
            demo:
                "https://big-movie-app.vercel.app/"
        },

        {
            title: "Shopping List",
            tech: "React • JavaScript • CSS",
            description:
                "Shopping list application with add, edit, delete and item management functionality.",
            github:
                "https://github.com/987vivekyadav-arch/shopping-list-app",
            demo:
                "https://shopping-list-app-psi-orpin.vercel.app/"
        },

        {
            title: "Quiz App",
            tech: "React • JavaScript • CSS",
            description:
                "Interactive quiz application for answering questions and displaying results.",
            github:
                "https://github.com/987vivekyadav-arch/quiz-app",
            demo:
                "https://quiz-app-steel-gamma-32.vercel.app/"
        }

    ];


    return (

        <main className="resume">

            {/* HEADER */}

            <header className="header">

                <h1>Vivek Yadav</h1>

                <h2>
                    Junior Frontend Developer | React Developer
                </h2>

                <div className="contact">

                    <span>8840042929</span>

                    <span>[987vivekyadav@gmail.com]</span>

                    <span>[Orai, Uttar Pradesh]</span>

                    <a
                        href="[LinkedIn URL]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/987vivekyadav-arch"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a className="portfolio"
                        href="https://port-folio-sukh.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Portfolio
                    </a>

                </div>

            </header>


            {/* SUMMARY */}

            <section>

                <h3>Professional Summary</h3>

                <p>
                    Frontend Developer focused on building responsive
                    and interactive web applications using React.js,
                    JavaScript, HTML and CSS. Experienced in building
                    applications using REST APIs, React state,
                    reusable components, search, filtering and
                    responsive user interfaces.
                </p>

            </section>


            {/* SKILLS */}

            <section>

                <h3>Technical Skills</h3>

                <div className="skills">

                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>React.js</span>
                    <span>React Hooks</span>
                    <span>React Router</span>
                    <span>REST APIs</span>
                    <span>Fetch API</span>
                    <span>Responsive Design</span>
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>Props</span>
                    <span>State Management</span>

                </div>

            </section>


            {/* PROJECTS */}

            <section>

                <h3>Projects</h3>

                <div className="projects">

                    {projects.map(function(item, index) {

                        return (

                            <div
                                className="project"
                                key={index}
                            >

                                <div className="projectTop">

                                    <h4>{item.title}</h4>

                                    <span>
                                        {item.tech}
                                    </span>

                                </div>


                                <p>
                                    {item.description}
                                </p>


                                <div className="projectLinks">

                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={item.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </section>


            {/* ADDITIONAL PROJECTS */}

            <section>

                <h3>Additional Projects</h3>

                <p>
                    Counter App • Toggle App • Todo App •
                    Calculator
                </p>

            </section>


            {/* EDUCATION */}

            <section>

                <h3>Education</h3>

                <div className="education">

                    <h4>
                        [Bachelor of Arts(B.A)/History,Politics,English ]
                    </h4>
                      <p>
                        [C.S.J.M.U  University (Kanpur)] • [2019-2021]
                    </p>

<h4>
                        [ Diploma in Pharmacy(D.Pharm) ]
                    </h4>
                  

                    <p>
                        [ Major S.D Singh (Fatehgarh)] • [2024-2025]
                    </p>

                    <h4>
                        [12th ICSE Board (PCM) ]
                    </h4>

                    <p>
                        [Maharana Pratap Education Center / CISCE(ICSE)] • [2019]
                    </p>

                </div>

            </section>


            {/* FOOTER */}

            <footer>

                <p>
                    Open to Junior Frontend Developer,
                    React Developer and Frontend Internship
                    opportunities.
                </p>

            </footer>

        </main>

    );

}

export default App;