import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import useMenu from '../../../hooks/useMenu';
import MenuCard from '../../shared/MenuCard/MenuCard';

const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    if (loading) return <p className='text-center'>Loading...</p>
    return (
        <section className='max-w-6xl mx-auto space-y-8'>
            <SectionHeading heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionHeading>
            <div className='grid md:grid-cols-2 gap-4 space-y-5'>
                {
                    popular.map((info, idx) => <MenuCard key={idx} info={info}></MenuCard>)
                }
            </div>
            <div className='flex justify-center'><button className='btn btn-outline border-0 border-b-4'>View Full Menu</button></div>
        </section>
    );
};

export default PopularMenu;