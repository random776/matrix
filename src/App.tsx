import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [n, setN] = useState(3);
  const [m, setM] = useState(3);
  const [matrix, setMatrix] = useState(
    [...Array(n)].map((_, i) => [...Array(m)].map((_, j) => i * n + j + 1))
  );
  const [factor, setFactor] = useState(1); //デフォルト値は１
  const [factor2, setFactor2] = useState(1); //デフォルト値は１
  const [edittingRow, setEdittingRow] = useState(0); //デフォルト値は0行目
  const [edittingRow2, setEdittingRow2] = useState(0); //デフォルト値は0行目
  const [edittingRow3, setEdittingRow3] = useState(0); //デフォルト値は0行目
  const [edittingRow4, setEdittingRow4] = useState(0); //デフォルト値は0行目
  const [edittingRow5, setEdittingRow5] = useState(1); //デフォルト値は0行目
  // matrix=[[1,2,3],[4,5,6],[7,8,9]]
  //[[...Array(n)].map((_,j)=>0*n+j+1,[...Array(n)].map((_,j)=>0*n+j+1,[...Array(n)].map((_,j)=>0*n+j+1]=[[1,2,3],[4,5,6],[7,8,9]]

  //()内は初期値
  useEffect(() => {
    setMatrix(
      [...Array(n)].map((_, i) => [...Array(m)].map((_, j) => i * n + j + 1))
    );
  }, [m, n]);
  return (
    <>
      <h2>行基本変形演算ツール</h2>
      <p>行基本変形の計算を一つ一つ追っていくためのアプリケーションです。</p>
      <p>注）列基本変形には対応していません。</p>
      <p>注）プログラムの特性上、行と列を0行目から数えています。</p>
      <p>（例「1行目の1列目」→「0行目の0列目」）</p>
      <p>注）スマートフォン環境で行うとうまく操作ができません。パソコン環境で操作することを推奨します。</p>
      <p>
        <input
          type="number"
          key={"行数"}
          value={n}
          onChange={(e) => {
            const newN = Number(e.target.value);
            setN(newN);
          }}
        />
        行
        <input
          type="number"
          key={"列数"}
          value={m}
          onChange={(e) => {
            const newM = Number(e.target.value);
            setM(newM);
          }}
        />
        列行列
      </p>
      <table>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <td key={`${i},${j}`}>
                  {/* こうすることで被らない！ */}
                  <input
                    type="number"
                    key={j}
                    value={matrix[i][j]}
                    onChange={(e) => {
                      const newMatrix = [...matrix];
                      newMatrix[i][j] = parseFloat(e.target.value);
                      setMatrix(newMatrix);
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>操作1: m行目をλ倍する</p>
      <p>
        <input
          type="number"
          key="n"
          value={edittingRow}
          onChange={(e) => {
            setEdittingRow(parseFloat(e.target.value)); //EdittingRowにiという値を格納する
          }}
        />
        行目を
        <input
          type="number"
          key="m"
          value={factor}
          onChange={(e) => {
            setFactor(parseFloat(e.target.value)); //Factorに格納した
          }}
        />
        倍する
        <button
          key="no1button"
          onClick={() => {
            const newMatrix = matrix.map((row, i) =>
              i === edittingRow ? row.map((column) => column * factor) : row
            );
            setMatrix(newMatrix);
          }}
        >
          実行
        </button>
      </p>
      <p>操作2: m行目をλ倍してn行目に加える</p>
      <p>
        <input
          type="number"
          key="n2"
          value={edittingRow3}
          onChange={(e) => {
            setEdittingRow3(parseFloat(e.target.value)); //EdittingRowにiという値を格納する
          }}
        />
        行目を
        <input
          type="number"
          key="m2"
          value={factor2}
          onChange={(e) => {
            setFactor2(parseFloat(e.target.value)); //Factorに格納した
          }}
        />
        倍して
        <input
          type="number"
          key="o2"
          value={edittingRow2}
          onChange={(e) => {
            setEdittingRow2(parseFloat(e.target.value)); //EdittingRowにiという値を格納する
          }}
        />
        行目に加える
        <button
          key="no2button"
          onClick={() => {
            const newMatrix = [...matrix];
            for (let j = 0; j < matrix[edittingRow3].length; j++) {
              newMatrix[edittingRow2][j] +=
                factor2 * newMatrix[edittingRow3][j];
            }

            setMatrix(newMatrix);
          }}
        >
          実行
        </button>
      </p>
      <p>操作3: m行目とn行目とを入れ替える</p>
      <p>
        <input
          type="number"
          key="n3"
          value={edittingRow4}
          onChange={(e) => {
            setEdittingRow4(parseFloat(e.target.value)); //EdittingRowにiという値を格納する
          }}
        />
        行目と
        <input
          type="number"
          key="m3"
          value={edittingRow5}
          onChange={(e) => {
            setEdittingRow5(parseFloat(e.target.value)); //Factorに格納した
          }}
        />
        行目とを入れ替える
        <button
          key="no3button"
          onClick={() => {
            const newMatrix = [...matrix];
            for (let j = 0; j < matrix[edittingRow3].length; j++) {
              const matrixFragment = newMatrix[edittingRow4][j];
              newMatrix[edittingRow4][j] = newMatrix[edittingRow5][j];
              newMatrix[edittingRow5][j] = matrixFragment;
            }
            setMatrix(newMatrix);
          }}
        >
          実行
        </button>
      </p>
      <small>
        Copyright(c) 2023 @東京大学駒場キャンパス ランゲルハンス棟 All Rights
        Reserved.
      </small>
    </>
  );
}

export default App;
