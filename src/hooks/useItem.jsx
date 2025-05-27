import useMenu from './useMenu';

const useItem = () => {
    const [menu, loading] = useMenu();

    const offered = menu?.filter(info => info.category === 'offered');
    const desserts = menu?.filter(info => info.category === 'dessert');
    const pizzas = menu?.filter(info => info.category === 'pizza');
    const salads = menu?.filter(info => info.category === 'salad');
    const soups = menu?.filter(info => info.category === 'soup');
    const drinks = menu?.filter(info => info.category === 'drinks');

    return [loading, offered, desserts, pizzas, salads, soups, drinks];
};

export default useItem;