import { useState } from "react";
import "./Main.css";
import tables from "../data/tables.json";
import bfs from "./bfs";

export default function Main() {
  let random = tables.random;
  let orig = tables.original;

  const [points, setPoints] = useState({
    start: [-1, -1],
    end: [-1, -1],
  });
  const [ch1, setCh1] = useState(false);
  const [ch2, setCh2] = useState(false);
  const [down, setDown] = useState(false);
  const [walls, setwalls] = useState(false);
  const [grid, setGrid] = useState(orig);

  let s1 = points.start[0];
  let s2 = points.start[1];
  let e1 = points.end[0];
  let e2 = points.end[1];

  function wallie() {
    setwalls((prev) => !prev);
  }

  function hovered(i, j) {
    if (down === true && walls === true) {
      if (grid[i][j] === 999) {
        let copy = [...grid];
        copy[i][j] = 0;
        setGrid(copy);
      } else {
        let copy = [...grid];
        copy[i][j] = 999;
        setGrid(copy);
      }
    }
  }

  function clicked(i, j) {
    setDown(true);
    if (walls === false) {
      if (ch1 === false) {
        setCh1((prev) => true);

        setPoints((prev) => ({
          ...points,
          start: [i, j],
        }));

        let copy = [...grid];
        copy[i][j] = 1;
        setGrid(copy);
      } else if (i === points.start[0] && j === points.start[1]) {
        setPoints((prev) => ({
          ...points,
          start: [-1, -1],
        }));

        setCh1((prev) => false);

        let copy = [...grid];
        copy[i][j] = 0;
        setGrid(copy);
      } else if (ch2 === false) {
        setPoints((prev) => ({
          ...points,
          end: [i, j],
        }));

        setCh2((prev) => true);

        let copy = [...grid];
        copy[i][j] = -1;
        setGrid(copy);
      } else if (i === points.end[0] && j === points.end[1]) {
        setPoints((prev) => ({
          ...points,
          end: [-1, -1],
        }));

        setCh2((prev) => false);

        let copy = [...grid];
        copy[i][j] = 0;
        setGrid(copy);
      } else {
        setPoints((prev) => ({
          ...points,
          end: [i, j],
        }));

        let copy = [...grid];
        copy[i][j] = -1;
        setGrid(copy);
      }
    } else {
      if (grid[i][j] === 999) {
        let copy = [...grid];
        copy[i][j] = 0;
        setGrid(copy);
      } else {
        let copy = [...grid];
        copy[i][j] = 999;
        setGrid(copy);
      }
    }
  }

  async function gogo() {
    if (points.start[0] === -1 || points.end[0] === -1) {
      alert("Please select start and end points.");
      return 0;
    }

    let grid_copy = [...grid];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid_copy[i][j] === 99) {
          grid_copy[i][j] = 0;
        }
      }
    }

    setGrid(grid_copy);

    let tot = await bfs(grid, points);
    let mp = new Map(tot.map);

    console.log("res -->", tot);

    if (tot.res === -1) {
      alert("No Solution!!!");
      return 0;
    }

    let start = points.start[0] + " " + points.start[1];
    let end = points.end[0] + " " + points.end[1];

    const timer = (ms) => new Promise((res) => setTimeout(res, ms));

    while (start !== end) {
      const curr = mp.get(end);
      if (curr === start) break;
      const curr_points = curr.split(" ");
      const copy = [...grid];
      copy[curr_points[0]][curr_points[1]] = 99;
      setGrid(copy);
      end = curr;
      await timer(80);
    }
  }

  function clear_all() {
    let grid_copy = [...grid];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        grid_copy[i][j] = 0;
        document.getElementById(`${i} ${j}`).className = "rd-zro";
      }
    }

    setGrid(grid_copy);
    setPoints({ start: [-1, -1], end: [-1, -1] });
    setCh1(false);
    setCh2(false);
    setwalls(false);
  }

  function upped() {
    setDown(false);
  }

  function randomise() {
    setGrid(random);
  }

  return (
    <div onMouseUp={() => upped()}>
      <div>
        <h1 className="main-head">Maze Solver</h1>
      </div>
      <div className="buttton-main">
        <button className="button-go" onClick={gogo}>
          Let's Go
        </button>
        <button className="button-wall" onClick={wallie}>
          WALLS
        </button>
        <button className="button-wall" onClick={clear_all}>
          Clear All
        </button>
        <button className="button-wall" onClick={randomise}>
          Random Walls
        </button>
      </div>
      <table onMouseUp={() => upped()}>
        {tables.row15.map((val, ind) => {
          return (
            <tr>
              {tables.col40.map((values, index) => {
                const id = ind + " " + index;
                return (
                  <td
                    id={id}
                    className={
                      ind === s1 && index === s2
                        ? "td-one"
                        : ind === e1 && index === e2
                        ? "rd-two"
                        : grid[ind][index] === 99
                        ? "td--fina"
                        : grid[ind][index] === 999
                        ? "td-last"
                        : "rd-zro"
                    }
                    onMouseOver={() => hovered(ind, index)}
                    onMouseDown={() => clicked(ind, index)}
                  ></td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
