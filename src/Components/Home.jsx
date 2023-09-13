import React, { useEffect, useState } from "react";

import { favorite, getAllBooks } from "../redux/bookReducers";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-js-loader";
import { Link, json } from "react-router-dom";
import Mybook from "../Components/Mybook";

const Home = () => {
  const { myBooks, loading } = useSelector((state) => state.BooksinRedux);
  const dispatch = useDispatch();
  const [mydata, Setmydata] = useState([]);
  const [query, Setquery] = useState([]);
  // const [bookData, SetBookdata] = useState(
  //   JSON.parse(localStorage.getItem("bookData"))
  // );

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  useEffect(() => {
    if (myBooks.length !== 0) {
      Setmydata(myBooks.docs);
    }
  }, [myBooks]);

  // console.log("data from home components 😈",JSON.parse(localStorage.getItem("bookData")))

  const addfunc = (id) => {
    // console.log(localStorage.getItem("bookData"));
    let getlocaldata = localStorage.getItem("bookData");
    let myfav = myBooks.docs.filter((cur) => {
      return cur.key === id;
    });
    if (getlocaldata === null) {
      localStorage.setItem("bookData", JSON.stringify(myfav));
    } else {
      let localStorageItem = JSON.parse(localStorage.getItem("bookData"));
      let newItems = [...localStorageItem, ...myfav];
      localStorage.setItem("bookData", JSON.stringify(newItems));
    }
  };

  return (
    <>
      <div className="homepage">
        <div className="Book_head mb-4">
          <h1 className="font-semibold text-[25px]">Search by book name:</h1>

          <div className="Search_Box mt-4">
            <input
              type="text"
              placeholder="Enter Book name"
              className="search_input px-2 mx-4 border-black/50 border-2 rounded placeholder-black/50"
              // onChange={(e) => handleChange(e)}
              onChange={(e) => Setquery(e.target.value)}
            />
            {/* <button className="Search_button bg-blue-300 px-4 py-1 rounded">
              Search
            </button> */}
          </div>
        </div>
        {/* ******************************* */}
        <div className="Book_body  px-[5%]">
          <div className="flex flex-row flex-wrap gap-4 justify-center  sm:justify-start">
            {loading ? (
              <>
                {/* <div>loading</div> */}
                <Loader type="spinner-circle" bgColor={"black"} size={100} />
              </>
            ) : (
              <div className="flex flex-row flex-wrap gap-4 justify-center  sm:justify-start  ">
                {mydata.length !== 0 &&
                  // mydata?.map((data, index) => (
                  mydata
                    ?.filter((mydata) =>
                      mydata.title.toLowerCase().includes(query)
                    )
                    .map((data, index) => (
                      <div
                        key={index}
                        className="book_cart border-black/50 border-2 rounded  p-4 w-[100%] sm:w-[13rem] md:w-[15rem] text-left"
                      >
                        {/* <div className="ID">ID : {index + 1}</div> */}
                        <div className="Book_title">
                          <span>Book title :</span>
                          <span>{data.title}</span>
                        </div>
                        <div className="Edition">
                          <span>Edition Count :</span>
                          {data.edition_count}
                        </div>
                        <div className="author">
                          <span>Edition Count :</span>
                          {data.author_name ? data.author_name : "N/A"}
                        </div>
                        <div className="myShelf_Btn text-center ">
                          <button
                            onClick={() => addfunc(data.key)}
                            className="bg-[#1885f2]  rounded px-2 text-white"
                          >
                            Add to bookShelf
                          </button>
                        </div>
                      </div>
                    ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
