import { FaUserAlt, FaDollarSign } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Statistic = () => {
    const axiosSecure = useAxiosSecure();
    const { data: stateData = {}, isLoading } = useQuery({
        queryKey: ['stateData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin-state');
            return data;
        }
    });

    if (isLoading) return <LoadingSpinner />;

    // Prepare data for pie chart
    const piechartData = [
        { name: 'Total Products', value: stateData.totalProducts || 0 },
        { name: 'Total Users', value: stateData.totalUsers || 0 },
        { name: 'Total Reviews', value: stateData.totalReviews || 0 },
    ];

    return (
        <div className='mt-12'>
            {/* Small cards */}
            <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {/* Sales Card */}
                <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                    <div className='bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40'>
                        <FaDollarSign className='w-6 h-6 text-white' />
                    </div>
                    <div className='p-4 text-right'>
                        <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                            Total Products
                        </p>
                        <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                            {stateData.totalProducts}
                        </h4>
                    </div>
                </div>
                {/* Users Card */}
                <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                    <div className='bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40'>
                        <FaUserAlt className='w-6 h-6 text-white' />
                    </div>
                    <div className='p-4 text-right'>
                        <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                            Total Users
                        </p>
                        <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                            {stateData.totalUsers}
                        </h4>
                    </div>
                </div>
                {/* Total Reviews */}
                <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                    <div className='bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40'>
                        <BsFillCartPlusFill className='w-6 h-6 text-white' />
                    </div>
                    <div className='p-4 text-right'>
                        <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                            Total Reviews
                        </p>
                        <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                            {stateData.totalReviews}
                        </h4>
                    </div>
                </div>
            </div>

            {/* Pie chart */}
            <div className='mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
                <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2'>
                    <ResponsiveContainer width='100%' height={400}>
                        <PieChart>
                            <Pie
                                data={piechartData}
                                cx='50%'
                                cy='50%'
                                outerRadius={150}
                                fill='#8884d8'
                                dataKey='value'
                                label={(entry) => `${entry.name}: ${entry.value}`}
                            >
                                {piechartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend align='center' verticalAlign='bottom' />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
