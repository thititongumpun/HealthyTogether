"use client";

import Loading from "@/app/components/Loading";
import { useNotification } from "@/hooks/useNotification";
import React, { useState } from "react";

type Props = {};

export default function NotificationPage({}: Props) {
  const tableItems = [
    {
      label: "กิจกรรมกำหนดเป้าหมายเอง",
      title: "Top pages",
      items: [
        {
          prop: "https://www.google.com",
          clicks: "129",
          impression: "Good",
        },
        {
          prop: "https://www.youtube.com",
          clicks: "798",
          impression: "Normal",
        },
        {
          prop: "https://www.github.com",
          clicks: "399",
          impression: "Great",
        },
        {
          prop: "https://www.floatui.com",
          clicks: "678",
          impression: "Bad",
        },
      ],
    },
    {
      label: "กิจกรรมตามคำแนะนำ",
      title: "Top countries",
      items: [
        {
          prop: "Mauritania",
          clicks: "203",
          impression: "Good",
        },
        {
          prop: "United state america",
          clicks: "408",
          impression: "Great",
        },
        {
          prop: "France",
          clicks: "99",
          impression: "Bad",
        },
        {
          prop: "Germany",
          clicks: "320",
          impression: "Normal",
        },
      ],
    },
    // {
    //   label: "Devices",
    //   title: "Top devices",
    //   items: [
    //     {
    //       prop: "Android",
    //       clicks: "360",
    //       impression: "Normal",
    //     },
    //     {
    //       prop: "Linux",
    //       clicks: "190",
    //       impression: "Good",
    //     },
    //     {
    //       prop: "Macbook",
    //       clicks: "129",
    //       impression: "Good",
    //     },
    //     {
    //       prop: "Windows",
    //       clicks: "50",
    //       impression: "Bad",
    //     },
    //   ],
    // },
  ];

  const [selectedItem, setSelectedItem] = useState(0);
  const labelColors: any = {
    Good: {
      color: "text-green-600 bg-green-50",
    },
    Normal: {
      color: "text-blue-600 bg-blue-50",
    },
    Great: {
      color: "text-pink-600 bg-pink-50",
    },
    Bad: {
      color: "text-red-600 bg-red-50",
    },
  };

  const { data, isLoading } = useNotification();

  if (isLoading) {
    return <Loading />;
  }

  // console.log(data?.map((x) => x.notCompleted.filter((x) => x.isTarget === true)));

  const totalNotification = data
    ?.map((x) => x.notCompleted.filter((x) => x.isTarget === true).length)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="md:px-8l mx-auto mt-5 max-w-screen-xl px-4">
      <div className="max-w-lg">
        <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
          รายการแจ้งเตือน {totalNotification} รายการ
        </h3>
        <p className="mt-2 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="mt-12 overflow-x-auto text-sm">
        <ul
          role="tablist"
          className="flex w-full items-center gap-x-3 overflow-x-auto border-b"
        >
          {tableItems.map((item, idx) => (
            <li
              key={idx}
              className={`border-b-2 py-2 ${
                selectedItem == idx
                  ? "border-indigo-600 text-indigo-600"
                  : "border-white text-gray-500"
              }`}
            >
              <button
                role="tab"
                aria-selected={selectedItem == idx ? true : false}
                aria-controls={`tabpanel-${idx + 1}`}
                className="rounded-lg px-4 py-2.5 font-medium duration-150 hover:bg-gray-50 hover:text-indigo-600 active:bg-gray-100"
                onClick={() => setSelectedItem(idx)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <table className="w-full table-auto text-left">
          <thead className="border-b font-medium text-gray-600">
            <tr>
              <th className="w-9/12 py-4 pr-6">
                {tableItems[selectedItem].title}
              </th>
              <th className="py-4 pr-6">Clicks</th>
              <th className="py-4 pr-6">Impression</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-600">
            {tableItems[selectedItem].items.map((item, idx) => (
              <tr key={idx}>
                <td className="whitespace-nowrap py-4 pr-6">{item.prop}</td>
                <td className="whitespace-nowrap py-4 pr-6 text-indigo-600">
                  {item.clicks}
                </td>
                <td className="whitespace-nowrap py-4 pr-6">
                  <span
                    className={`rounded-full px-3 py-2 text-xs font-semibold ${
                      labelColors[item?.impression]?.color || ""
                    }`}
                  >
                    {item.impression}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
