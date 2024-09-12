import { auth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';

import { getAnalytics } from "@/actions/get-analytics";
import { DataCard } from "./_components/data-card";
import { Chart } from "./_components/chart";

const Analytics = async () => {
    const { userId } = auth();

    if (!userId) {
        return redirect('/');
    }

    try {
        const { data, totalRevenue, totalSales } = await getAnalytics(userId);

         
        if (!data || !Array.isArray(data)) {
            throw new Error('Invalid data format');
        }

       
        const transformedData = data.map(item => ({
            number: item.name,  
            total: item.total
        }));

        return (
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <DataCard
                        label="Total Sales"
                        value={totalSales}
                    />
                    <DataCard
                        label="Total Revenue"
                        value={totalRevenue}
                        shouldFormat
                    />
                </div>
                <Chart
                    data={transformedData}   
                />
            </div>
        );
    } catch (error) {
        console.error("Error fetching analytics:", error);
        return <div>Error loading analytics data</div>;
    }
}

export default Analytics;
