import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function DashboardCard() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div>Loading...</div>;
    }

    const chartOptions: ApexOptions = {
        chart: {
            type: 'line',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        colors: ['#6a0dad'],
    };

    const chartData = [
        {
            name: 'Vendas',
            data: [30, 40, 35, 50, 49, 60],
        },
    ];

    return (
        <div className="p-3 rounded-md flex justify-center items-center bg-purple-500 w-64 h-auto text-5xl font-thin">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card com Gráfico</Card.Title>
                    <Card.Text>
                        Visualize as tendências no gráfico abaixo.
                    </Card.Text>
                    <div className="chart-container">
                        <Chart
                            options={chartOptions}
                            series={chartData}
                            type="line"
                            height={200}
                        />
                    </div>
                    <Button variant="primary" className="mt-3">
                        Saiba Mais
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DashboardCard;
