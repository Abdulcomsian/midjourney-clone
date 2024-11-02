import { useDispatch, useSelector } from 'react-redux';
import { fetchPricingData, fetchPaymentMethods, postData, resetState } from '../features/apiSlice';

export const useApi = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.api);
    const { token } = useSelector((state) => state.auth);
    // Function to trigger GET request
    const get = (endpoint) => {
        dispatch(fetchData({ endpoint, token })); // Pass the token with the request
    };


    // Function to trigger POST request
    const post = (endpoint, payload) => {
        dispatch(postData({ endpoint, payload, token })); // Pass the token with the request
    };
    // Function to reset the API state
    const reset = () => {
        dispatch(resetState());
    };

    return {
        get,
        post,
        reset,
        data,
        loading,
        error,
    };
};
