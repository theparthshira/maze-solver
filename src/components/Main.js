import React, { useEffect } from "react";
import "./Main.css";
import tables from "../data/tables.json";
import dijkstra from "../data/dijkstra";

export default function Main() {
  let random = tables.random;
  let orig = tables.original;

  const [points, setPoints] = React.useState({
    start: [-1, -1],
    end: [-1, -1],
  });
  const [ch1, setCh1] = React.useState(false);
  const [ch2, setCh2] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const [walls, setwalls] = React.useState(false);
  const [nosol, setNosol] = React.useState(false);
  const [grid, setGrid] = React.useState(orig);

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

  useEffect(() => {
    console.log(points);
  }, [points]);

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

  function gogo() {
    let tot = dijkstra(grid, points);
    let mp = new Map(tot.map);

    console.log("res -->", tot);

    if (tot.res === -1) {
      console.log(-1);
      alert("No Solution!!!");
      return 0;
    }

    let start;

    for (const x of mp.keys()) {
      let item = mp.get(x);
      start = x;
      console.log(x, "==>", item);
    }
    let mtt = mp.has(start);
    console.log("start ->", start);
    console.log("test ->", mtt);
    let qqqq = { x: 4, y: 4 };
    console.log(qqqq);
    let mt = mp.has(qqqq);
    console.log("test ->", mt);

    // let curr_point = points.end;

    // while (curr_point !== points.start) {
    //   let new_point = mp.get([curr_point[0], curr_point[1]]);
    //   console.log("point ==>", new_point);
    //   let copy = [...grid];
    //   copy[new_point[0]][new_point[1]] = 99;
    //   setGrid(copy);
    // }
  }

  function clear_all() {
    setGrid(orig);
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
                return (
                  <td
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
