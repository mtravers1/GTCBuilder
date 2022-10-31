import React, { useState } from "react";
import { IconUser, IconPlus, IconLock, IconShieldLock } from "@tabler/icons";
import PrimaryButton from "../PrimaryButton";
import { Menu } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { routes } from "../../constants/Routes";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
// right secttion of the navbar

export default function RightSection() {
  // Is user authenticated or not?
  const isAuth = Cookie.get("isAuth");
  const router = useRouter();

  const logOut = () => {
    Cookie.remove("token");
    Cookie.remove("isAuth");
    router.push(routes.login);
  };

  return (
    <>
      {/* Auth user or guest user condition */}
      {isAuth ? (
        <div className="flex gap-4">
          {/* Auth user */}
          {/* Profile menu with avatar */}
          {/* Add listing */}
          <PrimaryButton link={routes.addProperty}>
            <div>
              <IconPlus size={20} />
            </div>
            <span>Add property</span>
          </PrimaryButton>
          <Menu position="left-start" width={200} shadow="lg">
            <Menu.Target>
              <div className="cursor-pointer flex items-center">
                <Image
                  src="/images/avatar.webp"
                  width={40}
                  height={40}
                  objectFit="cover"
                  className="rounded-full"
                  alt="avatar"
                />
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<IconUser size={14} />}>
                <Link href={routes.profile}>
                  <a>Profile</a>
                </Link>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item icon={<IconLock size={14} />}>
                <p onClick={logOut}>Log out</p>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      ) : (
        <div className="flex gap-4">
          {/* Guest user */}
          {/* Sign in button */}
          <PrimaryButton
            link={routes.login}
            className="bg-blue-500 hover:bg-blue-400"
          >
            <div>
              <IconShieldLock />
            </div>
            <div>Login</div>
          </PrimaryButton>
          <PrimaryButton
            link={routes.register}
            className="bg-black hover:bg-slate-800"
          >
            <div>
              <IconShieldLock />
            </div>
            <div>Register</div>
          </PrimaryButton>
        </div>
      )}
    </>
  );
}
