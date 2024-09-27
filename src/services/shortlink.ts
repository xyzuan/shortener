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
