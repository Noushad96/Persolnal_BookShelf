import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// const mera = JSON.parse(localStorage.getItem("bookData"));

const Mybook = () => {
  // console.log(
  //   "my book ka data 😈",
  //   JSON.parse(localStorage.getItem("bookData"))
  // );
  const [mybookdata, setMybookdata] = useState(
    JSON.parse(localStorage.getItem("bookData"))
  );

  // const { myFav } = useSelector((state) => state.BooksinRedux);

  // console.log("mybookdata==> ", myFav);

  return (
    <>
      <div>
        <div className="font-semibold mb-8 text-left px-[5%]">My BookShelf</div>
        <div className="Book_body  px-[5%]">
          <div className="flex flex-row flex-wrap gap-4 justify-center  sm:justify-start">
            {mybookdata?.map((myfav, index) => (
              <div
                key={index}
                className="book_cart border-black/50 border-2 rounded  p-4 w-[100%] sm:w-[13rem] md:w-[15rem] text-lef"
              >
                <div className="Book_title">
                  <span>Book title :</span>
                  <span>{myfav.title}</span>
                </div>
                <div className="Edition">
                  <span>Edition Count :</span>
                  {myfav.edition_count}
                </div>
                {/* <div className="myShelf_Btn">
                  <button>Add to bookShelf </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mybook;
