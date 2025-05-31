import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import FoodCard from '../../../components/FoodCard/FoodCard';
import useMenu from '../../../hooks/useMenu';

const RecommendedFood = () => {
    const [menu, loading] = useMenu();

    if (loading) return <p>loading...</p>
    return (
        <div className='max-w-6xl mx-auto'>
            <SectionHeading subHeading={'Should Try'} heading={'CHEF RECOMMENDS'}></SectionHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                {
                    menu.map((food, idx) => <FoodCard key={idx} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default RecommendedFood;