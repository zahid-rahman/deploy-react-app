import axios from "axios";
import { env } from "../shared/env";

export async function getPost(limit: number) {
    console.log(import.meta)
  const posts = await axios({
    method: "GET",
    url: `${env.apiEndpoints}/posts?_limit=${limit || 5}`,
  });

  console.log(posts)

  return posts;
}
