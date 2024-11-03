import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React from "react";
import { useAccount } from "~/store/auth/hooks";

export default function Account() {
  const account = useAccount();

  return (
    <div className="mt-auto">
      <Popover className="relative">
        <PopoverButton className="my-3 p-3 rounded-full hover:bg-[#eff3f4] hover:text-black w-full flex ">
          <img
            src={account?.logoUrl}
            alt="logo"
            className="w-10 h-10 rounded-full"
          />{" "}
          <div className="justify-center items-center block">
            <div className="mx-3 text-[15px] font-bold">
              {account?.fullName}
            </div>
            <div className="mx-3 text-[15px] font-bold text-xs text-gray-500">
              @{account?.username}
            </div>
          </div>
        </PopoverButton>
        <PopoverPanel className="absolute bottom-full w-[300px] left-1/2 -translate-x-1/2 bg-gray-500 shadow-box">
          dsadsa
        </PopoverPanel>
      </Popover>
    </div>
  );
}
