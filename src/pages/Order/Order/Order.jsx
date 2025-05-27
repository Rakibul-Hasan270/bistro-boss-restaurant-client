import Cover from '../../shared/Cover/Cover';
import orderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from '../OrderTab/OrderTab';
import useItem from '../../../hooks/useItem';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks'];     // count index for array
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [loading, , desserts, pizzas, salads, soups, drinks] = useItem();   // count index for array
    if (loading) return <p className='text-center mt-18'>loading...</p>
    return (
        <div className='mt-14 md:mt-0'>
            <Cover coverImg={orderImg} heading={'Order Now'} subHeading={'Would you like to try a dish?'}></Cover>

            <div className='max-w-6xl mx-auto text-center'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab item={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;