"use client";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Board from "@/components/Board/Board";
import { move, reorder } from "@/utils/dragDrop";

const tasks = [
  {
    id: "118836",
    title: "Tugas FE",
    description: "Menggunakan Framework",
    dueDate: "2022-03-25",
    tags: ["FE", "RPL"],
  },
  {
    id: "118837",
    title: "Tugas BE",
    description: "Membuat API",
    dueDate: "2022-03-25",
    tags: ["BE", "RPL"],
  },
  {
    id: "118838",
    title: "Tugas UI/UX",
    description: "Membuat UI/UX",
    dueDate: "2022-03-25",
    tags: ["UI", "UX"],
  },
  {
    id: "118839",
    title: "Tugas Game Dev",
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
  const [ready, setReady] = useState(false);
  const [state, setState] = useState([
    tasks.slice(0, 2),
    tasks.slice(2, 4),
    tasks.slice(4, 6),
  ]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReady(true);
    }
  }, []);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter((group) => group.length));
    }
  };

  return (
    <div className="board">
      {ready && (
        <>
          <div className="main-board">
            <DragDropContext onDragEnd={onDragEnd}>
              <Board idx={0} title="Unfinished" tasks={state[0]} />
              <Board idx={1} title="In Progress" tasks={state[1]} />
              <Board idx={2} title="Done" tasks={state[2]} />
            </DragDropContext>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
