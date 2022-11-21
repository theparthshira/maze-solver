const dijkstra = (grid, points) => {
  let mp = new Map();
  let vis = Array.from(Array(15), () => Array(40).fill(false));
  let start = points.start;
  let end = points.end;
  let q = [];
  let cnt = 0;

  q.push([start[0], start[1]]);
  vis[start[0]][start[1]] = true;

  while (q.length !== 0) {
    let n = q.length;

    for (let i = 0; i < n; i++) {
      let cell = q[0];
      q.shift();

      let x = cell[0];
      let y = cell[1];

      if (x === end[0] && y === end[1]) {
        console.log("reached");
        return { map: mp, res: cnt };
      }

      if (x - 1 >= 0) {
        let tmp = x - 1;
        if (vis[tmp][y] === false && grid[tmp][y] !== 999) {
          q.push([tmp, y]);
          vis[tmp][y] = true;
          mp.set({ x: tmp, y: y }, { x: x, y: y });

          //   let n1 = tmp.toString();
          //   let n2 = x.toString();
          //   let n3 = y.toString();

          //   let ob = n1.concat(" ", n3);
          //   let tr = n2.concat(" ", n3);
        }
      }

      if (x + 1 < 15) {
        let tmp = x + 1;
        if (vis[tmp][y] === false && grid[tmp][y] !== 999) {
          q.push([tmp, y]);
          vis[tmp][y] = true;
          mp.set({ x: tmp, y: y }, { x: x, y: y });

          //   let n1 = tmp.toString();
          //   let n2 = x.toString();
          //   let n3 = y.toString();

          //   let ob = n1.concat(" ", n3);
          //   let tr = n2.concat(" ", n3);
          //   mp.set(ob, tr);
        }
      }

      if (y - 1 >= 0) {
        let tmp = y - 1;
        if (vis[x][tmp] === false && grid[x][tmp] !== 999) {
          q.push([x, tmp]);
          vis[x][tmp] = true;
          mp.set({ x: x, y: tmp }, { x: x, y: y });

          //   let n1 = tmp.toString();
          //   let n2 = x.toString();
          //   let n3 = y.toString();

          //   let ob = n2.concat(" ", n1);
          //   let tr = n2.concat(" ", n3);
          //   mp.set(ob, tr);
        }
      }

      if (y + 1 < 40) {
        let tmp = y + 1;
        if (vis[x][tmp] === false && grid[x][tmp] !== 999) {
          q.push([x, tmp]);
          vis[x][tmp] = true;
          mp.set({ x: x, y: tmp }, { x: x, y: y });

          //   let n1 = tmp.toString();
          //   let n2 = x.toString();
          //   let n3 = y.toString();

          //   let ob = n2.concat(" ", n1);
          //   let tr = n2.concat(" ", n3);
          //   mp.set(ob, tr);
        }
      }
    }

    cnt++;
  }

  return { map: mp, res: -1 };
};

module.exports = dijkstra;
