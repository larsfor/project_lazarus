import React from "react";

export default function InfoPage() {
    return (
        <div>
            <h1 className="main-page-title">Welcome to my page</h1>
            <hr />
            <div class="main-page-image">
                <img width={600} src="https://image.lorman.com/article/blog/tr:w-800,h-535/30_AdobeStock_124308052.jpeg" alt="A person working in Excel" />
                <div>Source: <a href="https://www.lorman.com/blog/post/microsoft-excel-advanced-training">Lorman</a></div>
            </div>
            <hr />
            <article>
                <p>
                    <h4>Guides and exercises:</h4>
                </p>
                <p>
                    <p>
                        Here you can practice your skills in Excel and programming (WIP).
                        Either if you are preparing for an interview or just want to brush up your skills - follow my guides and test to assess your skill level.
                        For Excel, you can choose from different skill levels, from beginner to more advanced (not VBA-level).
                        The programming section will be less advance (as I'm not an advanced user yet). The click areas will mainly be Python and JavaScript.
                    </p>
                    <p>
                        If you want to start the <b>Excel</b> program, click <a href="#" id="excel-page">here</a>, or the "Guides" &rarr; "Excel" link at the top of the page.
                    </p>
                    <div>
                        If you want to learn some <b>programming</b>, click <a href="#" id="programming-page">here</a>, or the "Guides" &rarr; "Programming" link at the top of the page.
                        Note that this is a work in progress and you might experience issues.
                    </div>
                </p>
            </article>
        </div>
    );
};