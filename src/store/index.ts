import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './apis/productsApi';

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

export { useGetAllProductsQuery } from './apis/productsApi';
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
