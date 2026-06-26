"use client";

import { IoMdMail } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import { FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";

import Link from "next/link";

function Contact() {
  const copyText = () => {
    return navigator.clipboard.writeText("cristian99ser@gmail.com");
  };
  return (
    <section
      id="contact"
      className="relative border-b overflow-hidden scroll-mt-14"
    >
      <div className="flex flex-col justify-center gap-5 max-w-3xl mx-auto px-4 py-10 min-h-100">
        {/* Text */}
        <div>
          <span className="text-base font-bold text-gray-500">CONTACT</span>
          <h2 className="text-2xl font-black">Always open to connect</h2>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
          {/* MAIL */}
          <div className="flex flex-col gap-3 p-4 border rounded-lg overflow-hidden">
            {/* icons */}
            <div className="grid grid-cols-2">
              <IoMdMail className="size-6" />
              <button onClick={copyText} title="Copy" className="justify-self-end cursor-pointer">
                <FaRegCopy className="size-6 active:size-5 duration-75" />
              </button>
            </div>
            {/* text */}
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold">Email</span>
              <p className="break-all">cristian99ser@gmail.com</p>
            </div>
          </div>
          {/* LINKEDIN */}
          <div className="flex flex-col gap-3 p-4 border rounded-lg">
            {/* icons */}
            <div className="grid grid-cols-2">
              <FaLinkedin className="size-6" />
              <Link href="https://www.linkedin.com/in/cristian-serr%C3%B3n/" target="_blank" className="justify-self-end" title="Go to linkedin">
                <FaExternalLinkAlt className="size-5" />
              </Link>
            </div>
            {/* text */}
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold">Linkedin</span>
              <p className="break-all">https://www.linkedin.com/in/cristian-serr%C3%B3n/</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
