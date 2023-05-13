import Head from "next/head";
import Link from "next/link";
import Img from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="bg-dobeige py-16 px-6 lg:p-12 min-h-screen">
        <div className="hero__wrapper">
          <h1 className="text-4xl tracking-[1.5rem] text-center py-12">
            DAVID OGILVY
          </h1>
          <Img
            src="/imgs/hero-img.png"
            width={3741}
            height={2806}
            className="lg:h-[45rem] w-auto mx-auto mb-12"
            alt=""
          />
        </div>
      </section>
    </Layout>
  );
}
