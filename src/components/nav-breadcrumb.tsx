"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Link from "next/link";

export default function NavBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((path) => path);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          {segments.length > 0 && <BreadcrumbSeparator />}
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator className="hidden md:block" /> */}
        {/* <BreadcrumbItem>
                    <BreadcrumbPage>{pathname}</BreadcrumbPage>
                  </BreadcrumbItem> */}

        {segments.map((link, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const linkName = link[0].toUpperCase() + link.slice(1, link.length);
          const isLastPath = segments.length === index + 1;
          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {!isLastPath ? (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{linkName}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-primary">
                    {linkName}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {segments.length !== index + 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
