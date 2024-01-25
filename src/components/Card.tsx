import Image from "next/image";
import React from "react";
import image from '../../public/sl1.png'
type Props = {};

export default function Card({}: Props) {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-transparent shadow-md bg-clip-border rounded-xl w-72">
      <div className="relative mx-4 overflow-hidden text-white  bg-clip-border rounded-xl bg-blue-gray-500 ">
        <Image
          src={image}
          alt="image"
        />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Nike Air Force 107
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Lorem ipsum dolor sit.
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
