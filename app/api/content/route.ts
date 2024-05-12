import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

const posts = [
    {
      title: "The Art of Programming",
      slug: "the-art-of-programming",
      content: "Programming is both a science and an art. It requires logical thinking, creativity, and attention to detail."
    },
    {
      title: "Exploring the Universe",
      slug: "exploring-the-universe",
      content: "The universe is vast and full of mysteries waiting to be discovered. From distant galaxies to black holes, there's always something new to explore."
    },
    {
      title: "Cooking Adventures",
      slug: "cooking-adventures",
      content: "Cooking is not just about following recipes; it's about experimenting with flavors and creating delicious dishes that delight the senses."
    },
    {
      title: "The Power of Music",
      slug: "the-power-of-music",
      content: "Music has the power to evoke emotions, bring people together, and inspire creativity. It's a universal language that transcends barriers."
    },
    {
      title: "The Joy of Reading",
      slug: "the-joy-of-reading",
      content: "Reading opens doors to new worlds, expands knowledge, and fuels imagination. It's a lifelong journey of discovery and learning."
    }
  ];

export async function GET() {

    const session = await getServerSession();
    return NextResponse.json(posts);
}

  