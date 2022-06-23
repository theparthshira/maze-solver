import React from 'react'
import './Main.css'

var dRow = [-1, 0, 1, 0 ];
var dCol = [0, 1, 0, -1 ];

let mp = new Map()

function isValid(vis, row, col) {
    if (row < 0 || col < 0
        || row >= 15 || col >= 40)
        return false;

    if (vis[row][col])
        return false;

    return true;
}

function dijkstra(grid,starti,startj) {

    var vis = Array.from(Array(15), ()=> Array(40).fill(false));
    starti--
    startj--
    var q = [];
    q.push([starti, startj ]);
    vis[starti][startj] = true;
    let cnt=0;

    while (q.length!=0) {

        var n = q.length

        for (var i = 0; i < n; i++) {

            var cell = q[0];
            var x = cell[0];
            var y = cell[1];

            if(grid[x][y] === -1) {
                console.log(cnt)
                // console.log("reached")
                return cnt
            }

            q.shift();

            if(x-1>=0) {
                var tmp=x-1
                if(vis[tmp][y] === false && grid[tmp][y] != 999) {
                    q.push([tmp,y])
                    // console.log(tmp + " " + y);

                    vis[tmp][y]=true;

                    var n1=tmp.toString()
                    var n2=x.toString()
                    var n3=y.toString()

                    var ob=n1.concat(" ",n3);
                    var tr=n2.concat(" ", n3);
                    mp.set(ob,tr)
                }
            }

            if(x+1<15) {
                var tmp=x+1
                if(vis[tmp][y] === false && grid[tmp][y] != 999) {
                    q.push([tmp,y])
                    // console.log(tmp + " " + y);
                    vis[tmp][y]=true;

                    var n1=tmp.toString()
                    var n2=x.toString()
                    var n3=y.toString()

                    var ob=n1.concat(" ",n3);
                    var tr=n2.concat(" ", n3);
                    mp.set(ob,tr)
                }
            }

            if(y-1>=0) {
                var tmp=y-1
                if(vis[x][tmp] === false && grid[x][tmp] != 999) {
                    q.push([x,tmp])
                    // console.log(x + " " + tmp);
                    vis[x][tmp]=true;

                    var n1=tmp.toString()
                    var n2=x.toString()
                    var n3=y.toString()

                    var ob=n2.concat(" ",n1);
                    var tr=n2.concat(" ", n3);
                    mp.set(ob,tr)
                }
            }

            if(y+1<40) {
                var tmp=y+1
                if(vis[x][tmp] === false && grid[x][tmp] != 999) {
                    q.push([x,tmp])
                    // console.log(x + " " + tmp);
                    vis[x][tmp]=true;

                    var n1=tmp.toString()
                    var n2=x.toString()
                    var n3=y.toString()

                    var ob=n2.concat(" ",n1);
                    var tr=n2.concat(" ", n3);
                    mp.set(ob,tr)
                }
            }
        }

        cnt++;
    }

    return -1;
}

