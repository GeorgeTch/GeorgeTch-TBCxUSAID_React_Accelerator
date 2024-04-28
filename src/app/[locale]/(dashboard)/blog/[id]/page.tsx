import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import "../../../../../../styles/blog.css";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Recipes, BlogsResponse } from "../../../../../../types/types";

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data: BlogsResponse = await response.json();
  const blogItems = data.recipes;

  return blogItems.map((item) => ({
    id: item.id.toString(),
  }));
}

interface BlogParams {
  id: number;
  locale: string;
}

async function BlogPage({ params }: { params: BlogParams }) {
  unstable_setRequestLocale(params.locale);
  const response = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  const data: Recipes = await response.json();
  // const t = useTranslations("Blog");
  return (
    <>
      <Head>
        <link rel="preload" href={data.image} as="image" />
      </Head>
      <div className="blog-item-page">
        <div className="image-container">
          <Image src={data.image} alt={data.name} width={300} height={300} />
        </div>
        <div>
          <div className="blog-item-details">
            <h2 className="blog-item-title">{data.name}</h2>
            <p className="blog-item-description">{data.ingredients}</p>
            <p className="blog-item-description">{data.instructions}</p>
            <p className="blog-item-publish-date">Rating: {data.rating}</p>
            <Link href={"/blog"}>
              <button className="blog-item-read-more">
                Return to the Blog Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
