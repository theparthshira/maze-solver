let vis = Array.from(Array(15), () => Array(40).fill(false));
let mp = new Map();

const dfs = async (grid, points, curr) => {
  if (curr.x < 0 || curr.y < 0 || curr.x > 14 || curr.y > 39) {
    return;
  }

  vis[curr.x][curr.y] = true;
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const x1 = curr.x + 1;
  const x2 = curr.x - 1;
  const y1 = curr.y + 1;
  const y2 = curr.y - 1;

  if (x1 < 15 && vis[x1][curr.y] === false && grid[x1][curr.y] !== 999) {
    const target = x1 + " " + curr.y;
    const source = curr.x + " " + curr.y;
    mp.set(target, source);
    await timer(20);
    if (x1 === points.end[0] && curr.y === points.end[1]) {
      console.log("reached");
      return { map: mp, res: 1 };
    }
    document.getElementById(target).className = "td-visited";
    const res = dfs(grid, points, { x: x1, y: curr.y });
  }

  if (x2 >= 0 && vis[x2][curr.y] === false && grid[x2][curr.y] !== 999) {
    const target = x2 + " " + curr.y;
    const source = curr.x + " " + curr.y;
    mp.set(target, source);
    await timer(20);
    if (x2 === points.end[0] && curr.y === points.end[1]) {
      console.log("reached");
      return { map: mp, res: 1 };
    }
    document.getElementById(target).className = "td-visited";
    const res = dfs(grid, points, { x: x2, y: curr.y });
  }

  if (y1 < 40 && vis[curr.x][y1] === false && grid[curr.x][y1] !== 999) {
    const target = curr.x + " " + y1;
    const source = curr.x + " " + y1;
    mp.set(target, source);
    await timer(20);
    if (curr.x === points.end[0] && y1 === points.end[1]) {
      console.log("reached");
      return { map: mp, res: 1 };
    }
    document.getElementById(target).className = "td-visited";
    const res = dfs(grid, points, { x: curr.x, y: y1 });
  }

  if (y2 >= 0 && vis[curr.x][y2] === false && grid[curr.x][y2] !== 999) {
    const target = curr.x + " " + y2;
    const source = curr.x + " " + y2;
    mp.set(target, source);
    await timer(20);
    if (curr.x === points.end[0] && y2 === points.end[1]) {
      console.log("reached");
      return { map: mp, res: 1 };
    }
    document.getElementById(target).className = "td-visited";
    const res = dfs(grid, points, { x: curr.x, y: y2 });
  }
};

module.exports = dfs;
