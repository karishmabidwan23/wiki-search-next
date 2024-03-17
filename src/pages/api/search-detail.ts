import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { value } = req.query;
  const url = `${process.env.MEDIA_WIKI_BASE_URL}?action=query&format=json&prop=extracts&titles=${value}&formatversion=2&redirects=1&origin=*`;

  fetch(url)
    .then((resWiki) => resWiki.json())
    .then((it) => res.status(200).json(it.query.pages))
    .catch((e) => res.status(400).json(e));
}
