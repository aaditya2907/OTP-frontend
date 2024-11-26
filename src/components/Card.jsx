import React from "react";

function Card() {
  function moveNext(id) {
    const next = document.getElementById(id);
    next.focus();
  }
  function movePrev(event, prev) {
    if (event.key === "Backspace") {
      if (event.target.value === "") {
        event.preventDefault();
        document.getElementById(prev).focus();
      } else {
        event.preventDefault();
        event.target.value = "";
      }
    }
  }
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="h-96 w-96 border-2 bg-white border-white rounded-3xl flex flex-col justify-center items-center">
        <div className="font-bold text-3xl mb-10">Login Via OTP</div>
        <div className="flex flex-row">
          <input
            type="text"
            maxLength="1"
            id="inp1"
            className="border-2 border-black w-14 h-9 p-3 mx-2"
            onInput={() => {
              moveNext("inp2");
            }}
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                event.preventDefault();
                event.target.value = "";
              }
            }}
          />

          <input
            type="text"
            maxLength="1"
            id="inp2"
            className="border-2 border-black w-14 h-9 p-3 mx-2"
            onInput={() => {
              moveNext("inp3");
            }}
            onKeyDown={(event) => {
              movePrev(event, "inp1");
            }}
          />

          <input
            type="text"
            maxLength="1"
            id="inp3"
            className="border-2 border-black w-14 h-9 p-3 mx-2"
            onInput={() => {
              moveNext("inp4");
            }}
            onKeyDown={(event) => {
              movePrev(event, "inp2");
            }}
          />

          <input
            type="text"
            maxLength="1"
            id="inp4"
            className="border-2 border-black w-14 h-9 p-3 mx-2"
            onKeyDown={(event) => {
              movePrev(event, "inp3");
            }}
          />
        </div>
        <div className="mt-10">
          <button className="border-2 border-black m-3 py-2 px-4 rounded-lg bg-neutral-300 hover:bg-neutral-400">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
