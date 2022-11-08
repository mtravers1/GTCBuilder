import React from "react";
import Link from "next/link";
import { Menu } from "@mantine/core";
import { routes } from "../../constants/Routes";

// center section of the navbar

export default function CenterSection() {
  return (
    <>
      {/* About us */}
      <div>
        <Link href="/aboutus">
          <a>
            <button className="font-bold">About Us</button>
          </a>
        </Link>
      </div>
      {/* Categories */}
      <div>
        <Menu trigger="hover" width={200} transition="pop">
          <Menu.Target>
            <button className="cursor-pointer text-base font-bold">
              Categories
            </button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label className="font-bold text-black">
              <Link href={`${routes.allProperties}/apartments`}>
                Apartments
              </Link>
            </Menu.Label>
            <Menu.Label className="font-bold text-black">
              <Link href={`${routes.allProperties}/houses`}>Houses</Link>
            </Menu.Label>
            <Menu.Label className="font-bold text-black">
              <Link href={`${routes.allProperties}/condos`}>Condos</Link>
            </Menu.Label>
          </Menu.Dropdown>
        </Menu>
      </div>
      {/* Flats */}
      <div>
        <Menu trigger="hover" width={200} transition="pop">
          <Link href={routes.allProperties}>
            <button className="cursor-pointer text-base font-bold">All</button>
          </Link>

          <Menu.Dropdown>
            <Menu.Label className="font-bold text-black">
              <Link href={routes.allProperties}>Apartments</Link>
            </Menu.Label>
            <Menu.Label className="font-bold text-black">
              <Link href={routes.allProperties}>Houses</Link>
            </Menu.Label>
            <Menu.Label className="font-bold text-black">
              <Link href={routes.allProperties}>Cottages</Link>
            </Menu.Label>
          </Menu.Dropdown>
        </Menu>
      </div>
    </>
  );
}
