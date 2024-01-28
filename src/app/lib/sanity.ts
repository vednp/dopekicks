import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId:"390nkfdk",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

export const urlFor = (source: any) => ImageUrlBuilder(client).image(source);
