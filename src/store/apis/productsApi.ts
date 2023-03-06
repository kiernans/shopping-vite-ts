import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
	reducerPath: 'products',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
	endpoints: (builder) => ({
		getAllProducts: builder.query<any, void>({
			query: () => {
				return {
					url: '/products',
					method: 'GET',
				};
			},
		}),
	}),
});

export const { useGetAllProductsQuery } = productsApi;
