'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { FaAngleRight } from 'react-icons/fa6';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export function BreadcrumbLayout() {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const isLast = index === segments.length - 1;
      return (
        <Fragment key={href}>
          <BreadcrumbItem>
            {isLast ? (
              <BreadcrumbPage className="capitalize">{segment}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink asChild>
                <Link className="capitalize" href={href}>
                  {segment}
                </Link>
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
          {!isLast && (
            <BreadcrumbSeparator>
              <FaAngleRight />
            </BreadcrumbSeparator>
          )}
        </Fragment>
      );
    });
  };

  const pathnameLength = generateBreadcrumbs().length;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {pathnameLength === 0 ? (
            <BreadcrumbPage className="capitalize">Home</BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {pathnameLength > 0 && (
          <BreadcrumbSeparator>
            <FaAngleRight />
          </BreadcrumbSeparator>
        )}
        {generateBreadcrumbs()}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
