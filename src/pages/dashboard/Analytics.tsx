import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  summaryCardsData,
  recentSalesData,
  overviewData,
} from "@/lib/mockData";
import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
  ArrowUp,
} from "lucide-react";

const iconMap = {
  DollarSign: DollarSign,
  Users: Users,
  CreditCard: CreditCard,
  Activity: Activity,
};

const Analytics = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCardsData.map((card, index) => {
          const Icon = iconMap[card.icon as keyof typeof iconMap] || Activity;
          return (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-400">
                  {card.title}
                </h3>
                <Icon className="h-4 w-4 text-gray-400" />
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-bold">{card.value}</h2>
                <p className="text-xs text-gray-500">{card.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold">Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={overviewData}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-span-3 bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold">Recent Sales</h3>
          <p className="text-sm text-gray-500">You made 265 sales this month.</p>
          <div className="mt-4 space-y-4">
            {recentSalesData.map((sale, index) => (
              <div key={index} className="flex items-center">
                <div className="h-9 w-9 bg-gray-700 rounded-full flex items-center justify-center">
                  {/* Placeholder for avatar */}
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium">{sale.name}</p>
                  <p className="text-sm text-gray-500">{sale.email}</p>
                </div>
                <div className="font-medium">{sale.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
