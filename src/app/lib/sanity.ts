import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId:process.env.PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

export const urlFor = (source: any) => ImageUrlBuilder(client).image(source);
