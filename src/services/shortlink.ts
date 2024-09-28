import { SHORTLINK_DIRECT_ENDPOINT } from "@/commons/constants/api";

export const getDirectLink = async (shortCode: string) => {
  const response = await fetch(`${SHORTLINK_DIRECT_ENDPOINT}/${shortCode}`, {
    method: "GET",
    cache: "no-cache",
  });
  const status = response.status;

  if (status >= 400) {
    return { status, data: [] };
  }

  return await response.json();
};

export const postDirectLink = async (shortCode: string, fullLink: string) => {
  const response = await fetch(`${SHORTLINK_DIRECT_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      shortCode,
      longUrl: fullLink,
    }),
  }).then(async (res) => await res.json());
  console.log(response.data);
  return response.data;
};
