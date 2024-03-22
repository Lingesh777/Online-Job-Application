import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
const ChartComponent = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const chart = new Chart(ctx, {
                type: 'bar', // Change chart type as needed (e.g., 'line', 'pie', 'bar')
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Job Postings',
                        data: [12, 19, 3, 5, 2, 3, 8], // Example data
                        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
                        borderColor: 'rgba(54, 162, 235, 1)', // Border color
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Clean up on unmount
            return () => {
                chart.destroy();
            };
        }
    }, []);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
}

export default ChartComponent;