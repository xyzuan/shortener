import { Separator } from "@/components/ui/separator";
import Typography from "@/components/ui/typography";
import { getDirectLink } from "@/services/shortlink";
import Link from "next/link";

const DetailPage = async ({
  params: { shortCode },
}: {
  params: {
    shortCode: string;
  };
}) => {
  const directLink = await getDirectLink(shortCode);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-screen max-w-6xl p-6">
      <Typography.H1 className="text-center mb-6">
        This is your shortened URL
      </Typography.H1>
      <Link href={`https://slink.xyzuan.my.id/${directLink.data.shortCode}`}>
        <Typography.P>
          https://slink.xyzuan.my.id/{directLink.data.shortCode}
        </Typography.P>
      </Link>
      <Separator className="h-6 my-3" orientation="vertical" />
      <Typography.P className="text-xs">Redirect to</Typography.P>
      <Separator className="h-6 my-3" orientation="vertical" />
      <Typography.P>{directLink.data.longUrl}</Typography.P>
    </div>
  );
};

export default DetailPage;
