import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import "dotenv/config";
export default function Home() {
  const [searchWord, setSearchWord] = useState();
  const [category, setCategory] = useState();
  const [currentCategory, setCurrentCategory] = useState();
  const [data, setData] = useState();
  const [reRender, setReRender] = useState(false);
  console.log(currentCategory);
  useEffect(() => {
    const searchWord = document.getElementById("searchWord");
    searchWord.focus();
    getCategory();
  }, []);
  useEffect(() => {}, [category]);
  useEffect(() => {}, [data]);

  const getWord = (e) => {
    const target = e.target.value;
    setSearchWord(target);
  };

  const changeCategory = (e) => {
    setCurrentCategory(e.target.value);
    const searchWord = document.getElementById("searchWord");
    searchWord.value = "";
    const notFound = document.getElementById("notFound");
    if (notFound) {
      notFound.parentNode.removeChild(notFound);
    }
    searchWord.focus();
  };

  const getCategory = async () => {
    setReRender(true);
    const res = await fetch(`${BASE_URL}/api/category`);
    const result = await res.json();
    setCategory(result.category);
    setReRender(false);
  };

  const getChartData = async () => {
    if (searchWord.length <= 1) {
      alert("검색어를 입력해 주세요");
      return document.getElementById("searchWord").focus();
    }
    setReRender(true);
    const res = await fetch(`${BASE_URL}/api/crawler`, {
      method: "POST",
      body: JSON.stringify({
        word: searchWord,
        cate: currentCategory ? currentCategory : "패션의류",
      }),
      headers: { "Content-type": "application/json" },
    });
    const result = await res.json();
    setData(result.chart);
    setReRender(false);
  };

  return (
    <Layout title="Home">
      {reRender ? (
        <div className="fixed left-0 top-0 h-screen w-screen flex justify-center items-center bg-gray-700 bg-opacity-50 z-10">
          <span className="text-3xl select-none">Loading...</span>
        </div>
      ) : null}
      <div className="h-[80vh] overflow-scroll">
        <div className="flex justify-center items-center space-x-2 w-full">
          <span className="w-16 px-1 flex justify-center items-center select-none">카테고리</span>
          <select
            name="category"
            id="category"
            className="w-[120px] h-[30px] py-0 px-2 rounded-md"
            onChange={(e) => changeCategory(e)}
          >
            {category &&
              category.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <span className="w-16 px-1 flex justify-center items-center select-none">검색어</span>
          <input
            type="text"
            name="searchWord"
            id="searchWord"
            className="w-full rounded-md outline-offset-0 outline-none h-[30px] px-2 py-1
            focus:outline-none"
            onKeyUp={getWord}
            onKeyPress={(e) => {
              if (e.key === "Enter") getChartData();
            }}
          />
          <button
            className="text-center w-16 h-[30px] ring-1 ring-blue-500 bg-blue-500 text-white rounded-md 
            hover:ring-blue-300 hover:bg-blue-600"
            onClick={getChartData}
          >
            검색
          </button>
        </div>
        <div className="chart space-y-2 py-2">
          {data && data !== "not found" ? (
            <>
              <ul className="p-2 bg-slate-300 rounded-md relative">
                {data.map((item, index) => (
                  <li key={index}>{`${Object.keys(item)} : ${Object.values(item)}`}</li>
                ))}
                <button
                  className="absolute right-0 top-0 text-red-500 mt-2 mr-2 font-extrabold text-xl"
                  onClick={(e) => {
                    setData();
                  }}
                >
                  ✕
                </button>
              </ul>
              <div className="flex justify-center items-center mt-10">
                {data === "not found" ? (
                  <span id="notFound" className="text-lg">
                    검색 결과가 존재하지 않습니다
                  </span>
                ) : null}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
