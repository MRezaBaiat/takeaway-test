interface Restaurant {
    name: string,
    status: 'open' | 'closed' | 'order ahead',
    isFavourite: boolean,
    sortingValues: {
        bestMatch: number,
        newest: number,
        ratingAverage: number,
        distance: number,
        popularity: number,
        averageProductPrice: number,
        deliveryCosts: number,
        minCost: number,
    }
}

export default Restaurant;
