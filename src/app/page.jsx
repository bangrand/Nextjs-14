import React from "react";
import Board from "@/components/Board/Board";
import BoardLogo from "@/components/BoardLogo";

const tasks = [
    {
        id: "118836",
        title: "FE",
        description: "Menggunakan Framework",
        dueDate: "2022-03-25",
        tags: ["FE", "RPL"],
    },
    {
        id: "118837",
        title: "BE",
        description: "Membuat API",
        dueDate: "2022-03-25",
        tags: ["BE", "RPL"],
    },
    {
        id: "118838",
        title: "UI/UX",
        description: "Membuat UI/UX",
        dueDate: "2022-03-25",
        tags: ["UI", "UX"],
    },
    {
        id: "118839",
        title: "Game Dev",
        description: "Membuat game",
        dueDate: "2022-03-25",
        tags: ["GIGA", "Game"],
    },
    {
        id: "118840",
        title: "Cyber Security",
        description: "Melakukan pentesting",
        dueDate: "2022-03-25",
        tags: ["AJK", "NCC"],
    },
    {
        id: "118841",
        title: "Quality Assurance",
        description: "Melakukan testing sebelum production",
        dueDate: "2022-03-25",
        tags: ["RPL", "AJK"],
    },
];

const Home = () => {
    return (
        <div className="board">
            <BoardLogo />
            <div className="main-board">
                <Board title="Unfinished" tasks={tasks} />
                <Board title="In Progress" tasks={tasks} />
                <Board title="Done" tasks={tasks} />
            </div>
        </div>
    );
};

export default Home;
