"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen py-24 px-28">
      <div className="grid md:grid-cols-3">
        <div className="col-span-2"></div>
        <div>
          <div className="space-y-2 mb-9">
            <h1 className="md:pr-5 text-[1.8rem] uppercase font-openSansLight pb-1">
              ANSWER YOUR BODY'S NEEDS
            </h1>
            <hr />
            <p className="leading-9 pt-4 text-lg font-openSansLight">
              The way ingredients are sourced affects the way we nourish our
              bodies. Author Mark Schatzer believes our body naturally develops
              an appetite for the foods and nutrients it needs to be healthy,
              but that artificial flavourings are getting in the way. This can
              be reversed by focusing on high-quality ingredients and being
              mindful as your appetite guides you to consume according to your
              body's needs
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-lg text-red-700 font-openSansRegular">
              BE MINDFUL
            </p>
            <p className="text-lg font-openSansBold">
              Sourcing local or organic food is a good way to start being more
              mindful about what you're cooking and eating
            </p>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <p className="uppercase text-5xl text-center">
          All the lastest from AEG
        </p>
      </div>
    </main>
  );
}
