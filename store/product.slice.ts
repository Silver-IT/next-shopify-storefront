import { createSlice } from '@reduxjs/toolkit';
import { ProductFragment } from '../models';

export interface ProductState {
  loading: boolean;
  error: Error;
  data: ProductFragment;
}

interface CheckoutAction {
  payload: {
    error?: Error;
    data?: ProductFragment;
  };
}

const initialState = {
  loading: true,
  error: null,
  data: null
};

export default createSlice({
  name: 'product',
  initialState,
  reducers: {
    getRequest: (): ProductState => initialState,
    getFailure: (state: ProductState, { payload }: CheckoutAction) => {
      state.loading = false;
      state.error = payload.error;
    },
    getSuccess: (state: ProductState, { payload }: CheckoutAction) => {
      state.loading = false;
      state.data = payload.data;
    }
  }
});