export default function Main() {
    let random = [
        [999,999,999,0,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,0,999,999,999,999,999,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 999, 0, 0, 0 ], [ 999, 0, 999, 0, 999, 0, 0, 0, 0, 0, 0, 0, 999, 999, 999, 999,
        999, 999, 999, 999, 0, 0, 0, 999, 999, 0, 0, 0, 0, 999, 999, 999, 999, 999, 0, 0, 0, 999, 999, 999 ], [ 999, 0, 999, 0,
        999, 0, 0, -1, 0, 0, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 999, 0, 0, 0, 999, 999, 0, 0, 0, 999,
        999, 0, 0, 0, 0, 0 ], [ 999, 0, 999, 0, 999, 999, 999, 999, 999, 999, 0, 999, 999, 999, 999, 999, 0, 999, 999, 999,
        999, 0, 0, 0, 0, 999, 0, 0, 999, 0, 0, 0, 0, 0, 0, 999, 0, 0, 999, 999 ], [ 999, 0, 999, 0, 0, 0, 0, 0, 999,
        999, 0, 0, 0, 0, 0, 999, 999, 999, 0, 0, 999, 999, 0, 0, 0, 999, 999, 999, 0, 0, 999, 999, 999, 0, 0, 999, 999, 999,
        999, 0 ], [ 999, 0, 999, 999, 999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 999, 999, 0, 0, 0, 0, 0, 0,
        999, 999, 0, 999, 999, 0, 0, 0, 999, 0, 0 ], [ 999, 0, 999, 0, 999, 0, 0, 0, 999, 999, 999, 999, 999, 0, 0, 0, 999,
        999, 0, 0, 0, 0, 999, 0, 999, 999, 999, 999, 999, 999, 0, 0, 0, 0, 999, 0, 0, 0, 0, 0 ], [ 999, 0, 0, 999, 999, 0,
        0, 0, 999, 0, 0, 0, 999, 999, 0, 0, 999, 999, 999, 999, 999, 0, 0, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 999, 0, 0,
        0, 999 ], [ 999, 999, 0, 0, 999, 0, 0, 0, 999, 0, 999, 0, 0, 999, 999, 999, 999, 0, 0, 0, 999, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 999, 999, 0, 999 ], [ 0, 999, 999, 0, 999, 999, 0, 999, 999, 0, 999, 999, 0, 0, 999,
        999, 0, 0, 0, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 999, 0, 0 ], [ 0, 0, 999, 0, 0, 999, 999,
        999, 0, 0, 999, 999, 999, 0, 0, 0, 0, 0, 999, 999, 0, 0, 0, 0, 0, 0, 0, 999, 999, 999, 999, 0, 0, 0, 0, 0, 0, 999,
        0, 0 ], [ 999, 0, 999, 999, 0, 999, 0, 0, 0, 999, 999, 0, 999, 0, 0, 0, 0, 0, 999, 0, 0, 0, 0, 0, 0, 999, 999,
        999, 0, 0, 999, 0, 0, 0, 0, 0, 0, 999, 0, 0 ], [ 999, 0, 0, 999, 0, 999, 0, 999, 999, 999, 0, 0, 0, 999, 999, 999,
        999, 0, 999, 0, 0, 0, 999, 999, 999, 999, 0, 0, 0, 999, 999, 0, 0, 0, 0, 0, 999, 999, 0, 999 ], [ 999, 0, 0, 999, 0,
        0, 0, 999, 999, 0, 0, 999, 999, 0, 999, 999, 999, 0, 999, 999, 999, 999, 999, 0, 0, 0, 0, 0, 0, 999, 999, 999,
        999, 999, 999, 999, 999, 0, 0, 999 ], [ 999, 0, 0, 999, 999, 999, 999, 999, 0, 999, 999, 0, 999, 0, 0, 0, 999, 0, 0,
        0, 0, 0, 0, 0, 999, 999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 999 ]
    ]

    let orig=[
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]

    const [points,setPoints] = React.useState({start:[-1,-1], end:[-1,-1]})
    const [ch1,setCh1] = React.useState(false)
    const [ch2,setCh2] = React.useState(false)
    const [down,setDown] = React.useState(false)
    const [wlls,setWlls] = React.useState(false)
    const [nosol,setNosol] = React.useState(false)
    const [grid,setGrid] = React.useState(orig)
    
    let s1=points.start[0]
    let s2=points.start[1]
    let e1=points.end[0]
    let e2=points.end[1]

    function wallie() {
        setWlls(prev => !prev)
        // console.log(wlls);
    }

    function hovered(i,j) {
        if(down === true && wlls === true) {
            if(grid[i-1][j-1] === 999) {
                let copy=[...grid]
                copy[i-1][j-1]=0
                setGrid(copy)
            } else {
                let copy=[...grid]
                copy[i-1][j-1]=999
                setGrid(copy)
            }

            // console.log(grid);
        }
    }

    function clicked(i,j) {
        setDown(true)
        if(wlls === false) {
            if(ch1 === false) {
                setCh1(prev => true)

                setPoints(prev => ({
                    ...points,
                    start:[i,j]
                }))

                let copy=[...grid]
                copy[i-1][j-1]=1
                setGrid(copy)

            } else if(i === points.start[0] && j === points.start[1]) {

                setPoints(prev => ({
                    ...points,
                    start:[-1,-1]
                }))

                setCh1(prev => false)

                let copy=[...grid]
                copy[i-1][j-1]=0
                setGrid(copy)

            } else if(ch2 === false) {

                setPoints(prev => ({
                    ...points,
                    end:[i,j]
                }))

                setCh2(prev => true)

                let copy=[...grid]
                copy[i-1][j-1]=-1
                setGrid(copy)

            } else if(i === e1 && j === e2) {
                setPoints(prev => ({
                    ...points,
                    end:[-1,-1]
                }))

                setCh2(prev => false)

                let copy=[...grid]
                copy[i-1][j-1]=0
                setGrid(copy)

            } else {
                setPoints(prev => ({
                    ...points,
                    end:[i,j]
                }))

                let copy=[...grid]
                copy[i-1][j-1]=-1
                setGrid(copy)
            }
        } else {
            if(grid[i-1][j-1] === 999) {
                let copy=[...grid]
                copy[i-1][j-1]=0
                setGrid(copy)
            } else {
                let copy=[...grid]
                copy[i-1][j-1]=999
                setGrid(copy)
            }
        }
    }

    // unknown commit which does nothing

    function gogo() {
        // console.log(points.start[0]+" "+points.start[1])
        let tot=dijkstra(grid,points.start[0],points.start[1])

        if(tot === -1) {
            console.log(-1)
            return 0;
        }
        
        var q1=points.end[0]-1
        var q2=points.end[1]-1

        var s1=points.start[0]-1
        var s2=points.start[1]-1

        // mp.forEach(logMapElements)

        var n1=q1.toString()
        var n2=q2.toString()

        var m1=s1.toString()
        var m2=s2.toString()

        var tmp=n1.concat(" ", n2)

        var tar=m1.concat(" ", m2)

        while(tmp != tar) {
            tmp=mp.get(tmp)
            
            try {
                var nn=tmp.length
            } catch(err) {
                console.log(err)
                alert("No Solution!!!")
                return -1;
            }

            var fin1,fin2

            if(nn == 3) {
                var z1=tmp.charAt(0);
                var z2=tmp.charAt(2);

                fin1=parseInt(z1)
                fin2=parseInt(z2)
            } else if(nn == 5) {
                var z11=tmp.charAt(0);
                var z12=tmp.charAt(1);
                var z21=tmp.charAt(3);
                var z22=tmp.charAt(4);

                var qq1=z11+z12
                var qq2=z21+z22

                fin1=parseInt(qq1)
                fin2=parseInt(qq2)
            } else {
                if(tmp.charAt(1) == ' ') {
                    var z11=tmp.charAt(0);
                    var z21=tmp.charAt(2);
                    var z22=tmp.charAt(3);

                    var qq1=z11
                    var qq2=z21+z22

                    fin1=parseInt(qq1)
                    fin2=parseInt(qq2)
                } else {
                    var z11=tmp.charAt(0);
                    var z12=tmp.charAt(1);
                    var z21=tmp.charAt(3);

                    var qq1=z11+z12
                    var qq2=z21

                    fin1=parseInt(qq1)
                    fin2=parseInt(qq2)
                }
            }

            let copy=[...grid]
            copy[fin1][fin2]=99
            setGrid(copy)
        }

        console.log(grid);
    }

    function clear_all() {
      setGrid(orig);
      setPoints({start:[-1,-1], end:[-1,-1]});
      setCh1(false);
      setCh2(false);
      setWlls(false);
    }

    console.log(mp);

    function upped() {
        setDown(false)
    }

    function randomise() {
        setGrid(random);
    }

    return (
        <div>
            <div><h1 className="main-head">Maze Solver</h1></div>
            <div className="buttton-main">
                <button className="button-go" onClick={gogo}>Let's Go</button>
                <button className="button-wall" onClick={wallie}>WALLS</button>
                <button className="button-wall" onClick={clear_all}>Clear All</button>
                <button className="button-wall" onClick={randomise}>Random Walls</button>
            </div>
            <table onMouseUp={() => upped()}>
                <tbody>
                    <tr>
                        <td className={(1===s1 && 1===s2)?"td-one":(1===e1 && 1===e2)?"rd-two":(grid[0][0]===99)?"td--fina":(grid[0][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,1)}  onMouseDown={() => clicked(1,1)}></td>
                        <td className={(1===s1 && 2===s2)?"td-one":(1===e1 && 2===e2)?"rd-two":(grid[0][1]===99)?"td--fina":(grid[0][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,2)}  onMouseDown={() => clicked(1,2)}></td>
                        <td className={(1===s1 && 3===s2)?"td-one":(1===e1 && 3===e2)?"rd-two":(grid[0][2]===99)?"td--fina":(grid[0][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,3)}  onMouseDown={() => clicked(1,3)}></td>
                        <td className={(1===s1 && 4===s2)?"td-one":(1===e1 && 4===e2)?"rd-two":(grid[0][3]===99)?"td--fina":(grid[0][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,4)}  onMouseDown={() => clicked(1,4)}></td>
                        <td className={(1===s1 && 5===s2)?"td-one":(1===e1 && 5===e2)?"rd-two":(grid[0][4]===99)?"td--fina":(grid[0][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,5)}  onMouseDown={() => clicked(1,5)}></td>
                        <td className={(1===s1 && 6===s2)?"td-one":(1===e1 && 6===e2)?"rd-two":(grid[0][5]===99)?"td--fina":(grid[0][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,6)}  onMouseDown={() => clicked(1,6)}></td>
                        <td className={(1===s1 && 7===s2)?"td-one":(1===e1 && 7===e2)?"rd-two":(grid[0][6]===99)?"td--fina":(grid[0][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,7)}  onMouseDown={() => clicked(1,7)}></td>
                        <td className={(1===s1 && 8===s2)?"td-one":(1===e1 && 8===e2)?"rd-two":(grid[0][7]===99)?"td--fina":(grid[0][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,8)}  onMouseDown={() => clicked(1,8)}></td>
                        <td className={(1===s1 && 9===s2)?"td-one":(1===e1 && 9===e2)?"rd-two":(grid[0][8]===99)?"td--fina":(grid[0][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,9)}  onMouseDown={() => clicked(1,9)}></td>
                        <td className={(1===s1 && 10===s2)?"td-one":(1===e1 && 10===e2)?"rd-two":(grid[0][9]===99)?"td--fina":(grid[0][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,10)} onMouseDown={() => clicked(1,10)}></td>
                        <td className={(1===s1 && 11===s2)?"td-one":(1===e1 && 11===e2)?"rd-two":(grid[0][10]===99)?"td--fina":(grid[0][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,11)} onMouseDown={() => clicked(1,11)}></td>
                        <td className={(1===s1 && 12===s2)?"td-one":(1===e1 && 12===e2)?"rd-two":(grid[0][11]===99)?"td--fina":(grid[0][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,12)} onMouseDown={() => clicked(1,12)}></td>
                        <td className={(1===s1 && 13===s2)?"td-one":(1===e1 && 13===e2)?"rd-two":(grid[0][12]===99)?"td--fina":(grid[0][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,13)} onMouseDown={() => clicked(1,13)}></td>
                        <td className={(1===s1 && 14===s2)?"td-one":(1===e1 && 14===e2)?"rd-two":(grid[0][13]===99)?"td--fina":(grid[0][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,14)} onMouseDown={() => clicked(1,14)}></td>
                        <td className={(1===s1 && 15===s2)?"td-one":(1===e1 && 15===e2)?"rd-two":(grid[0][14]===99)?"td--fina":(grid[0][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,15)} onMouseDown={() => clicked(1,15)}></td>
                        <td className={(1===s1 && 16===s2)?"td-one":(1===e1 && 16===e2)?"rd-two":(grid[0][15]===99)?"td--fina":(grid[0][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,16)} onMouseDown={() => clicked(1,16)}></td>
                        <td className={(1===s1 && 17===s2)?"td-one":(1===e1 && 17===e2)?"rd-two":(grid[0][16]===99)?"td--fina":(grid[0][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,17)} onMouseDown={() => clicked(1,17)}></td>
                        <td className={(1===s1 && 18===s2)?"td-one":(1===e1 && 18===e2)?"rd-two":(grid[0][17]===99)?"td--fina":(grid[0][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,18)} onMouseDown={() => clicked(1,18)}></td>
                        <td className={(1===s1 && 19===s2)?"td-one":(1===e1 && 19===e2)?"rd-two":(grid[0][18]===99)?"td--fina":(grid[0][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,19)} onMouseDown={() => clicked(1,19)}></td>
                        <td className={(1===s1 && 20===s2)?"td-one":(1===e1 && 20===e2)?"rd-two":(grid[0][19]===99)?"td--fina":(grid[0][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,20)} onMouseDown={() => clicked(1,20)}></td>
                        <td className={(1===s1 && 21===s2)?"td-one":(1===e1 && 21===e2)?"rd-two":(grid[0][20]===99)?"td--fina":(grid[0][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,21)} onMouseDown={() => clicked(1,21)}></td>
                        <td className={(1===s1 && 22===s2)?"td-one":(1===e1 && 22===e2)?"rd-two":(grid[0][21]===99)?"td--fina":(grid[0][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,22)} onMouseDown={() => clicked(1,22)}></td>
                        <td className={(1===s1 && 23===s2)?"td-one":(1===e1 && 23===e2)?"rd-two":(grid[0][22]===99)?"td--fina":(grid[0][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,23)} onMouseDown={() => clicked(1,23)}></td>
                        <td className={(1===s1 && 24===s2)?"td-one":(1===e1 && 24===e2)?"rd-two":(grid[0][23]===99)?"td--fina":(grid[0][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,24)} onMouseDown={() => clicked(1,24)}></td>
                        <td className={(1===s1 && 25===s2)?"td-one":(1===e1 && 25===e2)?"rd-two":(grid[0][24]===99)?"td--fina":(grid[0][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,25)} onMouseDown={() => clicked(1,25)}></td>
                        <td className={(1===s1 && 26===s2)?"td-one":(1===e1 && 26===e2)?"rd-two":(grid[0][25]===99)?"td--fina":(grid[0][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,26)} onMouseDown={() => clicked(1,26)}></td>
                        <td className={(1===s1 && 27===s2)?"td-one":(1===e1 && 27===e2)?"rd-two":(grid[0][26]===99)?"td--fina":(grid[0][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,27)} onMouseDown={() => clicked(1,27)}></td>
                        <td className={(1===s1 && 28===s2)?"td-one":(1===e1 && 28===e2)?"rd-two":(grid[0][27]===99)?"td--fina":(grid[0][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,28)} onMouseDown={() => clicked(1,28)}></td>
                        <td className={(1===s1 && 29===s2)?"td-one":(1===e1 && 29===e2)?"rd-two":(grid[0][28]===99)?"td--fina":(grid[0][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,29)} onMouseDown={() => clicked(1,29)}></td>
                        <td className={(1===s1 && 30===s2)?"td-one":(1===e1 && 30===e2)?"rd-two":(grid[0][29]===99)?"td--fina":(grid[0][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,30)} onMouseDown={() => clicked(1,30)}></td>
                        <td className={(1===s1 && 31===s2)?"td-one":(1===e1 && 31===e2)?"rd-two":(grid[0][30]===99)?"td--fina":(grid[0][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,31)} onMouseDown={() => clicked(1,31)}></td>
                        <td className={(1===s1 && 32===s2)?"td-one":(1===e1 && 32===e2)?"rd-two":(grid[0][31]===99)?"td--fina":(grid[0][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,32)} onMouseDown={() => clicked(1,32)}></td>
                        <td className={(1===s1 && 33===s2)?"td-one":(1===e1 && 33===e2)?"rd-two":(grid[0][32]===99)?"td--fina":(grid[0][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,33)} onMouseDown={() => clicked(1,33)}></td>
                        <td className={(1===s1 && 34===s2)?"td-one":(1===e1 && 34===e2)?"rd-two":(grid[0][33]===99)?"td--fina":(grid[0][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,34)} onMouseDown={() => clicked(1,34)}></td>
                        <td className={(1===s1 && 35===s2)?"td-one":(1===e1 && 35===e2)?"rd-two":(grid[0][34]===99)?"td--fina":(grid[0][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,35)} onMouseDown={() => clicked(1,35)}></td>
                        <td className={(1===s1 && 36===s2)?"td-one":(1===e1 && 36===e2)?"rd-two":(grid[0][35]===99)?"td--fina":(grid[0][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,36)} onMouseDown={() => clicked(1,36)}></td>
                        <td className={(1===s1 && 37===s2)?"td-one":(1===e1 && 37===e2)?"rd-two":(grid[0][36]===99)?"td--fina":(grid[0][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,37)} onMouseDown={() => clicked(1,37)}></td>
                        <td className={(1===s1 && 38===s2)?"td-one":(1===e1 && 38===e2)?"rd-two":(grid[0][37]===99)?"td--fina":(grid[0][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,38)} onMouseDown={() => clicked(1,38)}></td>
                        <td className={(1===s1 && 39===s2)?"td-one":(1===e1 && 39===e2)?"rd-two":(grid[0][38]===99)?"td--fina":(grid[0][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,39)} onMouseDown={() => clicked(1,39)}></td>
                        <td className={(1===s1 && 40===s2)?"td-one":(1===e1 && 40===e2)?"rd-two":(grid[0][39]===99)?"td--fina":(grid[0][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(1,40)} onMouseDown={() => clicked(1,40)}></td>
                    </tr>
                    <tr>
                        <td className={(2===s1 && 1===s2)?"td-one":(2===e1 && 1===e2)?"rd-two":(grid[1][0]===99)?"td--fina":(grid[1][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,1)} onMouseDown={() => clicked(2,1)}></td>
                        <td className={(2===s1 && 2===s2)?"td-one":(2===e1 && 2===e2)?"rd-two":(grid[1][1]===99)?"td--fina":(grid[1][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,2)} onMouseDown={() => clicked(2,2)}></td>
                        <td className={(2===s1 && 3===s2)?"td-one":(2===e1 && 3===e2)?"rd-two":(grid[1][2]===99)?"td--fina":(grid[1][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,3)} onMouseDown={() => clicked(2,3)}></td>
                        <td className={(2===s1 && 4===s2)?"td-one":(2===e1 && 4===e2)?"rd-two":(grid[1][3]===99)?"td--fina":(grid[1][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,4)} onMouseDown={() => clicked(2,4)}></td>
                        <td className={(2===s1 && 5===s2)?"td-one":(2===e1 && 5===e2)?"rd-two":(grid[1][4]===99)?"td--fina":(grid[1][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,5)} onMouseDown={() => clicked(2,5)}></td>
                        <td className={(2===s1 && 6===s2)?"td-one":(2===e1 && 6===e2)?"rd-two":(grid[1][5]===99)?"td--fina":(grid[1][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,6)} onMouseDown={() => clicked(2,6)}></td>
                        <td className={(2===s1 && 7===s2)?"td-one":(2===e1 && 7===e2)?"rd-two":(grid[1][6]===99)?"td--fina":(grid[1][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,7)} onMouseDown={() => clicked(2,7)}></td>
                        <td className={(2===s1 && 8===s2)?"td-one":(2===e1 && 8===e2)?"rd-two":(grid[1][7]===99)?"td--fina":(grid[1][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,8)} onMouseDown={() => clicked(2,8)}></td>
                        <td className={(2===s1 && 9===s2)?"td-one":(2===e1 && 9===e2)?"rd-two":(grid[1][8]===99)?"td--fina":(grid[1][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,9)} onMouseDown={() => clicked(2,9)}></td>
                        <td className={(2===s1 && 10===s2)?"td-one":(2===e1 && 10===e2)?"rd-two":(grid[1][9]===99)?"td--fina":(grid[1][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,10)} onMouseDown={() => clicked(2,10)}></td>
                        <td className={(2===s1 && 11===s2)?"td-one":(2===e1 && 11===e2)?"rd-two":(grid[1][10]===99)?"td--fina":(grid[1][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,11)} onMouseDown={() => clicked(2,11)}></td>
                        <td className={(2===s1 && 12===s2)?"td-one":(2===e1 && 12===e2)?"rd-two":(grid[1][11]===99)?"td--fina":(grid[1][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,12)} onMouseDown={() => clicked(2,12)}></td>
                        <td className={(2===s1 && 13===s2)?"td-one":(2===e1 && 13===e2)?"rd-two":(grid[1][12]===99)?"td--fina":(grid[1][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,13)} onMouseDown={() => clicked(2,13)}></td>
                        <td className={(2===s1 && 14===s2)?"td-one":(2===e1 && 14===e2)?"rd-two":(grid[1][13]===99)?"td--fina":(grid[1][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,14)} onMouseDown={() => clicked(2,14)}></td>
                        <td className={(2===s1 && 15===s2)?"td-one":(2===e1 && 15===e2)?"rd-two":(grid[1][14]===99)?"td--fina":(grid[1][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,15)} onMouseDown={() => clicked(2,15)}></td>
                        <td className={(2===s1 && 16===s2)?"td-one":(2===e1 && 16===e2)?"rd-two":(grid[1][15]===99)?"td--fina":(grid[1][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,16)} onMouseDown={() => clicked(2,16)}></td>
                        <td className={(2===s1 && 17===s2)?"td-one":(2===e1 && 17===e2)?"rd-two":(grid[1][16]===99)?"td--fina":(grid[1][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,17)} onMouseDown={() => clicked(2,17)}></td>
                        <td className={(2===s1 && 18===s2)?"td-one":(2===e1 && 18===e2)?"rd-two":(grid[1][17]===99)?"td--fina":(grid[1][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,18)} onMouseDown={() => clicked(2,18)}></td>
                        <td className={(2===s1 && 19===s2)?"td-one":(2===e1 && 19===e2)?"rd-two":(grid[1][18]===99)?"td--fina":(grid[1][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,19)} onMouseDown={() => clicked(2,19)}></td>
                        <td className={(2===s1 && 20===s2)?"td-one":(2===e1 && 20===e2)?"rd-two":(grid[1][19]===99)?"td--fina":(grid[1][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,20)} onMouseDown={() => clicked(2,20)}></td>
                        <td className={(2===s1 && 21===s2)?"td-one":(2===e1 && 21===e2)?"rd-two":(grid[1][20]===99)?"td--fina":(grid[1][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,21)} onMouseDown={() => clicked(2,21)}></td>
                        <td className={(2===s1 && 22===s2)?"td-one":(2===e1 && 22===e2)?"rd-two":(grid[1][21]===99)?"td--fina":(grid[1][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,22)} onMouseDown={() => clicked(2,22)}></td>
                        <td className={(2===s1 && 23===s2)?"td-one":(2===e1 && 23===e2)?"rd-two":(grid[1][22]===99)?"td--fina":(grid[1][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,23)} onMouseDown={() => clicked(2,23)}></td>
                        <td className={(2===s1 && 24===s2)?"td-one":(2===e1 && 24===e2)?"rd-two":(grid[1][23]===99)?"td--fina":(grid[1][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,24)} onMouseDown={() => clicked(2,24)}></td>
                        <td className={(2===s1 && 25===s2)?"td-one":(2===e1 && 25===e2)?"rd-two":(grid[1][24]===99)?"td--fina":(grid[1][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,25)} onMouseDown={() => clicked(2,25)}></td>
                        <td className={(2===s1 && 26===s2)?"td-one":(2===e1 && 26===e2)?"rd-two":(grid[1][25]===99)?"td--fina":(grid[1][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,26)} onMouseDown={() => clicked(2,26)}></td>
                        <td className={(2===s1 && 27===s2)?"td-one":(2===e1 && 27===e2)?"rd-two":(grid[1][26]===99)?"td--fina":(grid[1][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,27)} onMouseDown={() => clicked(2,27)}></td>
                        <td className={(2===s1 && 28===s2)?"td-one":(2===e1 && 28===e2)?"rd-two":(grid[1][27]===99)?"td--fina":(grid[1][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,28)} onMouseDown={() => clicked(2,28)}></td>
                        <td className={(2===s1 && 29===s2)?"td-one":(2===e1 && 29===e2)?"rd-two":(grid[1][28]===99)?"td--fina":(grid[1][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,29)} onMouseDown={() => clicked(2,29)}></td>
                        <td className={(2===s1 && 30===s2)?"td-one":(2===e1 && 30===e2)?"rd-two":(grid[1][29]===99)?"td--fina":(grid[1][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,30)} onMouseDown={() => clicked(2,30)}></td>
                        <td className={(2===s1 && 31===s2)?"td-one":(2===e1 && 31===e2)?"rd-two":(grid[1][30]===99)?"td--fina":(grid[1][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,31)} onMouseDown={() => clicked(2,31)}></td>
                        <td className={(2===s1 && 32===s2)?"td-one":(2===e1 && 32===e2)?"rd-two":(grid[1][31]===99)?"td--fina":(grid[1][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,32)} onMouseDown={() => clicked(2,32)}></td>
                        <td className={(2===s1 && 33===s2)?"td-one":(2===e1 && 33===e2)?"rd-two":(grid[1][32]===99)?"td--fina":(grid[1][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,33)} onMouseDown={() => clicked(2,33)}></td>
                        <td className={(2===s1 && 34===s2)?"td-one":(2===e1 && 34===e2)?"rd-two":(grid[1][33]===99)?"td--fina":(grid[1][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,34)} onMouseDown={() => clicked(2,34)}></td>
                        <td className={(2===s1 && 35===s2)?"td-one":(2===e1 && 35===e2)?"rd-two":(grid[1][34]===99)?"td--fina":(grid[1][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,35)} onMouseDown={() => clicked(2,35)}></td>
                        <td className={(2===s1 && 36===s2)?"td-one":(2===e1 && 36===e2)?"rd-two":(grid[1][35]===99)?"td--fina":(grid[1][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,36)} onMouseDown={() => clicked(2,36)}></td>
                        <td className={(2===s1 && 37===s2)?"td-one":(2===e1 && 37===e2)?"rd-two":(grid[1][36]===99)?"td--fina":(grid[1][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,37)} onMouseDown={() => clicked(2,37)}></td>
                        <td className={(2===s1 && 38===s2)?"td-one":(2===e1 && 38===e2)?"rd-two":(grid[1][37]===99)?"td--fina":(grid[1][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,38)} onMouseDown={() => clicked(2,38)}></td>
                        <td className={(2===s1 && 39===s2)?"td-one":(2===e1 && 39===e2)?"rd-two":(grid[1][38]===99)?"td--fina":(grid[1][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,39)} onMouseDown={() => clicked(2,39)}></td>
                        <td className={(2===s1 && 40===s2)?"td-one":(2===e1 && 40===e2)?"rd-two":(grid[1][39]===99)?"td--fina":(grid[1][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(2,40)} onMouseDown={() => clicked(2,40)}></td>
                    </tr>
                    <tr>
                        <td className={(3===s1 && 1===s2)?"td-one":(3===e1 && 1===e2)?"rd-two":(grid[2][0]===99)?"td--fina":(grid[2][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,1)} onMouseDown={() => clicked(3,1)}></td>
                        <td className={(3===s1 && 2===s2)?"td-one":(3===e1 && 2===e2)?"rd-two":(grid[2][1]===99)?"td--fina":(grid[2][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,2)} onMouseDown={() => clicked(3,2)}></td>
                        <td className={(3===s1 && 3===s2)?"td-one":(3===e1 && 3===e2)?"rd-two":(grid[2][2]===99)?"td--fina":(grid[2][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,3)} onMouseDown={() => clicked(3,3)}></td>
                        <td className={(3===s1 && 4===s2)?"td-one":(3===e1 && 4===e2)?"rd-two":(grid[2][3]===99)?"td--fina":(grid[2][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,4)} onMouseDown={() => clicked(3,4)}></td>
                        <td className={(3===s1 && 5===s2)?"td-one":(3===e1 && 5===e2)?"rd-two":(grid[2][4]===99)?"td--fina":(grid[2][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,5)} onMouseDown={() => clicked(3,5)}></td>
                        <td className={(3===s1 && 6===s2)?"td-one":(3===e1 && 6===e2)?"rd-two":(grid[2][5]===99)?"td--fina":(grid[2][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,6)} onMouseDown={() => clicked(3,6)}></td>
                        <td className={(3===s1 && 7===s2)?"td-one":(3===e1 && 7===e2)?"rd-two":(grid[2][6]===99)?"td--fina":(grid[2][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,7)} onMouseDown={() => clicked(3,7)}></td>
                        <td className={(3===s1 && 8===s2)?"td-one":(3===e1 && 8===e2)?"rd-two":(grid[2][7]===99)?"td--fina":(grid[2][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,8)} onMouseDown={() => clicked(3,8)}></td>
                        <td className={(3===s1 && 9===s2)?"td-one":(3===e1 && 9===e2)?"rd-two":(grid[2][8]===99)?"td--fina":(grid[2][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,9)} onMouseDown={() => clicked(3,9)}></td>
                        <td className={(3===s1 && 10===s2)?"td-one":(3===e1 && 10===e2)?"rd-two":(grid[2][9]===99)?"td--fina":(grid[2][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,10)} onMouseDown={() => clicked(3,10)}></td>
                        <td className={(3===s1 && 11===s2)?"td-one":(3===e1 && 11===e2)?"rd-two":(grid[2][10]===99)?"td--fina":(grid[2][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,11)} onMouseDown={() => clicked(3,11)}></td>
                        <td className={(3===s1 && 12===s2)?"td-one":(3===e1 && 12===e2)?"rd-two":(grid[2][11]===99)?"td--fina":(grid[2][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,12)} onMouseDown={() => clicked(3,12)}></td>
                        <td className={(3===s1 && 13===s2)?"td-one":(3===e1 && 13===e2)?"rd-two":(grid[2][12]===99)?"td--fina":(grid[2][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,13)} onMouseDown={() => clicked(3,13)}></td>
                        <td className={(3===s1 && 14===s2)?"td-one":(3===e1 && 14===e2)?"rd-two":(grid[2][13]===99)?"td--fina":(grid[2][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,14)} onMouseDown={() => clicked(3,14)}></td>
                        <td className={(3===s1 && 15===s2)?"td-one":(3===e1 && 15===e2)?"rd-two":(grid[2][14]===99)?"td--fina":(grid[2][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,15)} onMouseDown={() => clicked(3,15)}></td>
                        <td className={(3===s1 && 16===s2)?"td-one":(3===e1 && 16===e2)?"rd-two":(grid[2][15]===99)?"td--fina":(grid[2][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,16)} onMouseDown={() => clicked(3,16)}></td>
                        <td className={(3===s1 && 17===s2)?"td-one":(3===e1 && 17===e2)?"rd-two":(grid[2][16]===99)?"td--fina":(grid[2][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,17)} onMouseDown={() => clicked(3,17)}></td>
                        <td className={(3===s1 && 18===s2)?"td-one":(3===e1 && 18===e2)?"rd-two":(grid[2][17]===99)?"td--fina":(grid[2][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,18)} onMouseDown={() => clicked(3,18)}></td>
                        <td className={(3===s1 && 19===s2)?"td-one":(3===e1 && 19===e2)?"rd-two":(grid[2][18]===99)?"td--fina":(grid[2][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,19)} onMouseDown={() => clicked(3,19)}></td>
                        <td className={(3===s1 && 20===s2)?"td-one":(3===e1 && 20===e2)?"rd-two":(grid[2][19]===99)?"td--fina":(grid[2][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,20)} onMouseDown={() => clicked(3,20)}></td>
                        <td className={(3===s1 && 21===s2)?"td-one":(3===e1 && 21===e2)?"rd-two":(grid[2][20]===99)?"td--fina":(grid[2][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,21)} onMouseDown={() => clicked(3,21)}></td>
                        <td className={(3===s1 && 22===s2)?"td-one":(3===e1 && 22===e2)?"rd-two":(grid[2][21]===99)?"td--fina":(grid[2][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,22)} onMouseDown={() => clicked(3,22)}></td>
                        <td className={(3===s1 && 23===s2)?"td-one":(3===e1 && 23===e2)?"rd-two":(grid[2][22]===99)?"td--fina":(grid[2][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,23)} onMouseDown={() => clicked(3,23)}></td>
                        <td className={(3===s1 && 24===s2)?"td-one":(3===e1 && 24===e2)?"rd-two":(grid[2][23]===99)?"td--fina":(grid[2][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,24)} onMouseDown={() => clicked(3,24)}></td>
                        <td className={(3===s1 && 25===s2)?"td-one":(3===e1 && 25===e2)?"rd-two":(grid[2][24]===99)?"td--fina":(grid[2][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,25)} onMouseDown={() => clicked(3,25)}></td>
                        <td className={(3===s1 && 26===s2)?"td-one":(3===e1 && 26===e2)?"rd-two":(grid[2][25]===99)?"td--fina":(grid[2][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,26)} onMouseDown={() => clicked(3,26)}></td>
                        <td className={(3===s1 && 27===s2)?"td-one":(3===e1 && 27===e2)?"rd-two":(grid[2][26]===99)?"td--fina":(grid[2][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,27)} onMouseDown={() => clicked(3,27)}></td>
                        <td className={(3===s1 && 28===s2)?"td-one":(3===e1 && 28===e2)?"rd-two":(grid[2][27]===99)?"td--fina":(grid[2][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,28)} onMouseDown={() => clicked(3,28)}></td>
                        <td className={(3===s1 && 29===s2)?"td-one":(3===e1 && 29===e2)?"rd-two":(grid[2][28]===99)?"td--fina":(grid[2][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,29)} onMouseDown={() => clicked(3,29)}></td>
                        <td className={(3===s1 && 30===s2)?"td-one":(3===e1 && 30===e2)?"rd-two":(grid[2][29]===99)?"td--fina":(grid[2][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,30)} onMouseDown={() => clicked(3,30)}></td>
                        <td className={(3===s1 && 31===s2)?"td-one":(3===e1 && 31===e2)?"rd-two":(grid[2][30]===99)?"td--fina":(grid[2][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,31)} onMouseDown={() => clicked(3,31)}></td>
                        <td className={(3===s1 && 32===s2)?"td-one":(3===e1 && 32===e2)?"rd-two":(grid[2][31]===99)?"td--fina":(grid[2][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,32)} onMouseDown={() => clicked(3,32)}></td>
                        <td className={(3===s1 && 33===s2)?"td-one":(3===e1 && 33===e2)?"rd-two":(grid[2][32]===99)?"td--fina":(grid[2][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,33)} onMouseDown={() => clicked(3,33)}></td>
                        <td className={(3===s1 && 34===s2)?"td-one":(3===e1 && 34===e2)?"rd-two":(grid[2][33]===99)?"td--fina":(grid[2][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,34)} onMouseDown={() => clicked(3,34)}></td>
                        <td className={(3===s1 && 35===s2)?"td-one":(3===e1 && 35===e2)?"rd-two":(grid[2][34]===99)?"td--fina":(grid[2][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,35)} onMouseDown={() => clicked(3,35)}></td>
                        <td className={(3===s1 && 36===s2)?"td-one":(3===e1 && 36===e2)?"rd-two":(grid[2][35]===99)?"td--fina":(grid[2][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,36)} onMouseDown={() => clicked(3,36)}></td>
                        <td className={(3===s1 && 37===s2)?"td-one":(3===e1 && 37===e2)?"rd-two":(grid[2][36]===99)?"td--fina":(grid[2][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,37)} onMouseDown={() => clicked(3,37)}></td>
                        <td className={(3===s1 && 38===s2)?"td-one":(3===e1 && 38===e2)?"rd-two":(grid[2][37]===99)?"td--fina":(grid[2][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,38)} onMouseDown={() => clicked(3,38)}></td>
                        <td className={(3===s1 && 39===s2)?"td-one":(3===e1 && 39===e2)?"rd-two":(grid[2][38]===99)?"td--fina":(grid[2][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,39)} onMouseDown={() => clicked(3,39)}></td>
                        <td className={(3===s1 && 40===s2)?"td-one":(3===e1 && 40===e2)?"rd-two":(grid[2][39]===99)?"td--fina":(grid[2][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(3,40)} onMouseDown={() => clicked(3,40)}></td>
                    </tr>
                    <tr>
                        <td className={(4===s1 && 1===s2)?"td-one":(4===e1 && 1===e2)?"rd-two":(grid[3][0]===99)?"td--fina":(grid[3][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,1)} onMouseDown={() => clicked(4,1)}></td>
                        <td className={(4===s1 && 2===s2)?"td-one":(4===e1 && 2===e2)?"rd-two":(grid[3][1]===99)?"td--fina":(grid[3][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,2)} onMouseDown={() => clicked(4,2)}></td>
                        <td className={(4===s1 && 3===s2)?"td-one":(4===e1 && 3===e2)?"rd-two":(grid[3][2]===99)?"td--fina":(grid[3][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,3)} onMouseDown={() => clicked(4,3)}></td>
                        <td className={(4===s1 && 4===s2)?"td-one":(4===e1 && 4===e2)?"rd-two":(grid[3][3]===99)?"td--fina":(grid[3][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,4)} onMouseDown={() => clicked(4,4)}></td>
                        <td className={(4===s1 && 5===s2)?"td-one":(4===e1 && 5===e2)?"rd-two":(grid[3][4]===99)?"td--fina":(grid[3][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,5)} onMouseDown={() => clicked(4,5)}></td>
                        <td className={(4===s1 && 6===s2)?"td-one":(4===e1 && 6===e2)?"rd-two":(grid[3][5]===99)?"td--fina":(grid[3][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,6)} onMouseDown={() => clicked(4,6)}></td>
                        <td className={(4===s1 && 7===s2)?"td-one":(4===e1 && 7===e2)?"rd-two":(grid[3][6]===99)?"td--fina":(grid[3][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,7)} onMouseDown={() => clicked(4,7)}></td>
                        <td className={(4===s1 && 8===s2)?"td-one":(4===e1 && 8===e2)?"rd-two":(grid[3][7]===99)?"td--fina":(grid[3][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,8)} onMouseDown={() => clicked(4,8)}></td>
                        <td className={(4===s1 && 9===s2)?"td-one":(4===e1 && 9===e2)?"rd-two":(grid[3][8]===99)?"td--fina":(grid[3][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,9)} onMouseDown={() => clicked(4,9)}></td>
                        <td className={(4===s1 && 10===s2)?"td-one":(4===e1 && 10===e2)?"rd-two":(grid[3][9]===99)?"td--fina":(grid[3][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,10)} onMouseDown={() => clicked(4,10)}></td>
                        <td className={(4===s1 && 11===s2)?"td-one":(4===e1 && 11===e2)?"rd-two":(grid[3][10]===99)?"td--fina":(grid[3][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,11)} onMouseDown={() => clicked(4,11)}></td>
                        <td className={(4===s1 && 12===s2)?"td-one":(4===e1 && 12===e2)?"rd-two":(grid[3][11]===99)?"td--fina":(grid[3][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,12)} onMouseDown={() => clicked(4,12)}></td>
                        <td className={(4===s1 && 13===s2)?"td-one":(4===e1 && 13===e2)?"rd-two":(grid[3][12]===99)?"td--fina":(grid[3][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,13)} onMouseDown={() => clicked(4,13)}></td>
                        <td className={(4===s1 && 14===s2)?"td-one":(4===e1 && 14===e2)?"rd-two":(grid[3][13]===99)?"td--fina":(grid[3][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,14)} onMouseDown={() => clicked(4,14)}></td>
                        <td className={(4===s1 && 15===s2)?"td-one":(4===e1 && 15===e2)?"rd-two":(grid[3][14]===99)?"td--fina":(grid[3][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,15)} onMouseDown={() => clicked(4,15)}></td>
                        <td className={(4===s1 && 16===s2)?"td-one":(4===e1 && 16===e2)?"rd-two":(grid[3][15]===99)?"td--fina":(grid[3][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,16)} onMouseDown={() => clicked(4,16)}></td>
                        <td className={(4===s1 && 17===s2)?"td-one":(4===e1 && 17===e2)?"rd-two":(grid[3][16]===99)?"td--fina":(grid[3][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,17)} onMouseDown={() => clicked(4,17)}></td>
                        <td className={(4===s1 && 18===s2)?"td-one":(4===e1 && 18===e2)?"rd-two":(grid[3][17]===99)?"td--fina":(grid[3][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,18)} onMouseDown={() => clicked(4,18)}></td>
                        <td className={(4===s1 && 19===s2)?"td-one":(4===e1 && 19===e2)?"rd-two":(grid[3][18]===99)?"td--fina":(grid[3][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,19)} onMouseDown={() => clicked(4,19)}></td>
                        <td className={(4===s1 && 20===s2)?"td-one":(4===e1 && 20===e2)?"rd-two":(grid[3][19]===99)?"td--fina":(grid[3][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,20)} onMouseDown={() => clicked(4,20)}></td>
                        <td className={(4===s1 && 21===s2)?"td-one":(4===e1 && 21===e2)?"rd-two":(grid[3][20]===99)?"td--fina":(grid[3][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,21)} onMouseDown={() => clicked(4,21)}></td>
                        <td className={(4===s1 && 22===s2)?"td-one":(4===e1 && 22===e2)?"rd-two":(grid[3][21]===99)?"td--fina":(grid[3][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,22)} onMouseDown={() => clicked(4,22)}></td>
                        <td className={(4===s1 && 23===s2)?"td-one":(4===e1 && 23===e2)?"rd-two":(grid[3][22]===99)?"td--fina":(grid[3][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,23)} onMouseDown={() => clicked(4,23)}></td>
                        <td className={(4===s1 && 24===s2)?"td-one":(4===e1 && 24===e2)?"rd-two":(grid[3][23]===99)?"td--fina":(grid[3][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,24)} onMouseDown={() => clicked(4,24)}></td>
                        <td className={(4===s1 && 25===s2)?"td-one":(4===e1 && 25===e2)?"rd-two":(grid[3][24]===99)?"td--fina":(grid[3][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,25)} onMouseDown={() => clicked(4,25)}></td>
                        <td className={(4===s1 && 26===s2)?"td-one":(4===e1 && 26===e2)?"rd-two":(grid[3][25]===99)?"td--fina":(grid[3][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,26)} onMouseDown={() => clicked(4,26)}></td>
                        <td className={(4===s1 && 27===s2)?"td-one":(4===e1 && 27===e2)?"rd-two":(grid[3][26]===99)?"td--fina":(grid[3][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,27)} onMouseDown={() => clicked(4,27)}></td>
                        <td className={(4===s1 && 28===s2)?"td-one":(4===e1 && 28===e2)?"rd-two":(grid[3][27]===99)?"td--fina":(grid[3][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,28)} onMouseDown={() => clicked(4,28)}></td>
                        <td className={(4===s1 && 29===s2)?"td-one":(4===e1 && 29===e2)?"rd-two":(grid[3][28]===99)?"td--fina":(grid[3][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,29)} onMouseDown={() => clicked(4,29)}></td>
                        <td className={(4===s1 && 30===s2)?"td-one":(4===e1 && 30===e2)?"rd-two":(grid[3][29]===99)?"td--fina":(grid[3][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,30)} onMouseDown={() => clicked(4,30)}></td>
                        <td className={(4===s1 && 31===s2)?"td-one":(4===e1 && 31===e2)?"rd-two":(grid[3][30]===99)?"td--fina":(grid[3][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,31)} onMouseDown={() => clicked(4,31)}></td>
                        <td className={(4===s1 && 32===s2)?"td-one":(4===e1 && 32===e2)?"rd-two":(grid[3][31]===99)?"td--fina":(grid[3][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,32)} onMouseDown={() => clicked(4,32)}></td>
                        <td className={(4===s1 && 33===s2)?"td-one":(4===e1 && 33===e2)?"rd-two":(grid[3][32]===99)?"td--fina":(grid[3][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,33)} onMouseDown={() => clicked(4,33)}></td>
                        <td className={(4===s1 && 34===s2)?"td-one":(4===e1 && 34===e2)?"rd-two":(grid[3][33]===99)?"td--fina":(grid[3][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,34)} onMouseDown={() => clicked(4,34)}></td>
                        <td className={(4===s1 && 35===s2)?"td-one":(4===e1 && 35===e2)?"rd-two":(grid[3][34]===99)?"td--fina":(grid[3][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,35)} onMouseDown={() => clicked(4,35)}></td>
                        <td className={(4===s1 && 36===s2)?"td-one":(4===e1 && 36===e2)?"rd-two":(grid[3][35]===99)?"td--fina":(grid[3][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,36)} onMouseDown={() => clicked(4,36)}></td>
                        <td className={(4===s1 && 37===s2)?"td-one":(4===e1 && 37===e2)?"rd-two":(grid[3][36]===99)?"td--fina":(grid[3][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,37)} onMouseDown={() => clicked(4,37)}></td>
                        <td className={(4===s1 && 38===s2)?"td-one":(4===e1 && 38===e2)?"rd-two":(grid[3][37]===99)?"td--fina":(grid[3][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,38)} onMouseDown={() => clicked(4,38)}></td>
                        <td className={(4===s1 && 39===s2)?"td-one":(4===e1 && 39===e2)?"rd-two":(grid[3][38]===99)?"td--fina":(grid[3][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,39)} onMouseDown={() => clicked(4,39)}></td>
                        <td className={(4===s1 && 40===s2)?"td-one":(4===e1 && 40===e2)?"rd-two":(grid[3][39]===99)?"td--fina":(grid[3][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(4,40)} onMouseDown={() => clicked(4,40)}></td>
                    </tr>
                    <tr>
                        <td className={(5===s1 && 1===s2)?"td-one":(5===e1 && 1===e2)?"rd-two":(grid[4][0]===99)?"td--fina":(grid[4][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,1)} onMouseDown={() => clicked(5,1)}></td>
                        <td className={(5===s1 && 2===s2)?"td-one":(5===e1 && 2===e2)?"rd-two":(grid[4][1]===99)?"td--fina":(grid[4][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,2)} onMouseDown={() => clicked(5,2)}></td>
                        <td className={(5===s1 && 3===s2)?"td-one":(5===e1 && 3===e2)?"rd-two":(grid[4][2]===99)?"td--fina":(grid[4][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,3)} onMouseDown={() => clicked(5,3)}></td>
                        <td className={(5===s1 && 4===s2)?"td-one":(5===e1 && 4===e2)?"rd-two":(grid[4][3]===99)?"td--fina":(grid[4][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,4)} onMouseDown={() => clicked(5,4)}></td>
                        <td className={(5===s1 && 5===s2)?"td-one":(5===e1 && 5===e2)?"rd-two":(grid[4][4]===99)?"td--fina":(grid[4][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,5)} onMouseDown={() => clicked(5,5)}></td>
                        <td className={(5===s1 && 6===s2)?"td-one":(5===e1 && 6===e2)?"rd-two":(grid[4][5]===99)?"td--fina":(grid[4][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,6)} onMouseDown={() => clicked(5,6)}></td>
                        <td className={(5===s1 && 7===s2)?"td-one":(5===e1 && 7===e2)?"rd-two":(grid[4][6]===99)?"td--fina":(grid[4][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,7)} onMouseDown={() => clicked(5,7)}></td>
                        <td className={(5===s1 && 8===s2)?"td-one":(5===e1 && 8===e2)?"rd-two":(grid[4][7]===99)?"td--fina":(grid[4][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,8)} onMouseDown={() => clicked(5,8)}></td>
                        <td className={(5===s1 && 9===s2)?"td-one":(5===e1 && 9===e2)?"rd-two":(grid[4][8]===99)?"td--fina":(grid[4][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,9)} onMouseDown={() => clicked(5,9)}></td>
                        <td className={(5===s1 && 10===s2)?"td-one":(5===e1 && 10===e2)?"rd-two":(grid[4][9]===99)?"td--fina":(grid[4][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,10)} onMouseDown={() => clicked(5,10)}></td>
                        <td className={(5===s1 && 11===s2)?"td-one":(5===e1 && 11===e2)?"rd-two":(grid[4][10]===99)?"td--fina":(grid[4][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,11)} onMouseDown={() => clicked(5,11)}></td>
                        <td className={(5===s1 && 12===s2)?"td-one":(5===e1 && 12===e2)?"rd-two":(grid[4][11]===99)?"td--fina":(grid[4][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,12)} onMouseDown={() => clicked(5,12)}></td>
                        <td className={(5===s1 && 13===s2)?"td-one":(5===e1 && 13===e2)?"rd-two":(grid[4][12]===99)?"td--fina":(grid[4][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,13)} onMouseDown={() => clicked(5,13)}></td>
                        <td className={(5===s1 && 14===s2)?"td-one":(5===e1 && 14===e2)?"rd-two":(grid[4][13]===99)?"td--fina":(grid[4][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,14)} onMouseDown={() => clicked(5,14)}></td>
                        <td className={(5===s1 && 15===s2)?"td-one":(5===e1 && 15===e2)?"rd-two":(grid[4][14]===99)?"td--fina":(grid[4][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,15)} onMouseDown={() => clicked(5,15)}></td>
                        <td className={(5===s1 && 16===s2)?"td-one":(5===e1 && 16===e2)?"rd-two":(grid[4][15]===99)?"td--fina":(grid[4][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,16)} onMouseDown={() => clicked(5,16)}></td>
                        <td className={(5===s1 && 17===s2)?"td-one":(5===e1 && 17===e2)?"rd-two":(grid[4][16]===99)?"td--fina":(grid[4][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,17)} onMouseDown={() => clicked(5,17)}></td>
                        <td className={(5===s1 && 18===s2)?"td-one":(5===e1 && 18===e2)?"rd-two":(grid[4][17]===99)?"td--fina":(grid[4][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,18)} onMouseDown={() => clicked(5,18)}></td>
                        <td className={(5===s1 && 19===s2)?"td-one":(5===e1 && 19===e2)?"rd-two":(grid[4][18]===99)?"td--fina":(grid[4][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,19)} onMouseDown={() => clicked(5,19)}></td>
                        <td className={(5===s1 && 20===s2)?"td-one":(5===e1 && 20===e2)?"rd-two":(grid[4][19]===99)?"td--fina":(grid[4][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,20)} onMouseDown={() => clicked(5,20)}></td>
                        <td className={(5===s1 && 21===s2)?"td-one":(5===e1 && 21===e2)?"rd-two":(grid[4][20]===99)?"td--fina":(grid[4][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,21)} onMouseDown={() => clicked(5,21)}></td>
                        <td className={(5===s1 && 22===s2)?"td-one":(5===e1 && 22===e2)?"rd-two":(grid[4][21]===99)?"td--fina":(grid[4][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,22)} onMouseDown={() => clicked(5,22)}></td>
                        <td className={(5===s1 && 23===s2)?"td-one":(5===e1 && 23===e2)?"rd-two":(grid[4][22]===99)?"td--fina":(grid[4][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,23)} onMouseDown={() => clicked(5,23)}></td>
                        <td className={(5===s1 && 24===s2)?"td-one":(5===e1 && 24===e2)?"rd-two":(grid[4][23]===99)?"td--fina":(grid[4][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,24)} onMouseDown={() => clicked(5,24)}></td>
                        <td className={(5===s1 && 25===s2)?"td-one":(5===e1 && 25===e2)?"rd-two":(grid[4][24]===99)?"td--fina":(grid[4][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,25)} onMouseDown={() => clicked(5,25)}></td>
                        <td className={(5===s1 && 26===s2)?"td-one":(5===e1 && 26===e2)?"rd-two":(grid[4][25]===99)?"td--fina":(grid[4][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,26)} onMouseDown={() => clicked(5,26)}></td>
                        <td className={(5===s1 && 27===s2)?"td-one":(5===e1 && 27===e2)?"rd-two":(grid[4][26]===99)?"td--fina":(grid[4][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,27)} onMouseDown={() => clicked(5,27)}></td>
                        <td className={(5===s1 && 28===s2)?"td-one":(5===e1 && 28===e2)?"rd-two":(grid[4][27]===99)?"td--fina":(grid[4][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,28)} onMouseDown={() => clicked(5,28)}></td>
                        <td className={(5===s1 && 29===s2)?"td-one":(5===e1 && 29===e2)?"rd-two":(grid[4][28]===99)?"td--fina":(grid[4][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,29)} onMouseDown={() => clicked(5,29)}></td>
                        <td className={(5===s1 && 30===s2)?"td-one":(5===e1 && 30===e2)?"rd-two":(grid[4][29]===99)?"td--fina":(grid[4][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,30)} onMouseDown={() => clicked(5,30)}></td>
                        <td className={(5===s1 && 31===s2)?"td-one":(5===e1 && 31===e2)?"rd-two":(grid[4][30]===99)?"td--fina":(grid[4][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,31)} onMouseDown={() => clicked(5,31)}></td>
                        <td className={(5===s1 && 32===s2)?"td-one":(5===e1 && 32===e2)?"rd-two":(grid[4][31]===99)?"td--fina":(grid[4][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,32)} onMouseDown={() => clicked(5,32)}></td>
                        <td className={(5===s1 && 33===s2)?"td-one":(5===e1 && 33===e2)?"rd-two":(grid[4][32]===99)?"td--fina":(grid[4][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,33)} onMouseDown={() => clicked(5,33)}></td>
                        <td className={(5===s1 && 34===s2)?"td-one":(5===e1 && 34===e2)?"rd-two":(grid[4][33]===99)?"td--fina":(grid[4][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,34)} onMouseDown={() => clicked(5,34)}></td>
                        <td className={(5===s1 && 35===s2)?"td-one":(5===e1 && 35===e2)?"rd-two":(grid[4][34]===99)?"td--fina":(grid[4][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,35)} onMouseDown={() => clicked(5,35)}></td>
                        <td className={(5===s1 && 36===s2)?"td-one":(5===e1 && 36===e2)?"rd-two":(grid[4][35]===99)?"td--fina":(grid[4][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,36)} onMouseDown={() => clicked(5,36)}></td>
                        <td className={(5===s1 && 37===s2)?"td-one":(5===e1 && 37===e2)?"rd-two":(grid[4][36]===99)?"td--fina":(grid[4][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,37)} onMouseDown={() => clicked(5,37)}></td>
                        <td className={(5===s1 && 38===s2)?"td-one":(5===e1 && 38===e2)?"rd-two":(grid[4][37]===99)?"td--fina":(grid[4][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,38)} onMouseDown={() => clicked(5,38)}></td>
                        <td className={(5===s1 && 39===s2)?"td-one":(5===e1 && 39===e2)?"rd-two":(grid[4][38]===99)?"td--fina":(grid[4][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,39)} onMouseDown={() => clicked(5,39)}></td>
                        <td className={(5===s1 && 40===s2)?"td-one":(5===e1 && 40===e2)?"rd-two":(grid[4][39]===99)?"td--fina":(grid[4][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(5,40)} onMouseDown={() => clicked(5,40)}></td>
                    </tr>
                    <tr>
                        <td className={(6===s1 && 1===s2)?"td-one":(6===e1 && 1===e2)?"rd-two":(grid[5][0]===99)?"td--fina":(grid[5][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,1)} onMouseDown={() => clicked(6,1)}></td>
                        <td className={(6===s1 && 2===s2)?"td-one":(6===e1 && 2===e2)?"rd-two":(grid[5][1]===99)?"td--fina":(grid[5][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,2)} onMouseDown={() => clicked(6,2)}></td>
                        <td className={(6===s1 && 3===s2)?"td-one":(6===e1 && 3===e2)?"rd-two":(grid[5][2]===99)?"td--fina":(grid[5][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,3)} onMouseDown={() => clicked(6,3)}></td>
                        <td className={(6===s1 && 4===s2)?"td-one":(6===e1 && 4===e2)?"rd-two":(grid[5][3]===99)?"td--fina":(grid[5][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,4)} onMouseDown={() => clicked(6,4)}></td>
                        <td className={(6===s1 && 5===s2)?"td-one":(6===e1 && 5===e2)?"rd-two":(grid[5][4]===99)?"td--fina":(grid[5][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,5)} onMouseDown={() => clicked(6,5)}></td>
                        <td className={(6===s1 && 6===s2)?"td-one":(6===e1 && 6===e2)?"rd-two":(grid[5][5]===99)?"td--fina":(grid[5][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,6)} onMouseDown={() => clicked(6,6)}></td>
                        <td className={(6===s1 && 7===s2)?"td-one":(6===e1 && 7===e2)?"rd-two":(grid[5][6]===99)?"td--fina":(grid[5][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,7)} onMouseDown={() => clicked(6,7)}></td>
                        <td className={(6===s1 && 8===s2)?"td-one":(6===e1 && 8===e2)?"rd-two":(grid[5][7]===99)?"td--fina":(grid[5][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,8)} onMouseDown={() => clicked(6,8)}></td>
                        <td className={(6===s1 && 9===s2)?"td-one":(6===e1 && 9===e2)?"rd-two":(grid[5][8]===99)?"td--fina":(grid[5][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,9)} onMouseDown={() => clicked(6,9)}></td>
                        <td className={(6===s1 && 10===s2)?"td-one":(6===e1 && 10===e2)?"rd-two":(grid[5][9]===99)?"td--fina":(grid[5][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,10)} onMouseDown={() => clicked(6,10)}></td>
                        <td className={(6===s1 && 11===s2)?"td-one":(6===e1 && 11===e2)?"rd-two":(grid[5][10]===99)?"td--fina":(grid[5][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,11)} onMouseDown={() => clicked(6,11)}></td>
                        <td className={(6===s1 && 12===s2)?"td-one":(6===e1 && 12===e2)?"rd-two":(grid[5][11]===99)?"td--fina":(grid[5][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,12)} onMouseDown={() => clicked(6,12)}></td>
                        <td className={(6===s1 && 13===s2)?"td-one":(6===e1 && 13===e2)?"rd-two":(grid[5][12]===99)?"td--fina":(grid[5][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,13)} onMouseDown={() => clicked(6,13)}></td>
                        <td className={(6===s1 && 14===s2)?"td-one":(6===e1 && 14===e2)?"rd-two":(grid[5][13]===99)?"td--fina":(grid[5][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,14)} onMouseDown={() => clicked(6,14)}></td>
                        <td className={(6===s1 && 15===s2)?"td-one":(6===e1 && 15===e2)?"rd-two":(grid[5][14]===99)?"td--fina":(grid[5][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,15)} onMouseDown={() => clicked(6,15)}></td>
                        <td className={(6===s1 && 16===s2)?"td-one":(6===e1 && 16===e2)?"rd-two":(grid[5][15]===99)?"td--fina":(grid[5][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,16)} onMouseDown={() => clicked(6,16)}></td>
                        <td className={(6===s1 && 17===s2)?"td-one":(6===e1 && 17===e2)?"rd-two":(grid[5][16]===99)?"td--fina":(grid[5][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,17)} onMouseDown={() => clicked(6,17)}></td>
                        <td className={(6===s1 && 18===s2)?"td-one":(6===e1 && 18===e2)?"rd-two":(grid[5][17]===99)?"td--fina":(grid[5][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,18)} onMouseDown={() => clicked(6,18)}></td>
                        <td className={(6===s1 && 19===s2)?"td-one":(6===e1 && 19===e2)?"rd-two":(grid[5][18]===99)?"td--fina":(grid[5][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,19)} onMouseDown={() => clicked(6,19)}></td>
                        <td className={(6===s1 && 20===s2)?"td-one":(6===e1 && 20===e2)?"rd-two":(grid[5][19]===99)?"td--fina":(grid[5][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,20)} onMouseDown={() => clicked(6,20)}></td>
                        <td className={(6===s1 && 21===s2)?"td-one":(6===e1 && 21===e2)?"rd-two":(grid[5][20]===99)?"td--fina":(grid[5][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,21)} onMouseDown={() => clicked(6,21)}></td>
                        <td className={(6===s1 && 22===s2)?"td-one":(6===e1 && 22===e2)?"rd-two":(grid[5][21]===99)?"td--fina":(grid[5][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,22)} onMouseDown={() => clicked(6,22)}></td>
                        <td className={(6===s1 && 23===s2)?"td-one":(6===e1 && 23===e2)?"rd-two":(grid[5][22]===99)?"td--fina":(grid[5][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,23)} onMouseDown={() => clicked(6,23)}></td>
                        <td className={(6===s1 && 24===s2)?"td-one":(6===e1 && 24===e2)?"rd-two":(grid[5][23]===99)?"td--fina":(grid[5][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,24)} onMouseDown={() => clicked(6,24)}></td>
                        <td className={(6===s1 && 25===s2)?"td-one":(6===e1 && 25===e2)?"rd-two":(grid[5][24]===99)?"td--fina":(grid[5][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,25)} onMouseDown={() => clicked(6,25)}></td>
                        <td className={(6===s1 && 26===s2)?"td-one":(6===e1 && 26===e2)?"rd-two":(grid[5][25]===99)?"td--fina":(grid[5][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,26)} onMouseDown={() => clicked(6,26)}></td>
                        <td className={(6===s1 && 27===s2)?"td-one":(6===e1 && 27===e2)?"rd-two":(grid[5][26]===99)?"td--fina":(grid[5][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,27)} onMouseDown={() => clicked(6,27)}></td>
                        <td className={(6===s1 && 28===s2)?"td-one":(6===e1 && 28===e2)?"rd-two":(grid[5][27]===99)?"td--fina":(grid[5][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,28)} onMouseDown={() => clicked(6,28)}></td>
                        <td className={(6===s1 && 29===s2)?"td-one":(6===e1 && 29===e2)?"rd-two":(grid[5][28]===99)?"td--fina":(grid[5][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,29)} onMouseDown={() => clicked(6,29)}></td>
                        <td className={(6===s1 && 30===s2)?"td-one":(6===e1 && 30===e2)?"rd-two":(grid[5][29]===99)?"td--fina":(grid[5][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,30)} onMouseDown={() => clicked(6,30)}></td>
                        <td className={(6===s1 && 31===s2)?"td-one":(6===e1 && 31===e2)?"rd-two":(grid[5][30]===99)?"td--fina":(grid[5][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,31)} onMouseDown={() => clicked(6,31)}></td>
                        <td className={(6===s1 && 32===s2)?"td-one":(6===e1 && 32===e2)?"rd-two":(grid[5][31]===99)?"td--fina":(grid[5][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,32)} onMouseDown={() => clicked(6,32)}></td>
                        <td className={(6===s1 && 33===s2)?"td-one":(6===e1 && 33===e2)?"rd-two":(grid[5][32]===99)?"td--fina":(grid[5][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,33)} onMouseDown={() => clicked(6,33)}></td>
                        <td className={(6===s1 && 34===s2)?"td-one":(6===e1 && 34===e2)?"rd-two":(grid[5][33]===99)?"td--fina":(grid[5][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,34)} onMouseDown={() => clicked(6,34)}></td>
                        <td className={(6===s1 && 35===s2)?"td-one":(6===e1 && 35===e2)?"rd-two":(grid[5][34]===99)?"td--fina":(grid[5][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,35)} onMouseDown={() => clicked(6,35)}></td>
                        <td className={(6===s1 && 36===s2)?"td-one":(6===e1 && 36===e2)?"rd-two":(grid[5][35]===99)?"td--fina":(grid[5][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,36)} onMouseDown={() => clicked(6,36)}></td>
                        <td className={(6===s1 && 37===s2)?"td-one":(6===e1 && 37===e2)?"rd-two":(grid[5][36]===99)?"td--fina":(grid[5][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,37)} onMouseDown={() => clicked(6,37)}></td>
                        <td className={(6===s1 && 38===s2)?"td-one":(6===e1 && 38===e2)?"rd-two":(grid[5][37]===99)?"td--fina":(grid[5][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,38)} onMouseDown={() => clicked(6,38)}></td>
                        <td className={(6===s1 && 39===s2)?"td-one":(6===e1 && 39===e2)?"rd-two":(grid[5][38]===99)?"td--fina":(grid[5][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,39)} onMouseDown={() => clicked(6,39)}></td>
                        <td className={(6===s1 && 40===s2)?"td-one":(6===e1 && 40===e2)?"rd-two":(grid[5][39]===99)?"td--fina":(grid[5][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(6,40)} onMouseDown={() => clicked(6,40)}></td>
                    </tr>
                    <tr>
                        <td className={(7===s1 && 1===s2)?"td-one":(7===e1 && 1===e2)?"rd-two":(grid[6][0]===99)?"td--fina":(grid[6][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,1)} onMouseDown={() => clicked(7,1)}></td>
                        <td className={(7===s1 && 2===s2)?"td-one":(7===e1 && 2===e2)?"rd-two":(grid[6][1]===99)?"td--fina":(grid[6][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,2)} onMouseDown={() => clicked(7,2)}></td>
                        <td className={(7===s1 && 3===s2)?"td-one":(7===e1 && 3===e2)?"rd-two":(grid[6][2]===99)?"td--fina":(grid[6][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,3)} onMouseDown={() => clicked(7,3)}></td>
                        <td className={(7===s1 && 4===s2)?"td-one":(7===e1 && 4===e2)?"rd-two":(grid[6][3]===99)?"td--fina":(grid[6][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,4)} onMouseDown={() => clicked(7,4)}></td>
                        <td className={(7===s1 && 5===s2)?"td-one":(7===e1 && 5===e2)?"rd-two":(grid[6][4]===99)?"td--fina":(grid[6][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,5)} onMouseDown={() => clicked(7,5)}></td>
                        <td className={(7===s1 && 6===s2)?"td-one":(7===e1 && 6===e2)?"rd-two":(grid[6][5]===99)?"td--fina":(grid[6][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,6)} onMouseDown={() => clicked(7,6)}></td>
                        <td className={(7===s1 && 7===s2)?"td-one":(7===e1 && 7===e2)?"rd-two":(grid[6][6]===99)?"td--fina":(grid[6][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,7)} onMouseDown={() => clicked(7,7)}></td>
                        <td className={(7===s1 && 8===s2)?"td-one":(7===e1 && 8===e2)?"rd-two":(grid[6][7]===99)?"td--fina":(grid[6][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,8)} onMouseDown={() => clicked(7,8)}></td>
                        <td className={(7===s1 && 9===s2)?"td-one":(7===e1 && 9===e2)?"rd-two":(grid[6][8]===99)?"td--fina":(grid[6][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,9)} onMouseDown={() => clicked(7,9)}></td>
                        <td className={(7===s1 && 10===s2)?"td-one":(7===e1 && 10===e2)?"rd-two":(grid[6][9]===99)?"td--fina":(grid[6][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,10)} onMouseDown={() => clicked(7,10)}></td>
                        <td className={(7===s1 && 11===s2)?"td-one":(7===e1 && 11===e2)?"rd-two":(grid[6][10]===99)?"td--fina":(grid[6][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,11)} onMouseDown={() => clicked(7,11)}></td>
                        <td className={(7===s1 && 12===s2)?"td-one":(7===e1 && 12===e2)?"rd-two":(grid[6][11]===99)?"td--fina":(grid[6][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,12)} onMouseDown={() => clicked(7,12)}></td>
                        <td className={(7===s1 && 13===s2)?"td-one":(7===e1 && 13===e2)?"rd-two":(grid[6][12]===99)?"td--fina":(grid[6][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,13)} onMouseDown={() => clicked(7,13)}></td>
                        <td className={(7===s1 && 14===s2)?"td-one":(7===e1 && 14===e2)?"rd-two":(grid[6][13]===99)?"td--fina":(grid[6][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,14)} onMouseDown={() => clicked(7,14)}></td>
                        <td className={(7===s1 && 15===s2)?"td-one":(7===e1 && 15===e2)?"rd-two":(grid[6][14]===99)?"td--fina":(grid[6][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,15)} onMouseDown={() => clicked(7,15)}></td>
                        <td className={(7===s1 && 16===s2)?"td-one":(7===e1 && 16===e2)?"rd-two":(grid[6][15]===99)?"td--fina":(grid[6][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,16)} onMouseDown={() => clicked(7,16)}></td>
                        <td className={(7===s1 && 17===s2)?"td-one":(7===e1 && 17===e2)?"rd-two":(grid[6][16]===99)?"td--fina":(grid[6][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,17)} onMouseDown={() => clicked(7,17)}></td>
                        <td className={(7===s1 && 18===s2)?"td-one":(7===e1 && 18===e2)?"rd-two":(grid[6][17]===99)?"td--fina":(grid[6][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,18)} onMouseDown={() => clicked(7,18)}></td>
                        <td className={(7===s1 && 19===s2)?"td-one":(7===e1 && 19===e2)?"rd-two":(grid[6][18]===99)?"td--fina":(grid[6][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,19)} onMouseDown={() => clicked(7,19)}></td>
                        <td className={(7===s1 && 20===s2)?"td-one":(7===e1 && 20===e2)?"rd-two":(grid[6][19]===99)?"td--fina":(grid[6][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,20)} onMouseDown={() => clicked(7,20)}></td>
                        <td className={(7===s1 && 21===s2)?"td-one":(7===e1 && 21===e2)?"rd-two":(grid[6][20]===99)?"td--fina":(grid[6][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,21)} onMouseDown={() => clicked(7,21)}></td>
                        <td className={(7===s1 && 22===s2)?"td-one":(7===e1 && 22===e2)?"rd-two":(grid[6][21]===99)?"td--fina":(grid[6][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,22)} onMouseDown={() => clicked(7,22)}></td>
                        <td className={(7===s1 && 23===s2)?"td-one":(7===e1 && 23===e2)?"rd-two":(grid[6][22]===99)?"td--fina":(grid[6][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,23)} onMouseDown={() => clicked(7,23)}></td>
                        <td className={(7===s1 && 24===s2)?"td-one":(7===e1 && 24===e2)?"rd-two":(grid[6][23]===99)?"td--fina":(grid[6][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,24)} onMouseDown={() => clicked(7,24)}></td>
                        <td className={(7===s1 && 25===s2)?"td-one":(7===e1 && 25===e2)?"rd-two":(grid[6][24]===99)?"td--fina":(grid[6][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,25)} onMouseDown={() => clicked(7,25)}></td>
                        <td className={(7===s1 && 26===s2)?"td-one":(7===e1 && 26===e2)?"rd-two":(grid[6][25]===99)?"td--fina":(grid[6][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,26)} onMouseDown={() => clicked(7,26)}></td>
                        <td className={(7===s1 && 27===s2)?"td-one":(7===e1 && 27===e2)?"rd-two":(grid[6][26]===99)?"td--fina":(grid[6][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,27)} onMouseDown={() => clicked(7,27)}></td>
                        <td className={(7===s1 && 28===s2)?"td-one":(7===e1 && 28===e2)?"rd-two":(grid[6][27]===99)?"td--fina":(grid[6][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,28)} onMouseDown={() => clicked(7,28)}></td>
                        <td className={(7===s1 && 29===s2)?"td-one":(7===e1 && 29===e2)?"rd-two":(grid[6][28]===99)?"td--fina":(grid[6][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,29)} onMouseDown={() => clicked(7,29)}></td>
                        <td className={(7===s1 && 30===s2)?"td-one":(7===e1 && 30===e2)?"rd-two":(grid[6][29]===99)?"td--fina":(grid[6][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,30)} onMouseDown={() => clicked(7,30)}></td>
                        <td className={(7===s1 && 31===s2)?"td-one":(7===e1 && 31===e2)?"rd-two":(grid[6][30]===99)?"td--fina":(grid[6][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,31)} onMouseDown={() => clicked(7,31)}></td>
                        <td className={(7===s1 && 32===s2)?"td-one":(7===e1 && 32===e2)?"rd-two":(grid[6][31]===99)?"td--fina":(grid[6][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,32)} onMouseDown={() => clicked(7,32)}></td>
                        <td className={(7===s1 && 33===s2)?"td-one":(7===e1 && 33===e2)?"rd-two":(grid[6][32]===99)?"td--fina":(grid[6][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,33)} onMouseDown={() => clicked(7,33)}></td>
                        <td className={(7===s1 && 34===s2)?"td-one":(7===e1 && 34===e2)?"rd-two":(grid[6][33]===99)?"td--fina":(grid[6][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,34)} onMouseDown={() => clicked(7,34)}></td>
                        <td className={(7===s1 && 35===s2)?"td-one":(7===e1 && 35===e2)?"rd-two":(grid[6][34]===99)?"td--fina":(grid[6][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,35)} onMouseDown={() => clicked(7,35)}></td>
                        <td className={(7===s1 && 36===s2)?"td-one":(7===e1 && 36===e2)?"rd-two":(grid[6][35]===99)?"td--fina":(grid[6][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,36)} onMouseDown={() => clicked(7,36)}></td>
                        <td className={(7===s1 && 37===s2)?"td-one":(7===e1 && 37===e2)?"rd-two":(grid[6][36]===99)?"td--fina":(grid[6][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,37)} onMouseDown={() => clicked(7,37)}></td>
                        <td className={(7===s1 && 38===s2)?"td-one":(7===e1 && 38===e2)?"rd-two":(grid[6][37]===99)?"td--fina":(grid[6][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,38)} onMouseDown={() => clicked(7,38)}></td>
                        <td className={(7===s1 && 39===s2)?"td-one":(7===e1 && 39===e2)?"rd-two":(grid[6][38]===99)?"td--fina":(grid[6][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,39)} onMouseDown={() => clicked(7,39)}></td>
                        <td className={(7===s1 && 40===s2)?"td-one":(7===e1 && 40===e2)?"rd-two":(grid[6][39]===99)?"td--fina":(grid[6][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(7,40)} onMouseDown={() => clicked(7,40)}></td>
                    </tr>
                   <tr>
                        <td className={(8===s1 && 1===s2)?"td-one":(8===e1 && 1===e2)?"rd-two":(grid[7][0]===99)?"td--fina":(grid[7][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,1)} onMouseDown={() => clicked(8,1)}></td>
                        <td className={(8===s1 && 2===s2)?"td-one":(8===e1 && 2===e2)?"rd-two":(grid[7][1]===99)?"td--fina":(grid[7][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,2)} onMouseDown={() => clicked(8,2)}></td>
                        <td className={(8===s1 && 3===s2)?"td-one":(8===e1 && 3===e2)?"rd-two":(grid[7][2]===99)?"td--fina":(grid[7][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,3)} onMouseDown={() => clicked(8,3)}></td>
                        <td className={(8===s1 && 4===s2)?"td-one":(8===e1 && 4===e2)?"rd-two":(grid[7][3]===99)?"td--fina":(grid[7][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,4)} onMouseDown={() => clicked(8,4)}></td>
                        <td className={(8===s1 && 5===s2)?"td-one":(8===e1 && 5===e2)?"rd-two":(grid[7][4]===99)?"td--fina":(grid[7][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,5)} onMouseDown={() => clicked(8,5)}></td>
                        <td className={(8===s1 && 6===s2)?"td-one":(8===e1 && 6===e2)?"rd-two":(grid[7][5]===99)?"td--fina":(grid[7][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,6)} onMouseDown={() => clicked(8,6)}></td>
                        <td className={(8===s1 && 7===s2)?"td-one":(8===e1 && 7===e2)?"rd-two":(grid[7][6]===99)?"td--fina":(grid[7][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,7)} onMouseDown={() => clicked(8,7)}></td>
                        <td className={(8===s1 && 8===s2)?"td-one":(8===e1 && 8===e2)?"rd-two":(grid[7][7]===99)?"td--fina":(grid[7][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,8)} onMouseDown={() => clicked(8,8)}></td>
                        <td className={(8===s1 && 9===s2)?"td-one":(8===e1 && 9===e2)?"rd-two":(grid[7][8]===99)?"td--fina":(grid[7][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,9)} onMouseDown={() => clicked(8,9)}></td>
                        <td className={(8===s1 && 10===s2)?"td-one":(8===e1 && 10===e2)?"rd-two":(grid[7][9]===99)?"td--fina":(grid[7][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,10)} onMouseDown={() => clicked(8,10)}></td>
                        <td className={(8===s1 && 11===s2)?"td-one":(8===e1 && 11===e2)?"rd-two":(grid[7][10]===99)?"td--fina":(grid[7][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,11)} onMouseDown={() => clicked(8,11)}></td>
                        <td className={(8===s1 && 12===s2)?"td-one":(8===e1 && 12===e2)?"rd-two":(grid[7][11]===99)?"td--fina":(grid[7][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,12)} onMouseDown={() => clicked(8,12)}></td>
                        <td className={(8===s1 && 13===s2)?"td-one":(8===e1 && 13===e2)?"rd-two":(grid[7][12]===99)?"td--fina":(grid[7][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,13)} onMouseDown={() => clicked(8,13)}></td>
                        <td className={(8===s1 && 14===s2)?"td-one":(8===e1 && 14===e2)?"rd-two":(grid[7][13]===99)?"td--fina":(grid[7][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,14)} onMouseDown={() => clicked(8,14)}></td>
                        <td className={(8===s1 && 15===s2)?"td-one":(8===e1 && 15===e2)?"rd-two":(grid[7][14]===99)?"td--fina":(grid[7][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,15)} onMouseDown={() => clicked(8,15)}></td>
                        <td className={(8===s1 && 16===s2)?"td-one":(8===e1 && 16===e2)?"rd-two":(grid[7][15]===99)?"td--fina":(grid[7][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,16)} onMouseDown={() => clicked(8,16)}></td>
                        <td className={(8===s1 && 17===s2)?"td-one":(8===e1 && 17===e2)?"rd-two":(grid[7][16]===99)?"td--fina":(grid[7][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,17)} onMouseDown={() => clicked(8,17)}></td>
                        <td className={(8===s1 && 18===s2)?"td-one":(8===e1 && 18===e2)?"rd-two":(grid[7][17]===99)?"td--fina":(grid[7][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,18)} onMouseDown={() => clicked(8,18)}></td>
                        <td className={(8===s1 && 19===s2)?"td-one":(8===e1 && 19===e2)?"rd-two":(grid[7][18]===99)?"td--fina":(grid[7][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,19)} onMouseDown={() => clicked(8,19)}></td>
                        <td className={(8===s1 && 20===s2)?"td-one":(8===e1 && 20===e2)?"rd-two":(grid[7][19]===99)?"td--fina":(grid[7][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,20)} onMouseDown={() => clicked(8,20)}></td>
                        <td className={(8===s1 && 21===s2)?"td-one":(8===e1 && 21===e2)?"rd-two":(grid[7][20]===99)?"td--fina":(grid[7][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,21)} onMouseDown={() => clicked(8,21)}></td>
                        <td className={(8===s1 && 22===s2)?"td-one":(8===e1 && 22===e2)?"rd-two":(grid[7][21]===99)?"td--fina":(grid[7][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,22)} onMouseDown={() => clicked(8,22)}></td>
                        <td className={(8===s1 && 23===s2)?"td-one":(8===e1 && 23===e2)?"rd-two":(grid[7][22]===99)?"td--fina":(grid[7][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,23)} onMouseDown={() => clicked(8,23)}></td>
                        <td className={(8===s1 && 24===s2)?"td-one":(8===e1 && 24===e2)?"rd-two":(grid[7][23]===99)?"td--fina":(grid[7][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,24)} onMouseDown={() => clicked(8,24)}></td>
                        <td className={(8===s1 && 25===s2)?"td-one":(8===e1 && 25===e2)?"rd-two":(grid[7][24]===99)?"td--fina":(grid[7][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,25)} onMouseDown={() => clicked(8,25)}></td>
                        <td className={(8===s1 && 26===s2)?"td-one":(8===e1 && 26===e2)?"rd-two":(grid[7][25]===99)?"td--fina":(grid[7][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,26)} onMouseDown={() => clicked(8,26)}></td>
                        <td className={(8===s1 && 27===s2)?"td-one":(8===e1 && 27===e2)?"rd-two":(grid[7][26]===99)?"td--fina":(grid[7][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,27)} onMouseDown={() => clicked(8,27)}></td>
                        <td className={(8===s1 && 28===s2)?"td-one":(8===e1 && 28===e2)?"rd-two":(grid[7][27]===99)?"td--fina":(grid[7][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,28)} onMouseDown={() => clicked(8,28)}></td>
                        <td className={(8===s1 && 29===s2)?"td-one":(8===e1 && 29===e2)?"rd-two":(grid[7][28]===99)?"td--fina":(grid[7][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,29)} onMouseDown={() => clicked(8,29)}></td>
                        <td className={(8===s1 && 30===s2)?"td-one":(8===e1 && 30===e2)?"rd-two":(grid[7][29]===99)?"td--fina":(grid[7][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,30)} onMouseDown={() => clicked(8,30)}></td>
                        <td className={(8===s1 && 31===s2)?"td-one":(8===e1 && 31===e2)?"rd-two":(grid[7][30]===99)?"td--fina":(grid[7][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,31)} onMouseDown={() => clicked(8,31)}></td>
                        <td className={(8===s1 && 32===s2)?"td-one":(8===e1 && 32===e2)?"rd-two":(grid[7][31]===99)?"td--fina":(grid[7][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,32)} onMouseDown={() => clicked(8,32)}></td>
                        <td className={(8===s1 && 33===s2)?"td-one":(8===e1 && 33===e2)?"rd-two":(grid[7][32]===99)?"td--fina":(grid[7][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,33)} onMouseDown={() => clicked(8,33)}></td>
                        <td className={(8===s1 && 34===s2)?"td-one":(8===e1 && 34===e2)?"rd-two":(grid[7][33]===99)?"td--fina":(grid[7][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,34)} onMouseDown={() => clicked(8,34)}></td>
                        <td className={(8===s1 && 35===s2)?"td-one":(8===e1 && 35===e2)?"rd-two":(grid[7][34]===99)?"td--fina":(grid[7][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,35)} onMouseDown={() => clicked(8,35)}></td>
                        <td className={(8===s1 && 36===s2)?"td-one":(8===e1 && 36===e2)?"rd-two":(grid[7][35]===99)?"td--fina":(grid[7][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,36)} onMouseDown={() => clicked(8,36)}></td>
                        <td className={(8===s1 && 37===s2)?"td-one":(8===e1 && 37===e2)?"rd-two":(grid[7][36]===99)?"td--fina":(grid[7][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,37)} onMouseDown={() => clicked(8,37)}></td>
                        <td className={(8===s1 && 38===s2)?"td-one":(8===e1 && 38===e2)?"rd-two":(grid[7][37]===99)?"td--fina":(grid[7][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,38)} onMouseDown={() => clicked(8,38)}></td>
                        <td className={(8===s1 && 39===s2)?"td-one":(8===e1 && 39===e2)?"rd-two":(grid[7][38]===99)?"td--fina":(grid[7][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,39)} onMouseDown={() => clicked(8,39)}></td>
                        <td className={(8===s1 && 40===s2)?"td-one":(8===e1 && 40===e2)?"rd-two":(grid[7][39]===99)?"td--fina":(grid[7][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(8,40)} onMouseDown={() => clicked(8,40)}></td>
                    </tr>
                    <tr>
                        <td className={(9===s1 && 1===s2)?"td-one":(9===e1 && 1===e2)?"rd-two":(grid[8][0]===99)?"td--fina":(grid[8][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,1)} onMouseDown={() => clicked(9,1)}></td>
                        <td className={(9===s1 && 2===s2)?"td-one":(9===e1 && 2===e2)?"rd-two":(grid[8][1]===99)?"td--fina":(grid[8][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,2)} onMouseDown={() => clicked(9,2)}></td>
                        <td className={(9===s1 && 3===s2)?"td-one":(9===e1 && 3===e2)?"rd-two":(grid[8][2]===99)?"td--fina":(grid[8][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,3)} onMouseDown={() => clicked(9,3)}></td>
                        <td className={(9===s1 && 4===s2)?"td-one":(9===e1 && 4===e2)?"rd-two":(grid[8][3]===99)?"td--fina":(grid[8][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,4)} onMouseDown={() => clicked(9,4)}></td>
                        <td className={(9===s1 && 5===s2)?"td-one":(9===e1 && 5===e2)?"rd-two":(grid[8][4]===99)?"td--fina":(grid[8][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,5)} onMouseDown={() => clicked(9,5)}></td>
                        <td className={(9===s1 && 6===s2)?"td-one":(9===e1 && 6===e2)?"rd-two":(grid[8][5]===99)?"td--fina":(grid[8][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,6)} onMouseDown={() => clicked(9,6)}></td>
                        <td className={(9===s1 && 7===s2)?"td-one":(9===e1 && 7===e2)?"rd-two":(grid[8][6]===99)?"td--fina":(grid[8][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,7)} onMouseDown={() => clicked(9,7)}></td>
                        <td className={(9===s1 && 8===s2)?"td-one":(9===e1 && 8===e2)?"rd-two":(grid[8][7]===99)?"td--fina":(grid[8][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,8)} onMouseDown={() => clicked(9,8)}></td>
                        <td className={(9===s1 && 9===s2)?"td-one":(9===e1 && 9===e2)?"rd-two":(grid[8][8]===99)?"td--fina":(grid[8][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,9)} onMouseDown={() => clicked(9,9)}></td>
                        <td className={(9===s1 && 10===s2)?"td-one":(9===e1 && 10===e2)?"rd-two":(grid[8][9]===99)?"td--fina":(grid[8][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,10)} onMouseDown={() => clicked(9,10)}></td>
                        <td className={(9===s1 && 11===s2)?"td-one":(9===e1 && 11===e2)?"rd-two":(grid[8][10]===99)?"td--fina":(grid[8][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,11)} onMouseDown={() => clicked(9,11)}></td>
                        <td className={(9===s1 && 12===s2)?"td-one":(9===e1 && 12===e2)?"rd-two":(grid[8][11]===99)?"td--fina":(grid[8][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,12)} onMouseDown={() => clicked(9,12)}></td>
                        <td className={(9===s1 && 13===s2)?"td-one":(9===e1 && 13===e2)?"rd-two":(grid[8][12]===99)?"td--fina":(grid[8][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,13)} onMouseDown={() => clicked(9,13)}></td>
                        <td className={(9===s1 && 14===s2)?"td-one":(9===e1 && 14===e2)?"rd-two":(grid[8][13]===99)?"td--fina":(grid[8][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,14)} onMouseDown={() => clicked(9,14)}></td>
                        <td className={(9===s1 && 15===s2)?"td-one":(9===e1 && 15===e2)?"rd-two":(grid[8][14]===99)?"td--fina":(grid[8][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,15)} onMouseDown={() => clicked(9,15)}></td>
                        <td className={(9===s1 && 16===s2)?"td-one":(9===e1 && 16===e2)?"rd-two":(grid[8][15]===99)?"td--fina":(grid[8][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,16)} onMouseDown={() => clicked(9,16)}></td>
                        <td className={(9===s1 && 17===s2)?"td-one":(9===e1 && 17===e2)?"rd-two":(grid[8][16]===99)?"td--fina":(grid[8][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,17)} onMouseDown={() => clicked(9,17)}></td>
                        <td className={(9===s1 && 18===s2)?"td-one":(9===e1 && 18===e2)?"rd-two":(grid[8][17]===99)?"td--fina":(grid[8][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,18)} onMouseDown={() => clicked(9,18)}></td>
                        <td className={(9===s1 && 19===s2)?"td-one":(9===e1 && 19===e2)?"rd-two":(grid[8][18]===99)?"td--fina":(grid[8][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,19)} onMouseDown={() => clicked(9,19)}></td>
                        <td className={(9===s1 && 20===s2)?"td-one":(9===e1 && 20===e2)?"rd-two":(grid[8][19]===99)?"td--fina":(grid[8][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,20)} onMouseDown={() => clicked(9,20)}></td>
                        <td className={(9===s1 && 21===s2)?"td-one":(9===e1 && 21===e2)?"rd-two":(grid[8][20]===99)?"td--fina":(grid[8][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,21)} onMouseDown={() => clicked(9,21)}></td>
                        <td className={(9===s1 && 22===s2)?"td-one":(9===e1 && 22===e2)?"rd-two":(grid[8][21]===99)?"td--fina":(grid[8][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,22)} onMouseDown={() => clicked(9,22)}></td>
                        <td className={(9===s1 && 23===s2)?"td-one":(9===e1 && 23===e2)?"rd-two":(grid[8][22]===99)?"td--fina":(grid[8][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,23)} onMouseDown={() => clicked(9,23)}></td>
                        <td className={(9===s1 && 24===s2)?"td-one":(9===e1 && 24===e2)?"rd-two":(grid[8][23]===99)?"td--fina":(grid[8][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,24)} onMouseDown={() => clicked(9,24)}></td>
                        <td className={(9===s1 && 25===s2)?"td-one":(9===e1 && 25===e2)?"rd-two":(grid[8][24]===99)?"td--fina":(grid[8][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,25)} onMouseDown={() => clicked(9,25)}></td>
                        <td className={(9===s1 && 26===s2)?"td-one":(9===e1 && 26===e2)?"rd-two":(grid[8][25]===99)?"td--fina":(grid[8][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,26)} onMouseDown={() => clicked(9,26)}></td>
                        <td className={(9===s1 && 27===s2)?"td-one":(9===e1 && 27===e2)?"rd-two":(grid[8][26]===99)?"td--fina":(grid[8][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,27)} onMouseDown={() => clicked(9,27)}></td>
                        <td className={(9===s1 && 28===s2)?"td-one":(9===e1 && 28===e2)?"rd-two":(grid[8][27]===99)?"td--fina":(grid[8][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,28)} onMouseDown={() => clicked(9,28)}></td>
                        <td className={(9===s1 && 29===s2)?"td-one":(9===e1 && 29===e2)?"rd-two":(grid[8][28]===99)?"td--fina":(grid[8][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,29)} onMouseDown={() => clicked(9,29)}></td>
                        <td className={(9===s1 && 30===s2)?"td-one":(9===e1 && 30===e2)?"rd-two":(grid[8][29]===99)?"td--fina":(grid[8][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,30)} onMouseDown={() => clicked(9,30)}></td>
                        <td className={(9===s1 && 31===s2)?"td-one":(9===e1 && 31===e2)?"rd-two":(grid[8][30]===99)?"td--fina":(grid[8][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,31)} onMouseDown={() => clicked(9,31)}></td>
                        <td className={(9===s1 && 32===s2)?"td-one":(9===e1 && 32===e2)?"rd-two":(grid[8][31]===99)?"td--fina":(grid[8][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,32)} onMouseDown={() => clicked(9,32)}></td>
                        <td className={(9===s1 && 33===s2)?"td-one":(9===e1 && 33===e2)?"rd-two":(grid[8][32]===99)?"td--fina":(grid[8][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,33)} onMouseDown={() => clicked(9,33)}></td>
                        <td className={(9===s1 && 34===s2)?"td-one":(9===e1 && 34===e2)?"rd-two":(grid[8][33]===99)?"td--fina":(grid[8][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,34)} onMouseDown={() => clicked(9,34)}></td>
                        <td className={(9===s1 && 35===s2)?"td-one":(9===e1 && 35===e2)?"rd-two":(grid[8][34]===99)?"td--fina":(grid[8][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,35)} onMouseDown={() => clicked(9,35)}></td>
                        <td className={(9===s1 && 36===s2)?"td-one":(9===e1 && 36===e2)?"rd-two":(grid[8][35]===99)?"td--fina":(grid[8][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,36)} onMouseDown={() => clicked(9,36)}></td>
                        <td className={(9===s1 && 37===s2)?"td-one":(9===e1 && 37===e2)?"rd-two":(grid[8][36]===99)?"td--fina":(grid[8][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,37)} onMouseDown={() => clicked(9,37)}></td>
                        <td className={(9===s1 && 38===s2)?"td-one":(9===e1 && 38===e2)?"rd-two":(grid[8][37]===99)?"td--fina":(grid[8][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,38)} onMouseDown={() => clicked(9,38)}></td>
                        <td className={(9===s1 && 39===s2)?"td-one":(9===e1 && 39===e2)?"rd-two":(grid[8][38]===99)?"td--fina":(grid[8][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,39)} onMouseDown={() => clicked(9,39)}></td>
                        <td className={(9===s1 && 40===s2)?"td-one":(9===e1 && 40===e2)?"rd-two":(grid[8][39]===99)?"td--fina":(grid[8][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(9,40)} onMouseDown={() => clicked(9,40)}></td>
                    </tr>
                    <tr>
                        <td className={(10===s1 && 1===s2)?"td-one":(10===e1 && 1===e2)?"rd-two":(grid[9][0]===99)?"td--fina":(grid[9][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,1)} onMouseDown={() => clicked(10,1)}></td>
                        <td className={(10===s1 && 2===s2)?"td-one":(10===e1 && 2===e2)?"rd-two":(grid[9][1]===99)?"td--fina":(grid[9][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,2)} onMouseDown={() => clicked(10,2)}></td>
                        <td className={(10===s1 && 3===s2)?"td-one":(10===e1 && 3===e2)?"rd-two":(grid[9][2]===99)?"td--fina":(grid[9][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,3)} onMouseDown={() => clicked(10,3)}></td>
                        <td className={(10===s1 && 4===s2)?"td-one":(10===e1 && 4===e2)?"rd-two":(grid[9][3]===99)?"td--fina":(grid[9][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,4)} onMouseDown={() => clicked(10,4)}></td>
                        <td className={(10===s1 && 5===s2)?"td-one":(10===e1 && 5===e2)?"rd-two":(grid[9][4]===99)?"td--fina":(grid[9][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,5)} onMouseDown={() => clicked(10,5)}></td>
                        <td className={(10===s1 && 6===s2)?"td-one":(10===e1 && 6===e2)?"rd-two":(grid[9][5]===99)?"td--fina":(grid[9][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,6)} onMouseDown={() => clicked(10,6)}></td>
                        <td className={(10===s1 && 7===s2)?"td-one":(10===e1 && 7===e2)?"rd-two":(grid[9][6]===99)?"td--fina":(grid[9][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,7)} onMouseDown={() => clicked(10,7)}></td>
                        <td className={(10===s1 && 8===s2)?"td-one":(10===e1 && 8===e2)?"rd-two":(grid[9][7]===99)?"td--fina":(grid[9][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,8)} onMouseDown={() => clicked(10,8)}></td>
                        <td className={(10===s1 && 9===s2)?"td-one":(10===e1 && 9===e2)?"rd-two":(grid[9][8]===99)?"td--fina":(grid[9][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,9)} onMouseDown={() => clicked(10,9)}></td>
                        <td className={(10===s1 && 10===s2)?"td-one":(10===e1 && 10===e2)?"rd-two":(grid[9][9]===99)?"td--fina":(grid[9][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,10)}  onMouseDown={() => clicked(10,10)}></td>
                        <td className={(10===s1 && 11===s2)?"td-one":(10===e1 && 11===e2)?"rd-two":(grid[9][10]===99)?"td--fina":(grid[9][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,11)} onMouseDown={() => clicked(10,11)}></td>
                        <td className={(10===s1 && 12===s2)?"td-one":(10===e1 && 12===e2)?"rd-two":(grid[9][11]===99)?"td--fina":(grid[9][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,12)} onMouseDown={() => clicked(10,12)}></td>
                        <td className={(10===s1 && 13===s2)?"td-one":(10===e1 && 13===e2)?"rd-two":(grid[9][12]===99)?"td--fina":(grid[9][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,13)} onMouseDown={() => clicked(10,13)}></td>
                        <td className={(10===s1 && 14===s2)?"td-one":(10===e1 && 14===e2)?"rd-two":(grid[9][13]===99)?"td--fina":(grid[9][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,14)} onMouseDown={() => clicked(10,14)}></td>
                        <td className={(10===s1 && 15===s2)?"td-one":(10===e1 && 15===e2)?"rd-two":(grid[9][14]===99)?"td--fina":(grid[9][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,15)} onMouseDown={() => clicked(10,15)}></td>
                        <td className={(10===s1 && 16===s2)?"td-one":(10===e1 && 16===e2)?"rd-two":(grid[9][15]===99)?"td--fina":(grid[9][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,16)} onMouseDown={() => clicked(10,16)}></td>
                        <td className={(10===s1 && 17===s2)?"td-one":(10===e1 && 17===e2)?"rd-two":(grid[9][16]===99)?"td--fina":(grid[9][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,17)} onMouseDown={() => clicked(10,17)}></td>
                        <td className={(10===s1 && 18===s2)?"td-one":(10===e1 && 18===e2)?"rd-two":(grid[9][17]===99)?"td--fina":(grid[9][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,18)} onMouseDown={() => clicked(10,18)}></td>
                        <td className={(10===s1 && 19===s2)?"td-one":(10===e1 && 19===e2)?"rd-two":(grid[9][18]===99)?"td--fina":(grid[9][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,19)} onMouseDown={() => clicked(10,19)}></td>
                        <td className={(10===s1 && 20===s2)?"td-one":(10===e1 && 20===e2)?"rd-two":(grid[9][19]===99)?"td--fina":(grid[9][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,20)} onMouseDown={() => clicked(10,20)}></td>
                        <td className={(10===s1 && 21===s2)?"td-one":(10===e1 && 21===e2)?"rd-two":(grid[9][20]===99)?"td--fina":(grid[9][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,21)} onMouseDown={() => clicked(10,21)}></td>
                        <td className={(10===s1 && 22===s2)?"td-one":(10===e1 && 22===e2)?"rd-two":(grid[9][21]===99)?"td--fina":(grid[9][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,22)} onMouseDown={() => clicked(10,22)}></td>
                        <td className={(10===s1 && 23===s2)?"td-one":(10===e1 && 23===e2)?"rd-two":(grid[9][22]===99)?"td--fina":(grid[9][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,23)} onMouseDown={() => clicked(10,23)}></td>
                        <td className={(10===s1 && 24===s2)?"td-one":(10===e1 && 24===e2)?"rd-two":(grid[9][23]===99)?"td--fina":(grid[9][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,24)} onMouseDown={() => clicked(10,24)}></td>
                        <td className={(10===s1 && 25===s2)?"td-one":(10===e1 && 25===e2)?"rd-two":(grid[9][24]===99)?"td--fina":(grid[9][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,25)} onMouseDown={() => clicked(10,25)}></td>
                        <td className={(10===s1 && 26===s2)?"td-one":(10===e1 && 26===e2)?"rd-two":(grid[9][25]===99)?"td--fina":(grid[9][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,26)} onMouseDown={() => clicked(10,26)}></td>
                        <td className={(10===s1 && 27===s2)?"td-one":(10===e1 && 27===e2)?"rd-two":(grid[9][26]===99)?"td--fina":(grid[9][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,27)} onMouseDown={() => clicked(10,27)}></td>
                        <td className={(10===s1 && 28===s2)?"td-one":(10===e1 && 28===e2)?"rd-two":(grid[9][27]===99)?"td--fina":(grid[9][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,28)} onMouseDown={() => clicked(10,28)}></td>
                        <td className={(10===s1 && 29===s2)?"td-one":(10===e1 && 29===e2)?"rd-two":(grid[9][28]===99)?"td--fina":(grid[9][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,29)} onMouseDown={() => clicked(10,29)}></td>
                        <td className={(10===s1 && 30===s2)?"td-one":(10===e1 && 30===e2)?"rd-two":(grid[9][29]===99)?"td--fina":(grid[9][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,30)} onMouseDown={() => clicked(10,30)}></td>
                        <td className={(10===s1 && 31===s2)?"td-one":(10===e1 && 31===e2)?"rd-two":(grid[9][30]===99)?"td--fina":(grid[9][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,31)} onMouseDown={() => clicked(10,31)}></td>
                        <td className={(10===s1 && 32===s2)?"td-one":(10===e1 && 32===e2)?"rd-two":(grid[9][31]===99)?"td--fina":(grid[9][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,32)} onMouseDown={() => clicked(10,32)}></td>
                        <td className={(10===s1 && 33===s2)?"td-one":(10===e1 && 33===e2)?"rd-two":(grid[9][32]===99)?"td--fina":(grid[9][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,33)} onMouseDown={() => clicked(10,33)}></td>
                        <td className={(10===s1 && 34===s2)?"td-one":(10===e1 && 34===e2)?"rd-two":(grid[9][33]===99)?"td--fina":(grid[9][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,34)} onMouseDown={() => clicked(10,34)}></td>
                        <td className={(10===s1 && 35===s2)?"td-one":(10===e1 && 35===e2)?"rd-two":(grid[9][34]===99)?"td--fina":(grid[9][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,35)} onMouseDown={() => clicked(10,35)}></td>
                        <td className={(10===s1 && 36===s2)?"td-one":(10===e1 && 36===e2)?"rd-two":(grid[9][35]===99)?"td--fina":(grid[9][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,36)} onMouseDown={() => clicked(10,36)}></td>
                        <td className={(10===s1 && 37===s2)?"td-one":(10===e1 && 37===e2)?"rd-two":(grid[9][36]===99)?"td--fina":(grid[9][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,37)} onMouseDown={() => clicked(10,37)}></td>
                        <td className={(10===s1 && 38===s2)?"td-one":(10===e1 && 38===e2)?"rd-two":(grid[9][37]===99)?"td--fina":(grid[9][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,38)} onMouseDown={() => clicked(10,38)}></td>
                        <td className={(10===s1 && 39===s2)?"td-one":(10===e1 && 39===e2)?"rd-two":(grid[9][38]===99)?"td--fina":(grid[9][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,39)} onMouseDown={() => clicked(10,39)}></td>
                        <td className={(10===s1 && 40===s2)?"td-one":(10===e1 && 40===e2)?"rd-two":(grid[9][39]===99)?"td--fina":(grid[9][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(10,40)} onMouseDown={() => clicked(10,40)}></td>
                    </tr>
                    <tr>
                        <td className={(11===s1 && 1===s2)?"td-one":(11===e1 && 1===e2)?"rd-two":(grid[10][0]===99)?"td--fina":(grid[10][0]===999)?"td-last":"rd-zro"}onMouseOver={() => hovered(11,1)} onMouseDown={() => clicked(11,1)}></td>
                        <td className={(11===s1 && 2===s2)?"td-one":(11===e1 && 2===e2)?"rd-two":(grid[10][1]===99)?"td--fina":(grid[10][1]===999)?"td-last":"rd-zro"}onMouseOver={() => hovered(11,2)} onMouseDown={() => clicked(11,2)}></td>
                        <td className={(11===s1 && 3===s2)?"td-one":(11===e1 && 3===e2)?"rd-two":(grid[10][2]===99)?"td--fina":(grid[10][2]===999)?"td-last":"rd-zro"}onMouseOver={() => hovered(11,3)} onMouseDown={() => clicked(11,3)}></td>
                        <td className={(11===s1 && 4===s2)?"td-one":(11===e1 && 4===e2)?"rd-two":(grid[10][3]===99)?"td--fina":(grid[10][3]===999)?"td-last":"rd-zro"}onMouseOver={() => hovered(11,4)} onMouseDown={() => clicked(11,4)}></td>
                        <td className={(11===s1 && 5===s2)?"td-one":(11===e1 && 5===e2)?"rd-two":(grid[10][4]===99)?"td--fina":(grid[10][4]===999)?"td-last":"rd-zro"}onMouseOver={() => hovered(11,5)} onMouseDown={() => clicked(11,5)}></td>
                        <td className={(11===s1 && 6===s2)?"td-one":(11===e1 && 6===e2)?"rd-two":(grid[10][5]===99)?"td--fina":(grid[10][5]===999)?"td-last":"rd-zro"}onMouseOver={() => hovered(11,6)} onMouseDown={() => clicked(11,6)}></td>
                        <td className={(11===s1 && 7===s2)?"td-one":(11===e1 && 7===e2)?"rd-two":(grid[10][6]===99)?"td--fina":(grid[10][6]===999)?"td-last":"rd-zro"}onMouseOver={() => hovered(11,7)} onMouseDown={() => clicked(11,7)}></td>
                        <td className={(11===s1 && 8===s2)?"td-one":(11===e1 && 8===e2)?"rd-two":(grid[10][7]===99)?"td--fina":(grid[10][7]===999)?"td-last":"rd-zro"}onMouseOver={() => hovered(11,8)} onMouseDown={() => clicked(11,8)}></td>
                        <td className={(11===s1 && 9===s2)?"td-one":(11===e1 && 9===e2)?"rd-two":(grid[10][8]===99)?"td--fina":(grid[10][8]===999)?"td-last":"rd-zro"}onMouseOver={() => hovered(11,9)} onMouseDown={() => clicked(11,9)}></td>
                        <td className={(11===s1 && 10===s2)?"td-one":(11===e1 && 10===e2)?"rd-two":(grid[10][9]===99)?"td--fina":(grid[10][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,10)} onMouseDown={() => clicked(11,10)}></td>
                        <td className={(11===s1 && 11===s2)?"td-one":(11===e1 && 11===e2)?"rd-two":(grid[10][10]===99)?"td--fina":(grid[10][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,11)} onMouseDown={() => clicked(11,11)}></td>
                        <td className={(11===s1 && 12===s2)?"td-one":(11===e1 && 12===e2)?"rd-two":(grid[10][11]===99)?"td--fina":(grid[10][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,12)} onMouseDown={() => clicked(11,12)}></td>
                        <td className={(11===s1 && 13===s2)?"td-one":(11===e1 && 13===e2)?"rd-two":(grid[10][12]===99)?"td--fina":(grid[10][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,13)} onMouseDown={() => clicked(11,13)}></td>
                        <td className={(11===s1 && 14===s2)?"td-one":(11===e1 && 14===e2)?"rd-two":(grid[10][13]===99)?"td--fina":(grid[10][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,14)} onMouseDown={() => clicked(11,14)}></td>
                        <td className={(11===s1 && 15===s2)?"td-one":(11===e1 && 15===e2)?"rd-two":(grid[10][14]===99)?"td--fina":(grid[10][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,15)} onMouseDown={() => clicked(11,15)}></td>
                        <td className={(11===s1 && 16===s2)?"td-one":(11===e1 && 16===e2)?"rd-two":(grid[10][15]===99)?"td--fina":(grid[10][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,16)} onMouseDown={() => clicked(11,16)}></td>
                        <td className={(11===s1 && 17===s2)?"td-one":(11===e1 && 17===e2)?"rd-two":(grid[10][16]===99)?"td--fina":(grid[10][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,17)} onMouseDown={() => clicked(11,17)}></td>
                        <td className={(11===s1 && 18===s2)?"td-one":(11===e1 && 18===e2)?"rd-two":(grid[10][17]===99)?"td--fina":(grid[10][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,18)} onMouseDown={() => clicked(11,18)}></td>
                        <td className={(11===s1 && 19===s2)?"td-one":(11===e1 && 19===e2)?"rd-two":(grid[10][18]===99)?"td--fina":(grid[10][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,19)} onMouseDown={() => clicked(11,19)}></td>
                        <td className={(11===s1 && 20===s2)?"td-one":(11===e1 && 20===e2)?"rd-two":(grid[10][19]===99)?"td--fina":(grid[10][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,20)} onMouseDown={() => clicked(11,20)}></td>
                        <td className={(11===s1 && 21===s2)?"td-one":(11===e1 && 21===e2)?"rd-two":(grid[10][20]===99)?"td--fina":(grid[10][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,21)} onMouseDown={() => clicked(11,21)}></td>
                        <td className={(11===s1 && 22===s2)?"td-one":(11===e1 && 22===e2)?"rd-two":(grid[10][21]===99)?"td--fina":(grid[10][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,22)} onMouseDown={() => clicked(11,22)}></td>
                        <td className={(11===s1 && 23===s2)?"td-one":(11===e1 && 23===e2)?"rd-two":(grid[10][22]===99)?"td--fina":(grid[10][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,23)} onMouseDown={() => clicked(11,23)}></td>
                        <td className={(11===s1 && 24===s2)?"td-one":(11===e1 && 24===e2)?"rd-two":(grid[10][23]===99)?"td--fina":(grid[10][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,24)} onMouseDown={() => clicked(11,24)}></td>
                        <td className={(11===s1 && 25===s2)?"td-one":(11===e1 && 25===e2)?"rd-two":(grid[10][24]===99)?"td--fina":(grid[10][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,25)} onMouseDown={() => clicked(11,25)}></td>
                        <td className={(11===s1 && 26===s2)?"td-one":(11===e1 && 26===e2)?"rd-two":(grid[10][25]===99)?"td--fina":(grid[10][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,26)} onMouseDown={() => clicked(11,26)}></td>
                        <td className={(11===s1 && 27===s2)?"td-one":(11===e1 && 27===e2)?"rd-two":(grid[10][26]===99)?"td--fina":(grid[10][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,27)} onMouseDown={() => clicked(11,27)}></td>
                        <td className={(11===s1 && 28===s2)?"td-one":(11===e1 && 28===e2)?"rd-two":(grid[10][27]===99)?"td--fina":(grid[10][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,28)} onMouseDown={() => clicked(11,28)}></td>
                        <td className={(11===s1 && 29===s2)?"td-one":(11===e1 && 29===e2)?"rd-two":(grid[10][28]===99)?"td--fina":(grid[10][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,29)} onMouseDown={() => clicked(11,29)}></td>
                        <td className={(11===s1 && 30===s2)?"td-one":(11===e1 && 30===e2)?"rd-two":(grid[10][29]===99)?"td--fina":(grid[10][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,30)} onMouseDown={() => clicked(11,30)}></td>
                        <td className={(11===s1 && 31===s2)?"td-one":(11===e1 && 31===e2)?"rd-two":(grid[10][30]===99)?"td--fina":(grid[10][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,31)} onMouseDown={() => clicked(11,31)}></td>
                        <td className={(11===s1 && 32===s2)?"td-one":(11===e1 && 32===e2)?"rd-two":(grid[10][31]===99)?"td--fina":(grid[10][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,32)} onMouseDown={() => clicked(11,32)}></td>
                        <td className={(11===s1 && 33===s2)?"td-one":(11===e1 && 33===e2)?"rd-two":(grid[10][32]===99)?"td--fina":(grid[10][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,33)} onMouseDown={() => clicked(11,33)}></td>
                        <td className={(11===s1 && 34===s2)?"td-one":(11===e1 && 34===e2)?"rd-two":(grid[10][33]===99)?"td--fina":(grid[10][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,34)} onMouseDown={() => clicked(11,34)}></td>
                        <td className={(11===s1 && 35===s2)?"td-one":(11===e1 && 35===e2)?"rd-two":(grid[10][34]===99)?"td--fina":(grid[10][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,35)} onMouseDown={() => clicked(11,35)}></td>
                        <td className={(11===s1 && 36===s2)?"td-one":(11===e1 && 36===e2)?"rd-two":(grid[10][35]===99)?"td--fina":(grid[10][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,36)} onMouseDown={() => clicked(11,36)}></td>
                        <td className={(11===s1 && 37===s2)?"td-one":(11===e1 && 37===e2)?"rd-two":(grid[10][36]===99)?"td--fina":(grid[10][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,37)} onMouseDown={() => clicked(11,37)}></td>
                        <td className={(11===s1 && 38===s2)?"td-one":(11===e1 && 38===e2)?"rd-two":(grid[10][37]===99)?"td--fina":(grid[10][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,38)} onMouseDown={() => clicked(11,38)}></td>
                        <td className={(11===s1 && 39===s2)?"td-one":(11===e1 && 39===e2)?"rd-two":(grid[10][38]===99)?"td--fina":(grid[10][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,39)} onMouseDown={() => clicked(11,39)}></td>
                        <td className={(11===s1 && 40===s2)?"td-one":(11===e1 && 40===e2)?"rd-two":(grid[10][39]===99)?"td--fina":(grid[10][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(11,40)} onMouseDown={() => clicked(11,40)}></td>
                    </tr>
                    <tr>
                        <td className={(12===s1 && 1===s2)?"td-one":(12===e1 && 1===e2)?"rd-two":(grid[11][0]===99)?"td--fina":(grid[11][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,1)} onMouseDown={() => clicked(12,1)}></td>
                        <td className={(12===s1 && 2===s2)?"td-one":(12===e1 && 2===e2)?"rd-two":(grid[11][1]===99)?"td--fina":(grid[11][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,2)} onMouseDown={() => clicked(12,2)}></td>
                        <td className={(12===s1 && 3===s2)?"td-one":(12===e1 && 3===e2)?"rd-two":(grid[11][2]===99)?"td--fina":(grid[11][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,3)} onMouseDown={() => clicked(12,3)}></td>
                        <td className={(12===s1 && 4===s2)?"td-one":(12===e1 && 4===e2)?"rd-two":(grid[11][3]===99)?"td--fina":(grid[11][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,4)} onMouseDown={() => clicked(12,4)}></td>
                        <td className={(12===s1 && 5===s2)?"td-one":(12===e1 && 5===e2)?"rd-two":(grid[11][4]===99)?"td--fina":(grid[11][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,5)} onMouseDown={() => clicked(12,5)}></td>
                        <td className={(12===s1 && 6===s2)?"td-one":(12===e1 && 6===e2)?"rd-two":(grid[11][5]===99)?"td--fina":(grid[11][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,6)} onMouseDown={() => clicked(12,6)}></td>
                        <td className={(12===s1 && 7===s2)?"td-one":(12===e1 && 7===e2)?"rd-two":(grid[11][6]===99)?"td--fina":(grid[11][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,7)} onMouseDown={() => clicked(12,7)}></td>
                        <td className={(12===s1 && 8===s2)?"td-one":(12===e1 && 8===e2)?"rd-two":(grid[11][7]===99)?"td--fina":(grid[11][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,8)} onMouseDown={() => clicked(12,8)}></td>
                        <td className={(12===s1 && 9===s2)?"td-one":(12===e1 && 9===e2)?"rd-two":(grid[11][8]===99)?"td--fina":(grid[11][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,9)} onMouseDown={() => clicked(12,9)}></td>
                        <td className={(12===s1 && 10===s2)?"td-one":(12===e1 && 10===e2)?"rd-two":(grid[11][9]===99)?"td--fina":(grid[11][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,10)} onMouseDown={() => clicked(12,10)}></td>
                        <td className={(12===s1 && 11===s2)?"td-one":(12===e1 && 11===e2)?"rd-two":(grid[11][10]===99)?"td--fina":(grid[11][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,11)} onMouseDown={() => clicked(12,11)}></td>
                        <td className={(12===s1 && 12===s2)?"td-one":(12===e1 && 12===e2)?"rd-two":(grid[11][11]===99)?"td--fina":(grid[11][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,12)} onMouseDown={() => clicked(12,12)}></td>
                        <td className={(12===s1 && 13===s2)?"td-one":(12===e1 && 13===e2)?"rd-two":(grid[11][12]===99)?"td--fina":(grid[11][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,13)} onMouseDown={() => clicked(12,13)}></td>
                        <td className={(12===s1 && 14===s2)?"td-one":(12===e1 && 14===e2)?"rd-two":(grid[11][13]===99)?"td--fina":(grid[11][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,14)} onMouseDown={() => clicked(12,14)}></td>
                        <td className={(12===s1 && 15===s2)?"td-one":(12===e1 && 15===e2)?"rd-two":(grid[11][14]===99)?"td--fina":(grid[11][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,15)} onMouseDown={() => clicked(12,15)}></td>
                        <td className={(12===s1 && 16===s2)?"td-one":(12===e1 && 16===e2)?"rd-two":(grid[11][15]===99)?"td--fina":(grid[11][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,16)} onMouseDown={() => clicked(12,16)}></td>
                        <td className={(12===s1 && 17===s2)?"td-one":(12===e1 && 17===e2)?"rd-two":(grid[11][16]===99)?"td--fina":(grid[11][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,17)} onMouseDown={() => clicked(12,17)}></td>
                        <td className={(12===s1 && 18===s2)?"td-one":(12===e1 && 18===e2)?"rd-two":(grid[11][17]===99)?"td--fina":(grid[11][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,18)} onMouseDown={() => clicked(12,18)}></td>
                        <td className={(12===s1 && 19===s2)?"td-one":(12===e1 && 19===e2)?"rd-two":(grid[11][18]===99)?"td--fina":(grid[11][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,19)} onMouseDown={() => clicked(12,19)}></td>
                        <td className={(12===s1 && 20===s2)?"td-one":(12===e1 && 20===e2)?"rd-two":(grid[11][19]===99)?"td--fina":(grid[11][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,20)} onMouseDown={() => clicked(12,20)}></td>
                        <td className={(12===s1 && 21===s2)?"td-one":(12===e1 && 21===e2)?"rd-two":(grid[11][20]===99)?"td--fina":(grid[11][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,21)} onMouseDown={() => clicked(12,21)}></td>
                        <td className={(12===s1 && 22===s2)?"td-one":(12===e1 && 22===e2)?"rd-two":(grid[11][21]===99)?"td--fina":(grid[11][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,22)} onMouseDown={() => clicked(12,22)}></td>
                        <td className={(12===s1 && 23===s2)?"td-one":(12===e1 && 23===e2)?"rd-two":(grid[11][22]===99)?"td--fina":(grid[11][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,23)} onMouseDown={() => clicked(12,23)}></td>
                        <td className={(12===s1 && 24===s2)?"td-one":(12===e1 && 24===e2)?"rd-two":(grid[11][23]===99)?"td--fina":(grid[11][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,24)} onMouseDown={() => clicked(12,24)}></td>
                        <td className={(12===s1 && 25===s2)?"td-one":(12===e1 && 25===e2)?"rd-two":(grid[11][24]===99)?"td--fina":(grid[11][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,25)} onMouseDown={() => clicked(12,25)}></td>
                        <td className={(12===s1 && 26===s2)?"td-one":(12===e1 && 26===e2)?"rd-two":(grid[11][25]===99)?"td--fina":(grid[11][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,26)} onMouseDown={() => clicked(12,26)}></td>
                        <td className={(12===s1 && 27===s2)?"td-one":(12===e1 && 27===e2)?"rd-two":(grid[11][26]===99)?"td--fina":(grid[11][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,27)} onMouseDown={() => clicked(12,27)}></td>
                        <td className={(12===s1 && 28===s2)?"td-one":(12===e1 && 28===e2)?"rd-two":(grid[11][27]===99)?"td--fina":(grid[11][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,28)} onMouseDown={() => clicked(12,28)}></td>
                        <td className={(12===s1 && 29===s2)?"td-one":(12===e1 && 29===e2)?"rd-two":(grid[11][28]===99)?"td--fina":(grid[11][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,29)} onMouseDown={() => clicked(12,29)}></td>
                        <td className={(12===s1 && 30===s2)?"td-one":(12===e1 && 30===e2)?"rd-two":(grid[11][29]===99)?"td--fina":(grid[11][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,30)} onMouseDown={() => clicked(12,30)}></td>
                        <td className={(12===s1 && 31===s2)?"td-one":(12===e1 && 31===e2)?"rd-two":(grid[11][30]===99)?"td--fina":(grid[11][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,31)} onMouseDown={() => clicked(12,31)}></td>
                        <td className={(12===s1 && 32===s2)?"td-one":(12===e1 && 32===e2)?"rd-two":(grid[11][31]===99)?"td--fina":(grid[11][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,32)} onMouseDown={() => clicked(12,32)}></td>
                        <td className={(12===s1 && 33===s2)?"td-one":(12===e1 && 33===e2)?"rd-two":(grid[11][32]===99)?"td--fina":(grid[11][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,33)} onMouseDown={() => clicked(12,33)}></td>
                        <td className={(12===s1 && 34===s2)?"td-one":(12===e1 && 34===e2)?"rd-two":(grid[11][33]===99)?"td--fina":(grid[11][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,34)} onMouseDown={() => clicked(12,34)}></td>
                        <td className={(12===s1 && 35===s2)?"td-one":(12===e1 && 35===e2)?"rd-two":(grid[11][34]===99)?"td--fina":(grid[11][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,35)} onMouseDown={() => clicked(12,35)}></td>
                        <td className={(12===s1 && 36===s2)?"td-one":(12===e1 && 36===e2)?"rd-two":(grid[11][35]===99)?"td--fina":(grid[11][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,36)} onMouseDown={() => clicked(12,36)}></td>
                        <td className={(12===s1 && 37===s2)?"td-one":(12===e1 && 37===e2)?"rd-two":(grid[11][36]===99)?"td--fina":(grid[11][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,37)} onMouseDown={() => clicked(12,37)}></td>
                        <td className={(12===s1 && 38===s2)?"td-one":(12===e1 && 38===e2)?"rd-two":(grid[11][37]===99)?"td--fina":(grid[11][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,38)} onMouseDown={() => clicked(12,38)}></td>
                        <td className={(12===s1 && 39===s2)?"td-one":(12===e1 && 39===e2)?"rd-two":(grid[11][38]===99)?"td--fina":(grid[11][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,39)} onMouseDown={() => clicked(12,39)}></td>
                        <td className={(12===s1 && 40===s2)?"td-one":(12===e1 && 40===e2)?"rd-two":(grid[11][39]===99)?"td--fina":(grid[11][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(12,40)} onMouseDown={() => clicked(12,40)}></td>
                    </tr>
                    <tr>
                        <td className={(13===s1 && 1===s2)?"td-one":(13===e1 && 1===e2)?"rd-two":(grid[12][0]===99)?"td--fina":(grid[12][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,1)} onMouseDown={() => clicked(13,1)}></td>
                        <td className={(13===s1 && 2===s2)?"td-one":(13===e1 && 2===e2)?"rd-two":(grid[12][1]===99)?"td--fina":(grid[12][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,2)} onMouseDown={() => clicked(13,2)}></td>
                        <td className={(13===s1 && 3===s2)?"td-one":(13===e1 && 3===e2)?"rd-two":(grid[12][2]===99)?"td--fina":(grid[12][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,3)} onMouseDown={() => clicked(13,3)}></td>
                        <td className={(13===s1 && 4===s2)?"td-one":(13===e1 && 4===e2)?"rd-two":(grid[12][3]===99)?"td--fina":(grid[12][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,4)} onMouseDown={() => clicked(13,4)}></td>
                        <td className={(13===s1 && 5===s2)?"td-one":(13===e1 && 5===e2)?"rd-two":(grid[12][4]===99)?"td--fina":(grid[12][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,5)} onMouseDown={() => clicked(13,5)}></td>
                        <td className={(13===s1 && 6===s2)?"td-one":(13===e1 && 6===e2)?"rd-two":(grid[12][5]===99)?"td--fina":(grid[12][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,6)} onMouseDown={() => clicked(13,6)}></td>
                        <td className={(13===s1 && 7===s2)?"td-one":(13===e1 && 7===e2)?"rd-two":(grid[12][6]===99)?"td--fina":(grid[12][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,7)} onMouseDown={() => clicked(13,7)}></td>
                        <td className={(13===s1 && 8===s2)?"td-one":(13===e1 && 8===e2)?"rd-two":(grid[12][7]===99)?"td--fina":(grid[12][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,8)} onMouseDown={() => clicked(13,8)}></td>
                        <td className={(13===s1 && 9===s2)?"td-one":(13===e1 && 9===e2)?"rd-two":(grid[12][8]===99)?"td--fina":(grid[12][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,9)} onMouseDown={() => clicked(13,9)}></td>
                        <td className={(13===s1 && 10===s2)?"td-one":(13===e1 && 10===e2)?"rd-two":(grid[12][9]===99)?"td--fina":(grid[12][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,10)} onMouseDown={() => clicked(13,10)}></td>
                        <td className={(13===s1 && 11===s2)?"td-one":(13===e1 && 11===e2)?"rd-two":(grid[12][10]===99)?"td--fina":(grid[12][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,11)} onMouseDown={() => clicked(13,11)}></td>
                        <td className={(13===s1 && 12===s2)?"td-one":(13===e1 && 12===e2)?"rd-two":(grid[12][11]===99)?"td--fina":(grid[12][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,12)} onMouseDown={() => clicked(13,12)}></td>
                        <td className={(13===s1 && 13===s2)?"td-one":(13===e1 && 13===e2)?"rd-two":(grid[12][12]===99)?"td--fina":(grid[12][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,13)} onMouseDown={() => clicked(13,13)}></td>
                        <td className={(13===s1 && 14===s2)?"td-one":(13===e1 && 14===e2)?"rd-two":(grid[12][13]===99)?"td--fina":(grid[12][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,14)} onMouseDown={() => clicked(13,14)}></td>
                        <td className={(13===s1 && 15===s2)?"td-one":(13===e1 && 15===e2)?"rd-two":(grid[12][14]===99)?"td--fina":(grid[12][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,15)} onMouseDown={() => clicked(13,15)}></td>
                        <td className={(13===s1 && 16===s2)?"td-one":(13===e1 && 16===e2)?"rd-two":(grid[12][15]===99)?"td--fina":(grid[12][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,16)} onMouseDown={() => clicked(13,16)}></td>
                        <td className={(13===s1 && 17===s2)?"td-one":(13===e1 && 17===e2)?"rd-two":(grid[12][16]===99)?"td--fina":(grid[12][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,17)} onMouseDown={() => clicked(13,17)}></td>
                        <td className={(13===s1 && 18===s2)?"td-one":(13===e1 && 18===e2)?"rd-two":(grid[12][17]===99)?"td--fina":(grid[12][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,18)} onMouseDown={() => clicked(13,18)}></td>
                        <td className={(13===s1 && 19===s2)?"td-one":(13===e1 && 19===e2)?"rd-two":(grid[12][18]===99)?"td--fina":(grid[12][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,19)} onMouseDown={() => clicked(13,19)}></td>
                        <td className={(13===s1 && 20===s2)?"td-one":(13===e1 && 20===e2)?"rd-two":(grid[12][19]===99)?"td--fina":(grid[12][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,20)} onMouseDown={() => clicked(13,20)}></td>
                        <td className={(13===s1 && 21===s2)?"td-one":(13===e1 && 21===e2)?"rd-two":(grid[12][20]===99)?"td--fina":(grid[12][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,21)} onMouseDown={() => clicked(13,21)}></td>
                        <td className={(13===s1 && 22===s2)?"td-one":(13===e1 && 22===e2)?"rd-two":(grid[12][21]===99)?"td--fina":(grid[12][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,22)} onMouseDown={() => clicked(13,22)}></td>
                        <td className={(13===s1 && 23===s2)?"td-one":(13===e1 && 23===e2)?"rd-two":(grid[12][22]===99)?"td--fina":(grid[12][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,23)} onMouseDown={() => clicked(13,23)}></td>
                        <td className={(13===s1 && 24===s2)?"td-one":(13===e1 && 24===e2)?"rd-two":(grid[12][23]===99)?"td--fina":(grid[12][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,24)} onMouseDown={() => clicked(13,24)}></td>
                        <td className={(13===s1 && 25===s2)?"td-one":(13===e1 && 25===e2)?"rd-two":(grid[12][24]===99)?"td--fina":(grid[12][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,25)} onMouseDown={() => clicked(13,25)}></td>
                        <td className={(13===s1 && 26===s2)?"td-one":(13===e1 && 26===e2)?"rd-two":(grid[12][25]===99)?"td--fina":(grid[12][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,26)} onMouseDown={() => clicked(13,26)}></td>
                        <td className={(13===s1 && 27===s2)?"td-one":(13===e1 && 27===e2)?"rd-two":(grid[12][26]===99)?"td--fina":(grid[12][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,27)} onMouseDown={() => clicked(13,27)}></td>
                        <td className={(13===s1 && 28===s2)?"td-one":(13===e1 && 28===e2)?"rd-two":(grid[12][27]===99)?"td--fina":(grid[12][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,28)} onMouseDown={() => clicked(13,28)}></td>
                        <td className={(13===s1 && 29===s2)?"td-one":(13===e1 && 29===e2)?"rd-two":(grid[12][28]===99)?"td--fina":(grid[12][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,29)} onMouseDown={() => clicked(13,29)}></td>
                        <td className={(13===s1 && 30===s2)?"td-one":(13===e1 && 30===e2)?"rd-two":(grid[12][29]===99)?"td--fina":(grid[12][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,30)} onMouseDown={() => clicked(13,30)}></td>
                        <td className={(13===s1 && 31===s2)?"td-one":(13===e1 && 31===e2)?"rd-two":(grid[12][30]===99)?"td--fina":(grid[12][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,31)} onMouseDown={() => clicked(13,31)}></td>
                        <td className={(13===s1 && 32===s2)?"td-one":(13===e1 && 32===e2)?"rd-two":(grid[12][31]===99)?"td--fina":(grid[12][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,32)} onMouseDown={() => clicked(13,32)}></td>
                        <td className={(13===s1 && 33===s2)?"td-one":(13===e1 && 33===e2)?"rd-two":(grid[12][32]===99)?"td--fina":(grid[12][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,33)} onMouseDown={() => clicked(13,33)}></td>
                        <td className={(13===s1 && 34===s2)?"td-one":(13===e1 && 34===e2)?"rd-two":(grid[12][33]===99)?"td--fina":(grid[12][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,34)} onMouseDown={() => clicked(13,34)}></td>
                        <td className={(13===s1 && 35===s2)?"td-one":(13===e1 && 35===e2)?"rd-two":(grid[12][34]===99)?"td--fina":(grid[12][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,35)} onMouseDown={() => clicked(13,35)}></td>
                        <td className={(13===s1 && 36===s2)?"td-one":(13===e1 && 36===e2)?"rd-two":(grid[12][35]===99)?"td--fina":(grid[12][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,36)} onMouseDown={() => clicked(13,36)}></td>
                        <td className={(13===s1 && 37===s2)?"td-one":(13===e1 && 37===e2)?"rd-two":(grid[12][36]===99)?"td--fina":(grid[12][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,37)} onMouseDown={() => clicked(13,37)}></td>
                        <td className={(13===s1 && 38===s2)?"td-one":(13===e1 && 38===e2)?"rd-two":(grid[12][37]===99)?"td--fina":(grid[12][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,38)} onMouseDown={() => clicked(13,38)}></td>
                        <td className={(13===s1 && 39===s2)?"td-one":(13===e1 && 39===e2)?"rd-two":(grid[12][38]===99)?"td--fina":(grid[12][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,39)} onMouseDown={() => clicked(13,39)}></td>
                        <td className={(13===s1 && 40===s2)?"td-one":(13===e1 && 40===e2)?"rd-two":(grid[12][39]===99)?"td--fina":(grid[12][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(13,40)} onMouseDown={() => clicked(13,40)}></td>
                    </tr>
                    <tr>
                        <td className={(14===s1 && 1===s2)?"td-one":(14===e1 && 1===e2)?"rd-two":(grid[13][0]===99)?"td--fina":(grid[13][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,1)} onMouseDown={() => clicked(14,1)}></td>
                        <td className={(14===s1 && 2===s2)?"td-one":(14===e1 && 2===e2)?"rd-two":(grid[13][1]===99)?"td--fina":(grid[13][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,2)} onMouseDown={() => clicked(14,2)}></td>
                        <td className={(14===s1 && 3===s2)?"td-one":(14===e1 && 3===e2)?"rd-two":(grid[13][2]===99)?"td--fina":(grid[13][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,3)} onMouseDown={() => clicked(14,3)}></td>
                        <td className={(14===s1 && 4===s2)?"td-one":(14===e1 && 4===e2)?"rd-two":(grid[13][3]===99)?"td--fina":(grid[13][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,4)} onMouseDown={() => clicked(14,4)}></td>
                        <td className={(14===s1 && 5===s2)?"td-one":(14===e1 && 5===e2)?"rd-two":(grid[13][4]===99)?"td--fina":(grid[13][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,5)} onMouseDown={() => clicked(14,5)}></td>
                        <td className={(14===s1 && 6===s2)?"td-one":(14===e1 && 6===e2)?"rd-two":(grid[13][5]===99)?"td--fina":(grid[13][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,6)} onMouseDown={() => clicked(14,6)}></td>
                        <td className={(14===s1 && 7===s2)?"td-one":(14===e1 && 7===e2)?"rd-two":(grid[13][6]===99)?"td--fina":(grid[13][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,7)} onMouseDown={() => clicked(14,7)}></td>
                        <td className={(14===s1 && 8===s2)?"td-one":(14===e1 && 8===e2)?"rd-two":(grid[13][7]===99)?"td--fina":(grid[13][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,8)} onMouseDown={() => clicked(14,8)}></td>
                        <td className={(14===s1 && 9===s2)?"td-one":(14===e1 && 9===e2)?"rd-two":(grid[13][8]===99)?"td--fina":(grid[13][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,9)} onMouseDown={() => clicked(14,9)}></td>
                        <td className={(14===s1 && 10===s2)?"td-one":(14===e1 && 10===e2)?"rd-two":(grid[13][9]===99)?"td--fina":(grid[13][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,10)} onMouseDown={() => clicked(14,10)}></td>
                        <td className={(14===s1 && 11===s2)?"td-one":(14===e1 && 11===e2)?"rd-two":(grid[13][10]===99)?"td--fina":(grid[13][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,11)} onMouseDown={() => clicked(14,11)}></td>
                        <td className={(14===s1 && 12===s2)?"td-one":(14===e1 && 12===e2)?"rd-two":(grid[13][11]===99)?"td--fina":(grid[13][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,12)} onMouseDown={() => clicked(14,12)}></td>
                        <td className={(14===s1 && 13===s2)?"td-one":(14===e1 && 13===e2)?"rd-two":(grid[13][12]===99)?"td--fina":(grid[13][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,13)} onMouseDown={() => clicked(14,13)}></td>
                        <td className={(14===s1 && 14===s2)?"td-one":(14===e1 && 14===e2)?"rd-two":(grid[13][13]===99)?"td--fina":(grid[13][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,14)} onMouseDown={() => clicked(14,14)}></td>
                        <td className={(14===s1 && 15===s2)?"td-one":(14===e1 && 15===e2)?"rd-two":(grid[13][14]===99)?"td--fina":(grid[13][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,15)} onMouseDown={() => clicked(14,15)}></td>
                        <td className={(14===s1 && 16===s2)?"td-one":(14===e1 && 16===e2)?"rd-two":(grid[13][15]===99)?"td--fina":(grid[13][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,16)} onMouseDown={() => clicked(14,16)}></td>
                        <td className={(14===s1 && 17===s2)?"td-one":(14===e1 && 17===e2)?"rd-two":(grid[13][16]===99)?"td--fina":(grid[13][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,17)} onMouseDown={() => clicked(14,17)}></td>
                        <td className={(14===s1 && 18===s2)?"td-one":(14===e1 && 18===e2)?"rd-two":(grid[13][17]===99)?"td--fina":(grid[13][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,18)} onMouseDown={() => clicked(14,18)}></td>
                        <td className={(14===s1 && 19===s2)?"td-one":(14===e1 && 19===e2)?"rd-two":(grid[13][18]===99)?"td--fina":(grid[13][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,19)} onMouseDown={() => clicked(14,19)}></td>
                        <td className={(14===s1 && 20===s2)?"td-one":(14===e1 && 20===e2)?"rd-two":(grid[13][19]===99)?"td--fina":(grid[13][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,20)} onMouseDown={() => clicked(14,20)}></td>
                        <td className={(14===s1 && 21===s2)?"td-one":(14===e1 && 21===e2)?"rd-two":(grid[13][20]===99)?"td--fina":(grid[13][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,21)} onMouseDown={() => clicked(14,21)}></td>
                        <td className={(14===s1 && 22===s2)?"td-one":(14===e1 && 22===e2)?"rd-two":(grid[13][21]===99)?"td--fina":(grid[13][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,22)} onMouseDown={() => clicked(14,22)}></td>
                        <td className={(14===s1 && 23===s2)?"td-one":(14===e1 && 23===e2)?"rd-two":(grid[13][22]===99)?"td--fina":(grid[13][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,23)} onMouseDown={() => clicked(14,23)}></td>
                        <td className={(14===s1 && 24===s2)?"td-one":(14===e1 && 24===e2)?"rd-two":(grid[13][23]===99)?"td--fina":(grid[13][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,24)} onMouseDown={() => clicked(14,24)}></td>
                        <td className={(14===s1 && 25===s2)?"td-one":(14===e1 && 25===e2)?"rd-two":(grid[13][24]===99)?"td--fina":(grid[13][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,25)} onMouseDown={() => clicked(14,25)}></td>
                        <td className={(14===s1 && 26===s2)?"td-one":(14===e1 && 26===e2)?"rd-two":(grid[13][25]===99)?"td--fina":(grid[13][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,26)} onMouseDown={() => clicked(14,26)}></td>
                        <td className={(14===s1 && 27===s2)?"td-one":(14===e1 && 27===e2)?"rd-two":(grid[13][26]===99)?"td--fina":(grid[13][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,27)} onMouseDown={() => clicked(14,27)}></td>
                        <td className={(14===s1 && 28===s2)?"td-one":(14===e1 && 28===e2)?"rd-two":(grid[13][27]===99)?"td--fina":(grid[13][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,28)} onMouseDown={() => clicked(14,28)}></td>
                        <td className={(14===s1 && 29===s2)?"td-one":(14===e1 && 29===e2)?"rd-two":(grid[13][28]===99)?"td--fina":(grid[13][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,29)} onMouseDown={() => clicked(14,29)}></td>
                        <td className={(14===s1 && 30===s2)?"td-one":(14===e1 && 30===e2)?"rd-two":(grid[13][29]===99)?"td--fina":(grid[13][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,30)} onMouseDown={() => clicked(14,30)}></td>
                        <td className={(14===s1 && 31===s2)?"td-one":(14===e1 && 31===e2)?"rd-two":(grid[13][30]===99)?"td--fina":(grid[13][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,31)} onMouseDown={() => clicked(14,31)}></td>
                        <td className={(14===s1 && 32===s2)?"td-one":(14===e1 && 32===e2)?"rd-two":(grid[13][31]===99)?"td--fina":(grid[13][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,32)} onMouseDown={() => clicked(14,32)}></td>
                        <td className={(14===s1 && 33===s2)?"td-one":(14===e1 && 33===e2)?"rd-two":(grid[13][32]===99)?"td--fina":(grid[13][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,33)} onMouseDown={() => clicked(14,33)}></td>
                        <td className={(14===s1 && 34===s2)?"td-one":(14===e1 && 34===e2)?"rd-two":(grid[13][33]===99)?"td--fina":(grid[13][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,34)} onMouseDown={() => clicked(14,34)}></td>
                        <td className={(14===s1 && 35===s2)?"td-one":(14===e1 && 35===e2)?"rd-two":(grid[13][34]===99)?"td--fina":(grid[13][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,35)} onMouseDown={() => clicked(14,35)}></td>
                        <td className={(14===s1 && 36===s2)?"td-one":(14===e1 && 36===e2)?"rd-two":(grid[13][35]===99)?"td--fina":(grid[13][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,36)} onMouseDown={() => clicked(14,36)}></td>
                        <td className={(14===s1 && 37===s2)?"td-one":(14===e1 && 37===e2)?"rd-two":(grid[13][36]===99)?"td--fina":(grid[13][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,37)} onMouseDown={() => clicked(14,37)}></td>
                        <td className={(14===s1 && 38===s2)?"td-one":(14===e1 && 38===e2)?"rd-two":(grid[13][37]===99)?"td--fina":(grid[13][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,38)} onMouseDown={() => clicked(14,38)}></td>
                        <td className={(14===s1 && 39===s2)?"td-one":(14===e1 && 39===e2)?"rd-two":(grid[13][38]===99)?"td--fina":(grid[13][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,39)} onMouseDown={() => clicked(14,39)}></td>
                        <td className={(14===s1 && 40===s2)?"td-one":(14===e1 && 40===e2)?"rd-two":(grid[13][39]===99)?"td--fina":(grid[13][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(14,40)} onMouseDown={() => clicked(14,40)}></td>
                    </tr>
                    <tr>
                        <td className={(15===s1 && 1===s2)?"td-one":(15===e1 && 1===e2)?"rd-two":(grid[14][0]===99)?"td--fina":(grid[14][0]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,1)} onMouseDown={() => clicked(15,1)}></td>
                        <td className={(15===s1 && 2===s2)?"td-one":(15===e1 && 2===e2)?"rd-two":(grid[14][1]===99)?"td--fina":(grid[14][1]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,2)} onMouseDown={() => clicked(15,2)}></td>
                        <td className={(15===s1 && 3===s2)?"td-one":(15===e1 && 3===e2)?"rd-two":(grid[14][2]===99)?"td--fina":(grid[14][2]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,3)} onMouseDown={() => clicked(15,3)}></td>
                        <td className={(15===s1 && 4===s2)?"td-one":(15===e1 && 4===e2)?"rd-two":(grid[14][3]===99)?"td--fina":(grid[14][3]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,4)} onMouseDown={() => clicked(15,4)}></td>
                        <td className={(15===s1 && 5===s2)?"td-one":(15===e1 && 5===e2)?"rd-two":(grid[14][4]===99)?"td--fina":(grid[14][4]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,5)} onMouseDown={() => clicked(15,5)}></td>
                        <td className={(15===s1 && 6===s2)?"td-one":(15===e1 && 6===e2)?"rd-two":(grid[14][5]===99)?"td--fina":(grid[14][5]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,6)} onMouseDown={() => clicked(15,6)}></td>
                        <td className={(15===s1 && 7===s2)?"td-one":(15===e1 && 7===e2)?"rd-two":(grid[14][6]===99)?"td--fina":(grid[14][6]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,7)} onMouseDown={() => clicked(15,7)}></td>
                        <td className={(15===s1 && 8===s2)?"td-one":(15===e1 && 8===e2)?"rd-two":(grid[14][7]===99)?"td--fina":(grid[14][7]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,8)} onMouseDown={() => clicked(15,8)}></td>
                        <td className={(15===s1 && 9===s2)?"td-one":(15===e1 && 9===e2)?"rd-two":(grid[14][8]===99)?"td--fina":(grid[14][8]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,9)} onMouseDown={() => clicked(15,9)}></td>
                        <td className={(15===s1 && 10===s2)?"td-one":(15===e1 && 10===e2)?"rd-two":(grid[14][9]===99)?"td--fina":(grid[14][9]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,10)} onMouseDown={() => clicked(15,10)}></td>
                        <td className={(15===s1 && 11===s2)?"td-one":(15===e1 && 11===e2)?"rd-two":(grid[14][10]===99)?"td--fina":(grid[14][10]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,11)} onMouseDown={() => clicked(15,11)}></td>
                        <td className={(15===s1 && 12===s2)?"td-one":(15===e1 && 12===e2)?"rd-two":(grid[14][11]===99)?"td--fina":(grid[14][11]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,12)} onMouseDown={() => clicked(15,12)}></td>
                        <td className={(15===s1 && 13===s2)?"td-one":(15===e1 && 13===e2)?"rd-two":(grid[14][12]===99)?"td--fina":(grid[14][12]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,13)} onMouseDown={() => clicked(15,13)}></td>
                        <td className={(15===s1 && 14===s2)?"td-one":(15===e1 && 14===e2)?"rd-two":(grid[14][13]===99)?"td--fina":(grid[14][13]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,14)} onMouseDown={() => clicked(15,14)}></td>
                        <td className={(15===s1 && 15===s2)?"td-one":(15===e1 && 15===e2)?"rd-two":(grid[14][14]===99)?"td--fina":(grid[14][14]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,15)} onMouseDown={() => clicked(15,15)}></td>
                        <td className={(15===s1 && 16===s2)?"td-one":(15===e1 && 16===e2)?"rd-two":(grid[14][15]===99)?"td--fina":(grid[14][15]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,16)} onMouseDown={() => clicked(15,16)}></td>
                        <td className={(15===s1 && 17===s2)?"td-one":(15===e1 && 17===e2)?"rd-two":(grid[14][16]===99)?"td--fina":(grid[14][16]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,17)} onMouseDown={() => clicked(15,17)}></td>
                        <td className={(15===s1 && 18===s2)?"td-one":(15===e1 && 18===e2)?"rd-two":(grid[14][17]===99)?"td--fina":(grid[14][17]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,18)} onMouseDown={() => clicked(15,18)}></td>
                        <td className={(15===s1 && 19===s2)?"td-one":(15===e1 && 19===e2)?"rd-two":(grid[14][18]===99)?"td--fina":(grid[14][18]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,19)} onMouseDown={() => clicked(15,19)}></td>
                        <td className={(15===s1 && 20===s2)?"td-one":(15===e1 && 20===e2)?"rd-two":(grid[14][19]===99)?"td--fina":(grid[14][19]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,20)} onMouseDown={() => clicked(15,20)}></td>
                        <td className={(15===s1 && 21===s2)?"td-one":(15===e1 && 21===e2)?"rd-two":(grid[14][20]===99)?"td--fina":(grid[14][20]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,21)} onMouseDown={() => clicked(15,21)}></td>
                        <td className={(15===s1 && 22===s2)?"td-one":(15===e1 && 22===e2)?"rd-two":(grid[14][21]===99)?"td--fina":(grid[14][21]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,22)} onMouseDown={() => clicked(15,22)}></td>
                        <td className={(15===s1 && 23===s2)?"td-one":(15===e1 && 23===e2)?"rd-two":(grid[14][22]===99)?"td--fina":(grid[14][22]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,23)} onMouseDown={() => clicked(15,23)}></td>
                        <td className={(15===s1 && 24===s2)?"td-one":(15===e1 && 24===e2)?"rd-two":(grid[14][23]===99)?"td--fina":(grid[14][23]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,24)} onMouseDown={() => clicked(15,24)}></td>
                        <td className={(15===s1 && 25===s2)?"td-one":(15===e1 && 25===e2)?"rd-two":(grid[14][24]===99)?"td--fina":(grid[14][24]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,25)} onMouseDown={() => clicked(15,25)}></td>
                        <td className={(15===s1 && 26===s2)?"td-one":(15===e1 && 26===e2)?"rd-two":(grid[14][25]===99)?"td--fina":(grid[14][25]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,26)} onMouseDown={() => clicked(15,26)}></td>
                        <td className={(15===s1 && 27===s2)?"td-one":(15===e1 && 27===e2)?"rd-two":(grid[14][26]===99)?"td--fina":(grid[14][26]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,27)} onMouseDown={() => clicked(15,27)}></td>
                        <td className={(15===s1 && 28===s2)?"td-one":(15===e1 && 28===e2)?"rd-two":(grid[14][27]===99)?"td--fina":(grid[14][27]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,28)} onMouseDown={() => clicked(15,28)}></td>
                        <td className={(15===s1 && 29===s2)?"td-one":(15===e1 && 29===e2)?"rd-two":(grid[14][28]===99)?"td--fina":(grid[14][28]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,29)} onMouseDown={() => clicked(15,29)}></td>
                        <td className={(15===s1 && 30===s2)?"td-one":(15===e1 && 30===e2)?"rd-two":(grid[14][29]===99)?"td--fina":(grid[14][29]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,30)} onMouseDown={() => clicked(15,30)}></td>
                        <td className={(15===s1 && 31===s2)?"td-one":(15===e1 && 31===e2)?"rd-two":(grid[14][30]===99)?"td--fina":(grid[14][30]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,31)} onMouseDown={() => clicked(15,31)}></td>
                        <td className={(15===s1 && 32===s2)?"td-one":(15===e1 && 32===e2)?"rd-two":(grid[14][31]===99)?"td--fina":(grid[14][31]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,32)} onMouseDown={() => clicked(15,32)}></td>
                        <td className={(15===s1 && 33===s2)?"td-one":(15===e1 && 33===e2)?"rd-two":(grid[14][32]===99)?"td--fina":(grid[14][32]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,33)} onMouseDown={() => clicked(15,33)}></td>
                        <td className={(15===s1 && 34===s2)?"td-one":(15===e1 && 34===e2)?"rd-two":(grid[14][33]===99)?"td--fina":(grid[14][33]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,34)} onMouseDown={() => clicked(15,34)}></td>
                        <td className={(15===s1 && 35===s2)?"td-one":(15===e1 && 35===e2)?"rd-two":(grid[14][34]===99)?"td--fina":(grid[14][34]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,35)} onMouseDown={() => clicked(15,35)}></td>
                        <td className={(15===s1 && 36===s2)?"td-one":(15===e1 && 36===e2)?"rd-two":(grid[14][35]===99)?"td--fina":(grid[14][35]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,36)} onMouseDown={() => clicked(15,36)}></td>
                        <td className={(15===s1 && 37===s2)?"td-one":(15===e1 && 37===e2)?"rd-two":(grid[14][36]===99)?"td--fina":(grid[14][36]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,37)} onMouseDown={() => clicked(15,37)}></td>
                        <td className={(15===s1 && 38===s2)?"td-one":(15===e1 && 38===e2)?"rd-two":(grid[14][37]===99)?"td--fina":(grid[14][37]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,38)} onMouseDown={() => clicked(15,38)}></td>
                        <td className={(15===s1 && 39===s2)?"td-one":(15===e1 && 39===e2)?"rd-two":(grid[14][38]===99)?"td--fina":(grid[14][38]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,39)} onMouseDown={() => clicked(15,39)}></td>
                        <td className={(15===s1 && 40===s2)?"td-one":(15===e1 && 40===e2)?"rd-two":(grid[14][39]===99)?"td--fina":(grid[14][39]===999)?"td-last":"rd-zro"} onMouseOver={() => hovered(15,40)} onMouseDown={() => clicked(15,40)}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
