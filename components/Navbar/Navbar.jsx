import Image from "next/image";
import InputWithIcon from "./InputWithIcon";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-12 flex items-center justify-between m-auto mt-1">
      <div className="flex items-center">
        <Link href="/">
          <div className="px-8">
            <Image src="/small-logo.svg" alt="logo" width={44} height={24} />
          </div>
        </Link>
        <InputWithIcon />
      </div>

      <div className="flex h-full items-center">
        <div className="flex items-center mx-3 hover:cursor-pointer ">
          <BorderColorOutlinedIcon fontSize="large" />
          <span className="font-normal  p-1">Write</span>
        </div>
        <div className="flex items-center mx-3 hover:cursor-pointer">
          <NotificationsNoneRoundedIcon fontSize="large" />
        </div>
        <div className="flex items-center mx-3 mr-6 hover:cursor-pointer">
          <AccountCircleIcon fontSize="large" />
          <ExpandMoreIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
