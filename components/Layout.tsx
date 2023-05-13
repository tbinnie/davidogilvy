import Head from "next/head";
import React from "react";
import Header from "./Header";

export default function Layout({
  children,
  selected,
}: {
  children: React.ReactNode;
  selected?: string;
}) {
  return (
    <>
      <Head>
        <title>
          {selected
            ? `${selected.charAt(0).toUpperCase() + selected.slice(1)} | `
            : ""}
          David Ogilvy
        </title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header selected={selected} />
      {children}
    </>
  );
}
