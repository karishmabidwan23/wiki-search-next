import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { value } = req.query;
  const url = `${
    process.env.MEDIA_WIKI_BASE_URL
  }?action=query&format=json&list=search&srlimit=500&srsearch=${encodeURIComponent(
    value as string
  )}`;

  fetch(url)
    .then((resWiki) => resWiki.json())
    .then((it) => res.status(200).json(it.query.search))
    .catch((e) => res.status(400).json(e));
}
