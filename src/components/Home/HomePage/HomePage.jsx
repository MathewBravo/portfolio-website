export default function HomePage() {
    return (
        <>
            <div className="title-main">
                <h1 className="title-main__name">
                    <span className="title-main__class">Software Developer</span> *Mathew
                    Bravo&#123;
                </h1>
                <h4 className="title-main__attribute">
                    resume ={" "}
                    <span className="title-main__attribute__get">
                        <a
                            href="https://docs.google.com/document/d/1QmHAVBCzrMPjrNP9io01mKMfU6LObyZBcglo9tv95X8/edit?usp=sharing"
                            target="_blank"
                        >
                            getResume(
                            <span className="title-main__attribute__get__click">clickme</span>
                            )
                        </a>
                    </span>
                </h4>
                <h4 className="title-main__attribute">
                    location ={" "}
                    <span className="title-main__attribute__get__string">
                        "Toronto, Ontario"
                    </span>
                </h4>
                <h4 className="title-main__attribute">
                    willWork ={" "}
                    <span className="title-main__attribute__get__string">
                        "Anywhere"{" "}
                    </span>
                </h4>
                <h4 className="title-main__attribute">
                    technicalInterests = [
                    <span className="title-main__attribute__get__string">
                        {" "}
                        "Backend", "Cloud Computing", "Machine Learning", "Game
                        Development", "Database Engineering"
                    </span>
                    ]
                </h4>
                <h4 className="title-main__attribute">
                    languageSkills = [
                    <span className="title-main__attribute__get__string">
                        {" "}
                        "Golang", "Typescript", "Python", "Javascript", "Rust", "C/C++",
                        "Java", "Dart", "Swift"{" "}
                    </span>
                    ]
                </h4>
                <h4 className="title-main__attribute">
                    frameworksKnown = [
                    <span className="title-main__attribute__get__string">
                        {" "}
                        "React", "Angular", "Node.js", "Tauri", "Svelte", "Express",
                        "Flutter", "TailwindCSS"{" "}
                    </span>
                    ]
                </h4>
                <h4 className="title-main__attribute">
                    databasesKnown = [
                    <span className="title-main__attribute__get__string">
                        {" "}
                        "MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Amazon
                        DynamoDB", "SurrealDB"{" "}
                    </span>
                    ]
                </h4>
                <h4 className="title-main__attribute">
                    otherSkills = [
                    <span className="title-main__attribute__get__string">
                        "AWS", "Git", "Unreal", "Unity", "Qt6", "Tensor-Flow", "Google
                        Colab/Jupyter", "Maya/3ds Max/F360", "Blender",{" "}
                    </span>
                    ]
                </h4>
                <h1 className="title-main__end">&#125;;</h1>
            </div>
        </>
    );
}
